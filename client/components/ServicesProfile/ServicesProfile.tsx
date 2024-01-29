import style from './Services.module.css'

const ServicesProfile = () => {
    return (
        <>
            <div className={style.gridPage}>
                <div className={style.servicesContainer}>
                    <div className={style.titlePage}>
                        Participación de Servicios
                    </div>
                    <input className={style.buscarInput} placeholder='Buscar Servicio' />
                    <div className={style.cardContainerServices}>
                        <div className={style.titleServices}>
                            <div className={style.titleService}>Nombre del Servicio</div>
                            <div className={style.titleService}>Tipo de Servicio</div>
                        </div>
                        <div className={style.overFlowContainer}>
                            <div className={style.cardServices}>
                                <div className={style.imageAndTitle}>
                                    <div className={style.image}></div>
                                    <div className={style.titleServiceAndButton}>
                                        <div className={style.title}> Salud Mental </div>
                                        <div className={style.buttonAgenda}> Ver Agenda </div>
                                    </div>
                                </div>
                                <div className={style.serviceType}> Coaching </div>
                            </div>
                            <div className={style.cardServices}>
                                <div className={style.imageAndTitle}>
                                    <div className={style.image}></div>
                                    <div className={style.titleServiceAndButton}>
                                        <div className={style.title}> Salud Mental </div>
                                        <div className={style.buttonAgenda}> Ver Agenda </div>
                                    </div>
                                </div>
                                <div className={style.serviceType}> Coaching </div>
                            </div>
                            <div className={style.cardServices}>
                                <div className={style.imageAndTitle}>
                                    <div className={style.image}></div>
                                    <div className={style.titleServiceAndButton}>
                                        <div className={style.title}> Salud Mental </div>
                                        <div className={style.buttonAgenda}> Ver Agenda </div>
                                    </div>
                                </div>
                                <div className={style.serviceType}> Coaching </div>
                            </div>
                            <div className={style.cardServices}>
                                <div className={style.imageAndTitle}>
                                    <div className={style.image}></div>
                                    <div className={style.titleServiceAndButton}>
                                        <div className={style.title}> Salud Mental </div>
                                        <div className={style.buttonAgenda}> Ver Agenda </div>
                                    </div>
                                </div>
                                <div className={style.serviceType}> Coaching </div>
                            </div>
                            <div className={style.cardServices}>
                                <div className={style.imageAndTitle}>
                                    <div className={style.image}></div>
                                    <div className={style.titleServiceAndButton}>
                                        <div className={style.title}> Salud Mental </div>
                                        <div className={style.buttonAgenda}> Ver Agenda </div>
                                    </div>
                                </div>
                                <div className={style.serviceType}> Coaching </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesProfile