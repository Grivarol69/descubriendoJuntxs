import React from 'react';
import Link from 'next/link';

interface Donation {
  id: number;
  amount: number;
  type: string;
}

interface DashDonacionesProps {
  donations: Donation[];
}

const DashDonaciones: React.FC<DashDonacionesProps> = ({ donations }) => {
  return (
    <div>
      <Link href="/admin/donaciones/csv">Descargar CSV</Link>

      <ul>
        {donations.map(donation => (
          <li key={donation.id}>
            {donation.amount} - {donation.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashDonaciones;