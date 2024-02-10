import axios from "axios";


// interface Project {
//     id: number;
//     name: string;
//     // Add more properties if needed
// }

// interface ProjectsOptionProps {
//     onProjectChange: (projectId: number) => void;
// }

const ProjectsOption = async () => {
    const urlGlobal = 'https://juntxs.vercel.app/'
    const proyectsFetch: any = (await axios.get(`${urlGlobal}programs/pagination`))
    return proyectsFetch.data
}


export default ProjectsOption;