
import "./index.css"
import Navbar from "../Navbar"
import ProjectContext from "../../ProjectContext/projectContext"

const Projects = () => (
    <ProjectContext.Consumer>
        {value => {
            const { projectsData } = value 


            return(
                <>
                    <Navbar />
                    <div className="projects-page">
                        <h1 className="projects-title">Projects</h1>
                        <hr className="projects-hr-line"  />
                        <ul className="projects-container">
                            {projectsData.map((eachProject, index) => {
                                let order 
                                if (index % 2 === 0) {
                                    order = 0
                                } else {
                                    order = 1
                                }

                                return(
                                <li key={eachProject.id} className="project-container">
                                    <div className="project-details" style={{order: order}}>
                                        <h1 className="project-name">{eachProject.projectName}</h1>
                                        <p className="project-description">{eachProject.description}</p>
                                        <button type="button" className="view-project-btn" ><a href={eachProject.projectLink} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}} >View Project</a></button>
                                    </div>
                                    <img src={eachProject.imgUrl}  alt="projectImg" className="project-img" />
                                </li>
                            )})}
                        </ul>
                    </div>
                </>
            )
        }}
        
    </ProjectContext.Consumer>
   
)

export default Projects