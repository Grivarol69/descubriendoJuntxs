'use client'
import { useState } from 'react'
import style from './createUser.module.css'
import CreateUser from '@/components/AdminDashboard/CreateUser/CreateUser'
import axios from 'axios'
import ListUsers from '@/components/ListaUsuariosAdmin/ListaUsuarios'


const Users = async () => {

    const [modal, setModal] = useState(false)

    const URL_BASE = "https://juntxs.vercel.app/"
    const users = (await axios.get(`${URL_BASE}users`)).data


    return (
        <>
            <ListUsers
                users={users}
            />
        </>
    )
}

export default Users;