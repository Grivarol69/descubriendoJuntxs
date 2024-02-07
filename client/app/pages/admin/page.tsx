import ProfilePage from "@/components/UserProfile/ProfilePage/ProfilePage";
import style from './adminProfile.module.css'
import axios from 'axios'
import AdminDashboard from "@/components/AdminDashboard/AdminSideBar/SideBar";
import AdminProfile from "@/components/AdminDashboard/AdminProfile/AdminProfile";



const Admin = async () => {

    const URL_BASE = "https://juntxs.vercel.app/"
    const users = (await axios.get(`${URL_BASE}users`)).data


    return (
        <div className={style.gridColumns} style={{ color: '#24275A' }}>
            <AdminProfile
                users={users}
            />
        </div>
    );
}

export default Admin;