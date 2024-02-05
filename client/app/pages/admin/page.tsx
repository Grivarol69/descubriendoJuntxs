import ProfilePage from "@/components/UserProfile/ProfilePage/ProfilePage";
import style from './adminProfile.module.css'


const AdminProfile = () => {

    const useInfo = {
        nombre: 'Isabella',
        apellido: 'Torrente',
        identificacion: '1193762943',
        fechaNacimiento: '10/10/2001',
        idiomas: 'Español, Frances, Inglés',
        telefono: '3196378502',
        email: 'isalamaslinda@gmail.com',
        linkedin: 'https://www.linkedin.com/in/isabellatorrente/',
        contraseña: 'isalinda'
    }

    return (
        <div className={style.gridColumns} style={{ color: '#24275A' }}>
            <ProfilePage
                useInfo={useInfo}
            />
        </div>
    );
}

export default AdminProfile;