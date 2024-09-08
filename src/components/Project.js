import React from "react";
import "./Projects.scss"; // Import the CSS module for styling

const projects = [
  {
    name: "Spotify Clone",
    link: "https://github.com/hba777/ScuffedSpotify",
    description: "If spotify was made by scuffed engineers",
    technologies: ["dart", "javascript"],
  },

  {
    name: "This website!",
    link: "https://redgerd.github.io/Portfolio/",
    description: "My online resume created with React and Sass.",
    technologies: ["react", "sass"],
  },
  {
    name: "Spotify Stream Prediction",
    link: "https://github.com/Redgerd/Spotify-Stream-Prediction-using-Regression-Models",
    description:
      "The project focuses on predicting the popularity of songs on Spotify by leveraging various attributes through regression algorithms.",
    technologies: ["regression", "python"],
  },
  {
    name: "Tic Tac Toe",
    link: "https://github.com/Redgerd/tictactoe-AI",
    description:
      "An Unbeatable Tic Tac Toe bot in Python via Minimax Algorithm",
    technologies: ["python"],
  },
  {
    name: "Cifar-10 Images Classification",
    link: "https://github.com/Redgerd/Deep-Learning/blob/main/CIFAR-10/CIFAR-10%20-%20Object%20Recognition.ipynb",
    description:
      "Given an image, can we predict the correct class of this image?.",
    technologies: ["Python", "Jupyter Notebook"],
  },
  {
    name: "ADW-2017",
    link: "https://github.com/Redgerd/ADW-2017",
    description: "ETL data warehousing script in Teradata Sql",
    technologies: ["SQL"],
  },
];

const ProjectsPage = () => {
  return (
    <section className="projects-page">
      <h1>Software Projects</h1>

      <p>Below are select projects that I’m proud of:</p>
      <ul className="projects">
        {projects.map((project, index) => (
          <li key={index} className="project-wrapper">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer noopener"
              className="project-card"
            >
              <header className="repel">
                <h3 className="project-name">{project.name}</h3>
              </header>
              <p className="project-description">{project.description}</p>
              <ul
                className="project-technologies"
                aria-label="Technologies used"
              >
                {project.technologies.map((tech, i) => (
                  <li key={i} className="project-technology">
                    {tech}
                  </li>
                ))}
              </ul>
            </a>
          </li>
        ))}
      </ul>

      <div className="github-link">
        <p>
          You can also{" "}
          <a
            href="https://github.com/Redgerd"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            view my repositories on GitHub.
          </a>
        </p>
      </div>
    </section>
  );
};

export default ProjectsPage;
