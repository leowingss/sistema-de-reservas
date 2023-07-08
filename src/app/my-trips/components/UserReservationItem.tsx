import { Prisma, TripReservation } from '@prisma/client';
import React from 'react';
import Image from 'next/image';
import ReactCountryFlag from 'react-country-flag';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Button from '@/components/Button';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

interface UserReservationProps {
    reservation: Prisma.TripReservationGetPayload<{
        include: { trip: true }
    }>
}

const UserReservationItem = ({ reservation }: UserReservationProps) => {

    const router = useRouter();

    const handleDeleteClick = async () => {
        const res = await fetch(`api/trips/reservation/${reservation.id}`, {
            method: 'DELETE'
        })

        if (!res.ok) {
            return toast.error('Erro ao cancelar a reserva');
        }

        toast.success('Reserva cancelada com sucesso!', { position: 'bottom-center' });
        router.refresh();
    }

    return (
        <div >
            <div className="flex flex-col p-5 mt-5 border-grayLighter border-solid border shadow-lg rounded-lg">
                <div className="flex items-center gap-3 pb-5 border-b border-grayLighter border-solid ">
                    <div className="relative h-[124px] w-[106px]">
                        <Image className='rounded-lg' style={{ objectFit: 'cover' }} fill src={reservation.trip.coverImg} alt={reservation.trip.name} />
                    </div>

                    <div className="flex flex-col">
                        <h2 className='text-xl text-primaryDarker font-semibold'>{reservation.trip.name}</h2>

                        <div className="flex items-center gap-1 my-1">
                            <ReactCountryFlag countryCode={reservation.trip.countryCode} svg />
                            <p className='text-xs text-grayPrimary underline'>{reservation.trip.location}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mt-5 text-primaryDarker">
                    <h3 className='text-sm'>Data</h3>
                    <div className="flex items-center gap-1 mt-1">
                        <p> {format(new Date(reservation.startDate), "dd 'de' MMMM", { locale: ptBR })} </p>
                        {' - '}
                        <p> {format(new Date(reservation.endDate), "dd 'de' MMMM", { locale: ptBR })} </p>

                    </div>

                    <h3 className='text-sm mt-5'>Hóspedes</h3>
                    <p className='pb-5'>{reservation.guests} hóspedes</p>


                    <h3 className='font-semibold text-lg text-primaryDarker mt-3 pt-5 border-t border-solid border-grayLighter'>Informações sobre o preço</h3>

                    <div className="flex justify-between mt-1">
                        <p className='font-medium text-primaryDarker text-sm mt-2'>Total:</p>
                        <p className='font-medium text-sm'>R$ {reservation.totalPaid.toString()}</p>

                    </div>
                    <Button variant='danger' onClick={handleDeleteClick}>
                        Cancelar
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default UserReservationItem;