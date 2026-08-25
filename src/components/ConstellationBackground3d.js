import { useEffect, useRef } from "react";
import * as THREE from "three";

function ConstellationBackground3d({ children }) {
  const containerRef = useRef(null);
  const mountRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const mount = mountRef.current;

    const PARTICLE_COUNT = 90;
    const LINK_DISTANCE = 2.0;
    const FIELD_SIZE = 8;
    const FPS_CAP = 30;
    const frameInterval = 1000 / FPS_CAP;

    let width = container.clientWidth;
    let height = container.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // particles
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const velocities = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * FIELD_SIZE;
      positions[i * 3 + 1] = (Math.random() - 0.5) * FIELD_SIZE;
      positions[i * 3 + 2] = (Math.random() - 0.5) * FIELD_SIZE;
      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.004,
          (Math.random() - 0.5) * 0.004,
          (Math.random() - 0.5) * 0.004,
        ),
      );
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0xaac4ff,
      size: 0.06,
      sizeAttenuation: true, // closer particles look bigger — this is what sells the 3D depth
      transparent: true,
      opacity: 0.9,
    });
    const points = new THREE.Points(particleGeo, particleMat);
    group.add(points);

    // lines — preallocated buffer, positions rewritten each frame, no reallocation
    const maxLines = PARTICLE_COUNT * 6;
    const linePositions = new Float32Array(maxLines * 2 * 3);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3),
    );
    lineGeo.setDrawRange(0, 0);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x8caaff,
      transparent: true,
      opacity: 0.22,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    group.add(lines);

    let rafId = null;
    let running = true;
    let lastFrame = 0;

    function step(timestamp) {
      rafId = requestAnimationFrame(step);
      if (!running) return;
      if (timestamp - lastFrame < frameInterval) return;
      lastFrame = timestamp;

      const posAttr = particleGeo.attributes.position;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const ix = i * 3;
        posAttr.array[ix] += velocities[i].x;
        posAttr.array[ix + 1] += velocities[i].y;
        posAttr.array[ix + 2] += velocities[i].z;
        for (let a = 0; a < 3; a++) {
          if (Math.abs(posAttr.array[ix + a]) > FIELD_SIZE / 2) {
            velocities[i].setComponent(a, velocities[i].getComponent(a) * -1);
          }
        }
      }
      posAttr.needsUpdate = true;

      // rebuild line segments between nearby particles — O(n²) but n=90, trivial at 30fps
      let lineIdx = 0;
      const arr = posAttr.array;
      for (let i = 0; i < PARTICLE_COUNT && lineIdx < maxLines; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT && lineIdx < maxLines; j++) {
          const dx = arr[i * 3] - arr[j * 3];
          const dy = arr[i * 3 + 1] - arr[j * 3 + 1];
          const dz = arr[i * 3 + 2] - arr[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < LINK_DISTANCE) {
            const o = lineIdx * 6;
            linePositions[o] = arr[i * 3];
            linePositions[o + 1] = arr[i * 3 + 1];
            linePositions[o + 2] = arr[i * 3 + 2];
            linePositions[o + 3] = arr[j * 3];
            linePositions[o + 4] = arr[j * 3 + 1];
            linePositions[o + 5] = arr[j * 3 + 2];
            lineIdx++;
          }
        }
      }
      lineGeo.attributes.position.needsUpdate = true;
      lineGeo.setDrawRange(0, lineIdx * 2);

      // slow auto-rotation — this is what makes it read as "3D" rather than a flat field
      group.rotation.y += 0.0006;
      group.rotation.x += 0.0002;

      renderer.render(scene, camera);
    }

    rafId = requestAnimationFrame(step);

    function handleResize() {
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    window.addEventListener("resize", handleResize);

    function handleVisibility() {
      running = document.visibilityState === "visible";
    }
    document.addEventListener("visibilitychange", handleVisibility);

    const observer = new IntersectionObserver(
      ([entry]) => {
        running =
          entry.isIntersecting && document.visibilityState === "visible";
      },
      { threshold: 0 },
    );
    observer.observe(container);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      observer.disconnect();
      particleGeo.dispose();
      particleMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={containerRef} className="constellation-bg">
      <div className="constellation-bg__gradient" />
      <div ref={mountRef} className="constellation-bg__canvas" />
      <div className="constellation-bg__content">{children}</div>
    </div>
  );
}

export default ConstellationBackground3d;
