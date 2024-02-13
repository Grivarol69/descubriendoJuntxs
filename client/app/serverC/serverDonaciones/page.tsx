'use client'
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useAuthContext } from '@/app/contexto/AuthContext';

interface UserData {
  dateIn: string;
  dateOut: string | null;
  description: string | null;
  email: string;
  id: number;
  identification: string | null;
  languaje: string | null;
  linkedin: string | null;
  name: string;
  phone: string | null;
  position: string | null;
  role: string;
  state: string;
  surName: string | null;
}

interface DonationResponse {
  id: number;
  amount: number;
  type: string;
  userId: number;
  user: UserData | UserData[];
}

interface DonacionesServerProps {
  children: (data: DonationResponse[]) => React.ReactNode;
}

interface Donation {
  id: number;
  amount: number;
  type: string;
  userId: number;
  user: UserData;
}

const DonacionesServer: React.FC<DonacionesServerProps> = ({ children }) => {

  const { infoUserGlobal } = useAuthContext()
  const infoUserParsed = JSON.parse(infoUserGlobal ?? '')
  const userId = infoUserParsed.id

  const URL_BASE = 'https://juntxs.vercel.app/users/donations/'
  const [donations, setDonations] = useState<Donation[]>([]);

  useEffect(() => {
    Axios.get(`${URL_BASE}${userId}`)
      .then((response) => {
        const donationData: DonationResponse[] = response.data;

        const donationsWithUserData: Donation[] = donationData.map((donationResponse) => {
          const user = Array.isArray(donationResponse.user) ? donationResponse.user[0] : donationResponse.user;
          return {
            id: donationResponse.id,
            amount: donationResponse.amount,
            type: donationResponse.type,
            userId: donationResponse.userId,
            user: user as UserData,
          };
        });

        setDonations(donationsWithUserData);
        console.log('Donations data:', donationsWithUserData);
        console.log('Data received successfully:', donationData);
      })
      .catch((error) => console.error('Error fetching donations:', error));
  }, []);

  return <>{children(donations)}</>;
};


export default DonacionesServer;