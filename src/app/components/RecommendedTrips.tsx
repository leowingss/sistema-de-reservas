import TripItem from '@/components/TripItem';
import { prisma } from '@/lib/prisma';
import { Trip } from '@prisma/client';
import React from 'react';

async function getTrips() {
    const trips = await prisma.trip.findMany({});
    return trips;
}

const RecommendedTrips = async () => {

    const dataTrip = await getTrips();


    return (
        <div className='container mx-auto p-5'>
            <div className="flex items-center">
                <div className="w-full h-[1px] bg-grayLighter"></div>
                <h2 className=' px-5 text-grayPrimary font-medium whitespace-nowrap'>Destinos recomendados</h2>
                <div className="w-full h-[1px] bg-grayLighter"></div>
            </div>

            <div className="flex flex-col items-center mt-5 gap-5">
                {dataTrip.map((trip: Trip) => (
                    <TripItem key={trip.id} trip={trip} />
                ))}

            </div>
        </div>
    )
}

export default RecommendedTrips;