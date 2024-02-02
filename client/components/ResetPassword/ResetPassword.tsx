import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";


const ResetPassword = () => {

    const [email, setEmail] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const auth = getAuth();

    const handleSubmit = async () => {
        event.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            alert('Password reset email sent!');
        } catch (error) {
            alert('Error sending email');
        }
    }

    return (
        <div>
            <input type="text" name='email' placeholder='Type Email' value={email} onChange={handleChange} />
            <button onClick={handleSubmit}>Send Email</button>
        </div>
    )
}

export default ResetPassword