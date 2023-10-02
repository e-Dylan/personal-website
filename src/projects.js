import waygoThumbnail from "./resources/project_thumbnails/waygo-thumbnail.png";
import speednetThumbnail from "./resources/project_thumbnails/speed-net-thumbnail.png";
import weatherAppThumbnail from "./resources/project_thumbnails/weather-app-thumbnail.png";
import faceGeneratorThumbnail from "./resources/project_thumbnails/face-generator-thumbnail.gif";
import faceAnimatorThumbnail from "./resources/project_thumbnails/face-animator-thumbnail.gif";
import sortingAlgorithmThumbnail from "./resources/project_thumbnails/sorting-algorithm-thumbnail.gif";

const projects = {
  waygo: {
    title: "Waygo Navigation App",
    image: waygoThumbnail,
    category: "Web/Mobile App",
    tech: "React, NodeJS, SCSS, MySQL, REST",
    description:
      "Waygo is a navigation app allowing users to plan optimal routes, visualize traffic, find nearby transit, and much more.",
    date: "06/12/2020 - Current",
    github: "https://github.com/e-Dylan/waygo",
    "live-demo": "",
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
    "live-demo": "",
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
    "live-demo": "",
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
    "live-demo": "",
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
    "live-demo": "",
  },
};

export default projects;
