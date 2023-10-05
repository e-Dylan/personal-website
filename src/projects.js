import vlmThumbnail from "./resources/project_thumbnails/vlm-thumbnail.png";
import waygoThumbnail from "./resources/project_thumbnails/waygo-thumbnail.png";
import speednetThumbnail from "./resources/project_thumbnails/speed-net-thumbnail.png";
import weatherAppThumbnail from "./resources/project_thumbnails/weather-app-thumbnail.png";
import faceGeneratorThumbnail from "./resources/project_thumbnails/face-generator-thumbnail.gif";
import faceAnimatorThumbnail from "./resources/project_thumbnails/face-animator-thumbnail.gif";
import sortingAlgorithmThumbnail from "./resources/project_thumbnails/sorting-algorithm-thumbnail.gif";

const projects = {
  vlm: {
    title: "Veteran's Legacy Memorial",
    image: vlmThumbnail,
    category: "Web/Mobile App",
    tech: "React/Nextjs, NodeJS, Python, REST API",
    description:
      "Veteran's Legacy Memorial (VLM) is a web and mobile application built for and hosted by the American government which serves millions of veterans.",
    date: "2021 - 2022",
    seeLive: "https://www.vlm.cem.va.gov",
  },
  waygo: {
    title: "Waygo Navigation App",
    image: waygoThumbnail,
    category: "Web/Mobile App",
    tech: "React, NodeJS, SCSS, MySQL, REST API",
    description:
      "Waygo is a navigation app allowing users to plan optimal routes, visualize traffic, find nearby transit, and much more.",
    date: "06/12/2020 - Current",
    github: "https://github.com/e-Dylan/waygo",
    seeLive: "https://waygo.vercel.app",
  },
  faceGenerator: {
    title: "Face Generation Neural Network",
    image: faceGeneratorThumbnail,
    category: "Machine Learning Algorithm",
    tech: "Python, PyTorch, Colab",
    description:
      "Face generation software trained using a generative adversarial network (GAN) algorithm, trained on human face datasets.",
    date: "11/26/2020",
    github: "https://github.com/e-Dylan/gan_facegenerator",
    seeLive: "",
  },
  speednet: {
    title: "Deeplearning Vehicle Speednet",
    image: speednetThumbnail,
    category: "Machine Learning Algorithm",
    tech: "Python, PyTorch, Tensorboard",
    description:
      "AI car speed prediction model in PyTorch using front-facing camera driving data.",
    date: "07/15/2020",
    github: "https://github.com/e-Dylan/speed-net",
    seeLive: "",
  },
  weather_app: {
    title: "Weather App Widget",
    image: weatherAppThumbnail,
    category: "Web/Mobile App",
    tech: "Javascript, HTML/CSS, API",
    description:
      "Small weather app widget with animation and icons to be displayed in a browser or mobile app.",
    date: "02/21/2017",
    github: "https://github.com/e-Dylan/simple-weather-app",
    seeLive: "",
  },
  sorting_algorithms: {
    title: "Sorting Algorithm Visualizer",
    image: sortingAlgorithmThumbnail,
    category: "Java Program",
    tech: "Java, JavaFX",
    description:
      "Sorting algorithm implementations in Java with a simple JavaFX GUI.",
    date: "10/15/2019",
    github: "https://github.com/e-Dylan/",
    seeLive: "",
  },
};

export default projects;
