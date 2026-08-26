"use client";

import { useEffect, useRef, useState } from "react";

const WORDS = [
  "software engineer.",
  "creator.",
  // "student.",
  "programmer.",
  "n innovator.",
  "full-stack developer.",
  "life-long learner.",
  "machine learning developer.",
];

const TYPING_SPEED = 90;
const TYPING_JITTER = 0;
const ERASING_SPEED = 50;
const ERASING_JITTER = 0;
const HOLD_DURATION = 1800;

function TypingText() {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // only drives the caret's CSS class

  // Starts at a fixed index so server and client render the same markup on
  // first paint (Math.random() here would desync SSR/hydration output).
  const wordIdxRef = useRef(0);
  const charCountRef = useRef(0); // source of truth for how many chars are shown
  const phaseRef = useRef("typing"); // source of truth for typing/erasing logic
  const lastStepRef = useRef(0);
  const nextDelayRef = useRef(TYPING_SPEED);
  const holdUntilRef = useRef(0);

  useEffect(() => {
    // Randomize the starting word on the client only, after hydration.
    wordIdxRef.current = Math.floor(Math.random() * WORDS.length);

    let rafId;

    function step(timestamp) {
      rafId = requestAnimationFrame(step);

      if (timestamp < holdUntilRef.current) return;
      if (timestamp - lastStepRef.current < nextDelayRef.current) return;
      lastStepRef.current = timestamp;

      const word = WORDS[wordIdxRef.current];

      if (phaseRef.current === "typing") {
        charCountRef.current += 1;
        nextDelayRef.current = TYPING_SPEED + Math.random() * TYPING_JITTER;
        setText(word.slice(0, charCountRef.current));

        if (charCountRef.current === word.length) {
          holdUntilRef.current = timestamp + HOLD_DURATION;
          phaseRef.current = "erasing";
        }
      } else {
        charCountRef.current -= 1;
        nextDelayRef.current = ERASING_SPEED + Math.random() * ERASING_JITTER;
        setText(word.slice(0, charCountRef.current));

        if (charCountRef.current === 0) {
          wordIdxRef.current = (wordIdxRef.current + 1) % WORDS.length;
          phaseRef.current = "typing";
        }
      }

      setPhase(phaseRef.current);
    }

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <>
      {wordIdxRef.current === 4 ? (
        <span className="typed-text highlight">{text}</span>
      ) : (
        <span className="typed-text highlight">&nbsp;{text}</span>
      )}
      <span className={`caret ${phase === "typing" ? "typing" : ""}`}>
        &nbsp;
      </span>
    </>
  );
}

export default TypingText;
