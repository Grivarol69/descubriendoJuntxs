import React, { useState } from 'react'
import { getAuth, updatePassword } from "firebase/auth";

const PasswordChange = () => {
    const [newPassword, setNewPassword] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.target.value);
    }

    const auth = getAuth();
    const user = auth.currentUser;

    const handleSubmit = async () => {
        event.preventDefault();
        if (user) {
            try {
                await updatePassword(user, newPassword);
                alert('Password Updated');
            } catch (error) {
                alert('Error updating password')
            }
        }

    }

    return (
        <div>
            <input type="text" name='password' placeholder='Type New Password' value={newPassword} onChange={handleChange} />
            <button onClick={handleSubmit}>Change Password</button>
        </div>
    )
}

export default PasswordChange