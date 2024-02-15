import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useAuthContext } from "@/app/contexto/AuthContext";
import ModalProject from "../modal/Modal";
import style from '../Favorite/favorite.module.css'
import { Socket } from "socket.io-client";
import { useSocketContext } from "@/app/contexto/SocketContext";

interface Program {
    id: number;
    name: string;
    description: string;
    dateIn: string;
    dateOut: string | null;
    objective: string;
    syllabus: string;
    urlYoutube: string;
    state: string;
    categoryId: number;
    image: string;
}

interface Favorite {
    programId: number;
    userId: number;
    program: Program;
}

interface Project {
    favorite: Favorite[];
}

const UserFavorite: React.FC = () => {

    const [favoriteProjects, setFavoriteProjects] = useState<Favorite[]>([]);
    const [modal, setModal] = useState(false);
    const { socket } = useSocketContext()
    const { infoUserGlobal }: any = useAuthContext();
    const parseinfo = JSON.parse(infoUserGlobal);

    useEffect(() => {
        const fetchFavoriteProjects = async () => {
            try {
                const userId = parseinfo.id;
                const response = await axios.get<Project>(`https://juntxs.vercel.app/users/favorites/${userId}`);
                console.log(response.data);
                setFavoriteProjects(response.data.favorite);
            } catch (error) {
                console.error("Error al obtener los proyectos favoritos del usuario:", error);
            }
        };
        fetchFavoriteProjects();
    }, [parseinfo.id]);

    const handlerDeleteFavorite = async (programId: number) => {
        try {
            const userId = parseinfo.id
            await axios.delete(`https://juntxs.vercel.app/favorites/${programId}/${userId}`)
            setFavoriteProjects(favoriteProjects.filter((item: any) => item.programId !== programId));
            console.log('aqui', userId);
        } catch (error) {
            console.log('Error eliminando el proyecto a favorito', error);
        }
    }

    return (
        <div>
            {favoriteProjects.map(favorite => (
                <div>
                    <div className={style.cardContainer} key={favorite.programId}>
                        <div className={style.infoContainer}>
                            <h2 className={style.meta}>{favorite.program.objective}</h2>
                            <div className={style.titleAndDescription}>
                                <h1 className={style.title}>{favorite.program.name}</h1>
                                <div className={style.containerDesc}>
                                    <p className={style.description}>{favorite.program.description}</p>
                                </div>
                            </div>
                            <div className={style.buttonContainer}>
                                <button onClick={() => setModal(true)}
                                    className={style.buttonText}>Ver Proyecto</button>
                            </div>
                            <button onClick={() => handlerDeleteFavorite(favorite.programId)}>X</button>
                        </div>
                        <div className={style.imageContainer}>
                            <img className={style.image} src={favorite.program.image} alt="no se pudo" />
                        </div>
                    </div>
                    {modal && (
                        <div className={style.ModalView}>
                            <ModalProject
                                openModal={modal}
                                closeModal={() => setModal(false)}
                                project={favorite.program}
                                socket={socket}
                            />
                        </div>
                    )}
                </div>

            ))}
        </div>
    );
};

export default UserFavorite;