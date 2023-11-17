import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import project3 from "../../assets/images/project3.png";
import '../Work/Work.css'



export default function Work() {
  return (
    <section className="work" id="work">
      <h1>Work</h1>
      <div className="projects">
        <div className="project-card">
          <h2>Book-Shelf</h2>
          <a href="https://immense-peak-06116-736d0048e6c6.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={project1} alt="Book-Shelf" className="project-image" />
          </a>
        </div>
        <div className="project-card">
          <h2>Makeup-App</h2>
          <a href="https://rhettroseman.github.io/lamboflaughter/" target="_blank" rel="noopener noreferrer">
            <img src={project2} alt="Makeup-App" className="project-image" />
          </a>
        </div>
        <div className="project-card">
          <h2>JavaScript Quiz</h2>
          <a href="https://sunainaojha.github.io/JS-JavaScript-Quiz/" target="_blank" rel="noopener noreferrer">
            <img src={project3} alt="JavaScript Quiz" className="project-image" />
          </a>
        </div>
      </div>
    </section>
  );
}
