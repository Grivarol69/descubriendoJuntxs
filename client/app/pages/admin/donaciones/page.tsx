'use client'
import React from 'react';
import DonacionesServer from '../../../serverC/serverDonaciones/page';
import DashDonaciones from '../../../../components/DashboardAdmin/DashDonaciones/DashDonaciones';

interface UserData {
  dateIn: string;
  dateOut: string | null;
  description: string | null;
  email: string;
  id: number;
  identification: string | null;
  language: string | null;  
  linkedin: string | null;
  name: string;
  phone: string | null;
  position: string | null;
  role: string;
  state: string;
  surName: string | null;
}

interface Donation {
  id: number;
  amount: number;
  type: string;
  userId: number;
  user: UserData;
}

const DonacionesPage: React.FC = () => {
  return (
    <div>
      <DonacionesServer>
        {(donations) => <DashDonaciones donations={donations as unknown as Donation[]} />}
      </DonacionesServer>
    </div>
  );
};

export default DonacionesPage;