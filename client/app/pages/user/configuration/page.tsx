import ToggleBar from "@/components/ToggleBar/ToggleBar"


const UserConfigurationPage = () => {
    return (
        <div>
            <h1>Notificaciones
                <ToggleBar />
            </h1>
            <h1>Mantener Sesión Iniciada
                <ToggleBar />
            </h1>
        </div>
    )
}

export default UserConfigurationPage