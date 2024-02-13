import { useAuthContext } from "@/app/contexto/AuthContext"
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import style from './agendar.module.css'
import Coaching from '@/components/Servicios/Coaching';
import SelectComponent from "@/components/SelectComponent/SelectComponent";


interface coach {
    id: number
    name: string
    surName: string
}

interface coaching {
    name: string
    value: number
}

interface AgendarTypes {
    modal: boolean
    closeModal: () => void
    coaches: coach[]
}

interface service {
    name: string,
    description: string,
    userId: number | null,
    categoryId: number | null,
    amount: number | null,
    date: string
}

const AgendarComponente: React.FC<AgendarTypes> = ({ modal, closeModal, coaches }) => {

    const { infoUserGlobal } = useAuthContext()
    const parseInfoGlobal = JSON.parse(infoUserGlobal ?? '')
    const [service, setService] = useState<service>({
        name: 'Coach Personalizado',
        description: '',
        userId: null,
        categoryId: null,
        amount: 200,
        date: ''
    })

   


    const createServiceCoaching = async () => {
        try {
            const createCoachService: any = await axios.post('https://juntxs.vercel.app/services', service)

            if (createCoachService) {
                const infoService = {
                    id: createCoachService.id,
                    title: service.name,
                    amout: service.amount
                }

                const userParticipant = {
                    serviceId: createCoachService.id,
                    userId: parseInfoGlobal.id
                }

                const participant = await axios.post('https://juntxs.vercel.app/payments/services', userParticipant)

                if (participant) {
                    const data = (await axios.post('https://juntxs.vercel.app/payments/services', infoService)).data
                    
                    window.open(data.init_point, '_blank');
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    const onChange = (e: any) => {
        setService({
            ...service,
            [e.target.name]: e.target.value
        })
    }

    const changeCoach = (value: number) => {
        setService({
            ...service,
            userId: value
        })
    }

    const options = () => {
        let coachOptions: coaching[] = []
        coaches?.map((coach) => {
            const coachOp = {
                name: coach.name + ' ' + coach.surName,
                value: coach.id,
            }
            return coachOptions.push(coachOp)
        })
        return coachOptions
    }

    const coachesOptions = options()

    if (!modal) return null

    return (
        <div className={style.backGround}>
            <div className={style.cardContainer} >
                <div className={style.infoOrder}>
                    <div className={style.labelAndImput}>
                        <label className={style.labelDesign} htmlFor=""> Elige la fecha </label>
                        <input
                            className={style.input}
                            name="date"
                            type="date"
                            value={service.date}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <SelectComponent
                            label={'Coach'}
                            options={coachesOptions}
                            onChange={changeCoach}
                            styles={style}
                        />
                    </div>
                    <div className={style.labelAndImput}>
                        <label className={style.labelDesign} htmlFor=""> ¿Que deseas del coaching? </label>
                        <textarea
                            className={style.textArea}
                            name="description"
                            value={service.description}
                            onChange={onChange}
                            placeholder="Descríbenos el motivo de tu solicitud de coaching"
                        />
                    </div>
                </div>
                <div className={style.buttons}>
                    <button className={style.buttonText} onClick={() =>{
                        setService({...service,
                        description:'',
                        categoryId: null,
                        date: '',
                        })
                        closeModal()
                    }
                    }> Cancelar </button>
                    <button className={style.buttonFull} onClick={() => createServiceCoaching()}> Ir a pagar </button>
                </div>
            </div>

        </div>
    )
}


export default AgendarComponente
