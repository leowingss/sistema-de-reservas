'use client';

import { TripReservation } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const MyTrips = () => {

    const { status, data } = useSession();
    const [reservations, setReservations] = useState<TripReservation[]>();

    const router = useRouter();

    useEffect(() => {

        if (status === 'unauthenticated' || !data?.user) {
            router.push('/');
        }

        const fetchReservations = async () => {
            const response = await fetch(`http://localhost:3000/api/user/${(data?.user as any).id}/reservations`)
            const json = await response.json();
            setReservations(json);

        }

        fetchReservations();

    }, [status])

    console.log(reservations);

    return (
        <div>MyTrips</div>
    )
}

export default MyTrips;