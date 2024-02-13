import ServiceDetail from "@/components/ServiceDetail/ServiceDetail";
import { useState } from "react";



interface ServiceUser {
    name: string;
    description: string;
    dateIn: string;
    hourIn: string;
    amount: number;
    type: string;
    payment: string;
}

interface services {
    serviceUser: ServiceUser;
    closeModal: () => void;
    openModal: boolean
}

const ServicesUser: React.FC<services> = ({ serviceUser }) => {
    const [modal, setModal] = useState(false)

    return (
        <>
            <div onClick={() => setModal(true)} className="text-[#7286FF] select-none text-[0.75rem] cursor-pointer">
                Ver detalle de servicio
            </div>
            <ServiceDetail
                serviceUser={serviceUser}
                closeModal={() => setModal(false)}
                openModal={modal}
            />
        </>
    )
}

export default ServicesUser;