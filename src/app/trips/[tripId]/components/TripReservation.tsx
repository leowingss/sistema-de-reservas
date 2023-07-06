'use client';

import React from 'react';
import DatePicker from '@/components/DatePicker';
import Input from '@/components/Input';
import { Trip } from '@prisma/client';
import Button from '@/components/Button';
import { useForm, Controller } from 'react-hook-form';

interface TripReservationProps {
    trip: Trip
}

interface TripReservationForm {
    guests: number;
    startDate?: Date | null;
    endDate?: Date | null;
}

const TripReservation = ({ trip }: TripReservationProps) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm<TripReservationForm>();

    const onSubmit = (data: any) => {
        console.log({ data });
    }

    return (
        <div className='flex flex-col p-5 pb-1'>
            <div className="flex gap-4">

                <Controller
                    name='startDate'
                    rules={{
                        required: {
                            value: true,
                            message: 'Data inicial é obrigatória'
                        }
                    }}
                    control={control}
                    render={
                        ({ field }) => (
                            <DatePicker
                                error={!!errors?.startDate}
                                selected={field.value}
                                errorMessage={errors?.startDate?.message}
                                onChange={field.onChange}
                                className='w-full'
                                placeholderText='Data de Início'

                            />
                        )}
                />

                <Controller
                    name='endDate'
                    rules={{
                        required: {
                            value: true,
                            message: 'Data final é obrigatória'
                        }
                    }}
                    control={control}
                    render={
                        ({ field }) => (
                            <DatePicker
                                error={!!errors?.endDate}
                                selected={field.value}
                                errorMessage={errors?.endDate?.message}
                                onChange={field.onChange}
                                className='w-full'
                                placeholderText='Data Final'

                            />
                        )}
                />


            </div>

            <Input {...register('guests', {
                required: {
                    value: true,
                    message: "Número de hóspedes é obrigatório."
                },
            })}
                error={!!errors?.guests}
                errorMessage={errors?.guests?.message}
                className='mt-4'
                placeholder={`Número de hóspedes (max: ${trip.maxGuests})`}
            />

            <div className="flex justify-between mt-3">
                <p className='font-medium text-sm text-primaryDarker'>Total: </p>
                <p className='font-medium text-sm text-primaryDarker'>R$ 2.500 </p>
            </div>


            <div className='p-10 border-b border-grayLighter w-full'>
                <Button onClick={() => handleSubmit(onSubmit)()} className='mt-3 w-full'>
                    Reservar agora
                </Button>
            </div>
        </div>
    )
}

export default TripReservation;