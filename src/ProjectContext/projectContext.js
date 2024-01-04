import  React  from "react"

const ProjectContext = React.createContext({
    projectsData: [],
    onAddingProjects: () => {}
})

export default ProjectContext