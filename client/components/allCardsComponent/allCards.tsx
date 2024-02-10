import CardProyect from "../CardProyecto/cardProyecto"


export interface ProyectTypes {
    projects: {
        name: string,
        description: string,
        dateIn: string,
        dateOut: string,
        urlYoutube: string,
        objective: string,
        syllabus: string,
        state: string,
        categoryId: number,
        type: string,
        image: string,
        commentary: [],
    }[]
}


const AllCards: React.FC<ProyectTypes> = ({ projects }) => {
    console.log(projects);

    return (
        <>
            {
                projects?.map((project) => {
                    return (
                        <>
                            <CardProyect
                                project={project}
                            />
                        </>
                    )
                })
            }

        </>
    )
}

export default AllCards