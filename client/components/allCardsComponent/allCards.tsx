import CardProyect from "../CardProyecto/cardProyecto"


interface Project {
    name: string,
    description: string,
    amount: number,
    objective: string,
    syllabus: string,
    state: string,
    categoryId: number,
    type: string,
    image: string,
    donation: [],
    commentary: [],
    favorite: []
}

interface allCardsTypes {

    projects: Project[]
}
const AllCards: React.FC<allCardsTypes> = ({ projects }) => {
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