'use client';

import React from 'react';
import DatePicker from '@/components/DatePicker';
import Input from '@/components/Input';
import { Trip } from '@prisma/client';
import Button from '@/components/Button';

interface TripReservationProps {
    trip: Trip
}

const TripReservation = ({ trip }: TripReservationProps) => {

    return (
        <div className='flex flex-col p-5 pb-1'>
            <div className="flex gap-4">
                <DatePicker className='w-full' placeholderText='Data de Início' onChange={() => { }} />
                <DatePicker className='w-full' placeholderText='Data Final' onChange={() => { }} />
            </div>

            <Input className='mt-4' placeholder={`Número de hóspedes (max: ${trip.maxGuests})`} />

            <div className="flex justify-between mt-3">
                <p className='font-medium text-sm text-primaryDarker'>Total: </p>
                <p className='font-medium text-sm text-primaryDarker'>R$ 2.500 </p>
            </div>


            <div className='p-10 border-b border-grayLighter w-full'>
                <Button className='mt-3 w-full'>
                    Reservar agora
                </Button>
            </div>
        </div>
    )
}

export default TripReservation;