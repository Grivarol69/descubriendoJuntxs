import admin from "firebase-admin";
import serviceAccount from './serviceAccount.json';

const inicializar = admin;

inicializar.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export default inicializar;
