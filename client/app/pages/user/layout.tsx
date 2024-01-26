import UserProfile from "@/app/components/user profile/profile";
import style from './layout.module.css'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={style.container}>
            <UserProfile />
            <main>{children}</main>
        </div>
    );
}