'use client'
import { useState } from 'react'
import style from './createUser.module.css'
import CreateUser from '@/components/AdminDashboard/CreateUser/CreateUser'


interface useInfoType {
    users: {
        id: number,
        name: string,
        surname: string,
        identification: string,
        phone: string,
        dateIn: string,
        dateOut: string,
        description: string,
        languaje: string,
        email: string,
        linkedin: string,
        position: string,
        state: string,
        role: string,
    }[]
}

const ListUsers: React.FC<useInfoType> = ({ users }) => {

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
                    {users.map((user) => {
                        return (
                            <>
                                <div>
                                    {user.name}
                                </div>
                            </>
                        )
                    })}
                </div>
                <div>
                    <button className={style.buttonFull} onClick={() => setModal(true)}>Create User +</button>
                </div>
            </div>
        </>
    )
}

export default ListUsers;