'use client'
import { userInfo } from 'os'
import style from './myProfile.module.css'
import { icons } from '@/components/Icons/Icons'
import ProfilePage from '@/components/UserProfile/ProfilePage/ProfilePage'
import React, { FC, ReactNode } from 'react'

import { useAuthContext } from '../../contexto/AuthContext'
import { useRouter } from 'next/navigation'

const Profile: FC = (): ReactNode => {
    const { user }: any = useAuthContext()
    const router = useRouter()
    if (!user) router.push('/pages/signin')

    return (
        <>
            { user &&
                <div className={style.gridColumns} style={{ color: '#24275A' }}>
                    <ProfilePage
                    />
                </div>
            }
        </>
    )
}

export default Profile