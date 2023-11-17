import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import project3 from "../../assets/images/project3.png";
import '../Work/Work.css'

export default function Work() {



    return (
      <section class="work" id="work">
      <h1> Work</h1>
      <div class="projects">
          <div>
              <div>
              <h2> Book-Shelf</h2>
                  <a href="https://immense-peak-06116-736d0048e6c6.herokuapp.com/" target="_blank">
                      <img src={project1} alt="Book-Shelf"  style ={{width:'400px' , height: '300px'}}  class="bookShelfImg" />
                  </a>
                
              </div>
              <div class="flex">
                  <div>
                  <h2>Makeup-App</h2>
                      <a href="https://rhettroseman.github.io/lamboflaughter/" target="_blank">
                          <img src={project2} alt="Makeup-App"  style ={{width:'400px' , height: '300px', display: 'flex', justifyContent: 'center'}} class="makeupAppImg" />
                      </a>
                  
                  </div>
                  <div>
                  <h2>JavaScript Quiz</h2>
                      <a href="https://sunainaojha.github.io/JS-JavaScript-Quiz/" target="_blank">
                          <img src={project3} alt="JavaScript Quiz" style ={{width:'400px' , height: '300px'}} class="horiesonImg" />
                      </a>
                      
                  </div>
              </div>
          </div>
      </div>
  </section>

        
    );
  }
  