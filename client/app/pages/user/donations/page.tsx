
import DonationsUserComponent from '@/components/UserProfile/Donations/donationsUserComponent'

interface program {
    description: string;
    name: string;
    image: string;
}


interface ProyectReady {
    project: {
        // nombre: string,
        // tipoDonacion: string,
        // monto?: string,
        // frecuencia?: string,
        // fechaInicial?: string,
        // proximaDonacion?: string,
        // descripcionDonacion?: string

        name: string;
        description: string;
        image: string;
        amount: number;
        date: string;
        donation: {
            amount: number;
            date: string;
            program: program;
        }[]
    };
    closeModal: () => void;
    openModal: boolean
}


const UserDonationsPage = () => {


    // const { infoUserGlobal } = useAuthContext()
    // const infoUserParsed = JSON.parse(infoUserGlobal ?? '')
    // const userId = infoUserParsed.id



    // const URL_BASE = 'https://juntxs.vercel.app/users/donations/'
    // const info = await axios.get(`${URL_BASE}${userId}`)
    // console.log('Donations by user:', info.data);

    // useEffect(() => {
    //     const fetchDonations = async () => {
    //         const URL_BASE = 'https://juntxs.vercel.app/users/donations/';
    //         const info = await axios.get(`${URL_BASE}${userId}`);
    //         setDonations(info.data);
    //     };

    //     fetchDonations();
    // }, [userId]);

    return (
        <>
            <DonationsUserComponent
            />

        </>
    )
}

export default UserDonationsPage