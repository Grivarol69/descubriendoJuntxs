import React, { useState } from 'react';
import './donaciones.css';

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
  user?: UserData;
}

interface DashDonacionesProps {
  donations: Donation[];
}

interface DashDonacionesProps {
  donations: Donation[];
}

const DashDonaciones: React.FC<DashDonacionesProps> = ({ donations }) => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const handleUserClick = (userId: number) => {
    setSelectedUserId(userId);
  };

  const handleCloseDetail = () => {
    setSelectedUserId(null);
  };

  const selectedDonation = donations.find((donation) => donation.userId === selectedUserId);

  return (
    <div className="dashboard-container rounded-lg overflow-hidden">
      <div className="users-container flex flex-col">
        {donations.map((donation) => (
          <div
            key={donation.id}
            onClick={() => handleUserClick(donation.userId)}
            className="mb-2 p-2 bg-gray-200 rounded cursor-pointer"
          >
            {donation.user?.name || "Usuario sin nombre"}
          </div>
        ))}
      </div>

      {selectedUserId && selectedDonation && (
        <div className="cardContainer grid grid-cols-2 bg-white w-2/5 h-2/5 max-h-2/5 shadow-lg rounded transition-transform hover:scale-105">
          <div className="infoContainer flex flex-col justify-center items-center p-8">
            <h3 className="mb-2">Detalles de la Donación Seleccionada:</h3>
            <p>Nombre: {selectedDonation.user?.name || "Usuario sin nombre"}</p>
            <p>Monto: {selectedDonation.amount}</p>
            <p>Tipo: {selectedDonation.type}</p>
            <p>Fecha de la Donación: {selectedDonation.user?.dateIn}</p>
            <div className="infoP-Card flex flex-col mt-4">
              <button
                className="buttonFull bg-blue-500 text-white min-w-min w-auto h-12 rounded transition border border-blue-500 hover:bg-white hover:text-blue-500"
                onClick={handleCloseDetail}
              >
                Cerrar Detalle
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashDonaciones;