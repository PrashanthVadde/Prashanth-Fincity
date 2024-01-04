import {BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"


import About from "./components/About"
import Projects from "./components/Projects"
import ContactUs from "./components/ContactUs"

import ProjectContext from "./ProjectContext/projectContext"

const initialProjectsData = [
  {
    id: 1,
    projectName: "Project Name",
    projectLink: "",
    description: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
    imgUrl: "https://res.cloudinary.com/dxjnnbjcx/image/upload/v1704392632/wgjetiyrtpbolp1iqwxd.jpg"
  },
  {
    id: 2,
    projectName: "Project Name",
    projectLink: "",
    description: "What was your role, your deliverables, if the project was personal, freelancing.",
    imgUrl: "https://res.cloudinary.com/dxjnnbjcx/image/upload/v1704392702/euwe74ceswb4gy1a7laa.jpg"
  },
  {
    id: 3,
    projectName: "Project Name",
    projectLink: "",
    description: "You can also add in this description the type of the project, if it was for web, mobile, electron.",
    imgUrl: 'https://res.cloudinary.com/dxjnnbjcx/image/upload/v1704392748/jgpvv57ttuhtimhndc28.jpg'
  }
]

const App = () => {

  const [projectsData, updateProjectsData ] = useState(initialProjectsData)

  const onAddingProjects = (newProject) => {
    updateProjectsData((prevProjectData) => [...prevProjectData, newProject])
  }

  console.log("projectsData", projectsData)

  return(
    <ProjectContext.Provider value={{projectsData, onAddingProjects: onAddingProjects }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </ProjectContext.Provider>
    
  )
}

export default App