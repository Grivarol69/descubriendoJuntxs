'use client'
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import ServerComponent from '@/app/serverC/serverDonaciones/server.component'

export interface UserData {
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
  projects?: ProjectData[];
}

export interface DonationResponse {
  id: number;
  amount: number;
  type: string;
  userId: number;
  user: UserData | UserData[];
  date?: string | number;
  projectId?: number; 
  project?: ProjectData; 
  programId: number;
}

export interface FormattedDonation {
  id: number;
  amount: number;
  type: string;
  userId: number;
  user: UserData | UserData[]; 
}

export interface ProjectData {
  id: number;
  name: string;
  description: string;
  amount: number;
  objective: string;
  syllabus: string;
  state: string;
  categoryId: number;
  type: string;
  image: string;
  donation: any[];
  commentary: any[];
  favorite: any[];
}

export interface Donation {
  id: number;
  amount: number;
  type: string;
  userId: number;
  user: UserData | UserData[];
  projectId?: number; 
  project: ProjectData; 
}


const DonacionesPage: React.FC = () => {
  const [selectedDonation, setSelectedDonation] = useState<DonationResponse | null>(null);
  const [donations, setDonations] = useState<DonationResponse[]>([]);

  useEffect(() => {
    Axios.get('https://juntxs.vercel.app/donations')
      .then((response) => {
        const donationData: DonationResponse[] = response.data;
        setDonations(donationData);
      })
      .catch((error) => console.error('Error al obtener donaciones:', error));
  }, []);

  const handleDonationClick = async (donation: Donation) => {
    try {
      if (donation.projectId) {
        const response = await fetch(`https://juntxs.vercel.app/projects/${donation.projectId}`);
        const projectDetails = await response.json();
  
        setDonations(donations.map(d => d.id === donation.id ? { ...d, project: projectDetails } : d));
      } else {
        console.warn('donation.projectId no está presente en los datos de donación.');
      }
    } catch (error) {
      console.error('Error al obtener detalles del proyecto:', error);
    }
  };

  const handleCloseDetail = () => {
    console.log('Closing detail');
    setSelectedDonation(null);
  };

  const handleUserClick = async (userId: number) => {
    try {
      const userResponse = await Axios.get(`https://juntxs.vercel.app/users/${userId}`);
      const userData: UserData = userResponse.data;

      const selectedDonation = donations.find((donation) => donation.userId === userId);

      if (selectedDonation) {
        console.log('User clicked:', selectedDonation);
        setSelectedDonation({ ...selectedDonation, user: userData });
      }
    } catch (error) {
      console.error('Error al obtener información del usuario:', error);
    }
  };

  console.log('Selected donation:', selectedDonation);
  console.log('All donations:', donations);

  return (
    <div>
      <h1>Donaciones</h1>
      <ServerComponent donations={donations} onUserClick={handleUserClick} onCloseDetail={handleCloseDetail} />
    </div>
  );
}

export default DonacionesPage;