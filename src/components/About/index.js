import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

import "./index.css"
import Navbar from "../Navbar"
import ProjectContext from "../../ProjectContext/projectContext"


const About = (props) => {

    const [ projectName, setProjectName ] = useState("")
    const [ projectLink, setProjectLink ] = useState("")
    const [ projectImageUrl, setProjectImageUrl ] = useState("") 
    const [ projectDescription, setProjectDescription ] = useState("")

    const navigate = useNavigate()

    const onClickProjectsBtn = () => {
        navigate('/projects', { replace: false });
    }

    const onChangeProjectName = event => {
        setProjectName(event.target.value)
    }

    const onChangeProjectLink = event => {
        setProjectLink(event.target.value)
    }

    const onChangeProjectDescription = event => {
        setProjectDescription(event.target.value)
    }

    const onChangeProjectImageUrl = event => {
        setProjectImageUrl(event.target.value)
    }

    

    return(
        <ProjectContext.Consumer>
            {value => {
                const { onAddingProjects } = value 

                const onAddProject = event => {
                    event.preventDefault()
            
                    const newProject = {
                        id: uuidv4(),
                        projectName,
                        projectLink,
                        imgUrl: projectImageUrl,
                        description: projectDescription
                    }
            
                    console.log("newProject - - -", newProject)

                    onAddingProjects(newProject)

                    setProjectName("")
                    setProjectLink("")
                    setProjectImageUrl("")
                    setProjectDescription("")

                }

                return(
                    <div className="about-page">
                        <Navbar />
                        <div className="about-page-content">
                            <div className="about-text">
                                <h1 className="about-page-sub-title">UI/UX Designer</h1>
                                <h1 className="about-page-title">Hello,  my name is Prashanth Vadde</h1>
                                <p className="about-page-description">Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
                                <div className="about-page-buttons-container">
                                    
                                    <button type="button" className="projects-btn" onClick={onClickProjectsBtn}>Projects</button>
                                    <button type="button" className="linkedin-btn"><a style={{textDecoration: "none"}} target="_blank" href="https://www.linkedin.com/in/prashanthvadde" rel="noopener noreferrer">LinkedIn</a></button>
                                </div>

                            </div>

                            <img className="prashanth-img" src="https://res.cloudinary.com/dxjnnbjcx/image/upload/v1704387322/v4ay4b9yvwm3wgpf3ggp.jpg" alt="Prashanth-img" />
                        </div>

                        <div className="add-project">
                            <h1 className="add-project-title">Add Project</h1>
                            <form className="form-container" onSubmit={onAddProject}>
                                <hr className="hr-line" />
                                <label htmlFor="projectName" className="label-element">Project Name</label>
                                <input id="projectName" className="input-element" value={projectName} onChange={onChangeProjectName}/>
                                <label htmlFor="projectLink" className="label-element">Project Link</label>
                                <input id="projectLink" className="input-element" value={projectLink} onChange={onChangeProjectLink}/>
                                <label htmlFor="projectImg" className="label-element">Project Image Url</label>
                                <input className="input-element" id="projectImg" value={projectImageUrl} onChange={onChangeProjectImageUrl} />
                                <label className="label-element" htmlFor="projectDescription">Description</label>
                                <textarea id="projectDescription" rows="10" cols="20" className="text-area"  value={projectDescription} onChange={onChangeProjectDescription}></textarea>
                                <button type="submit" className="project-add-btn">Add</button>
                            </form>
                        </div>
                    </div>
                )
            }}
        </ProjectContext.Consumer>
        
    )
}

export default About