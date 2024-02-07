"use client"
import React, { useEffect, useState } from 'react';
import DashDonaciones from '../../../../components/DashboardAdmin/DashDonaciones/DashDonaciones';

interface Donation {
  id: number;
  amount: number;
  type: string;
}

const DonacionesPage: React.FC = () => {
  const [donations, setDonations] = useState<Donation[]>([]);

  const Donaciones: Donation[] = [
    { id: 1, amount: 50, type: 'Efectivo' },
    { id: 2, amount: 100, type: 'Transferencia Bancaria' },
  ];

  useEffect(() => {
    setDonations(Donaciones);
  }, []);

  return (
    <div>
      <DashDonaciones donations={donations} />
    </div>
  );
};

export default DonacionesPage;