'use client'
import { useState } from 'react'
import style from './createUser.module.css'
import CreateUser from '@/components/AdminDashboard/CreateUser/CreateUser'



const Users = () => {

    const [modal, setModal] = useState(false)

    return (
        <>
            <CreateUser
                modal={modal}
                closeModal={() => setModal(false)}
            />
            <div className={style.container}>
                <h1>List Of Users</h1>
                <div>
                    <button className={style.buttonFull} onClick={() => setModal(true)}>Create User +</button>
                </div>
            </div>
        </>
    )
}

export default Users;