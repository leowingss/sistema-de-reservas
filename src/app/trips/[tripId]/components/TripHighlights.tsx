import React from 'react';
import Image from 'next/image';

interface TripHighLightsProps {
    highlights: string[];
}

const TripHighlights = ({ highlights }: TripHighLightsProps) => {
    return (
        <div className='flex flex-col p-5'>
            <h2 className='font-semibold text-primaryDarker mb-2'>Destaques</h2>

            <div className="flex flex-wrap gap-y-3">
                {highlights.map((highlight) => (
                    <div key={highlight} className="flex item-center gap-2 w-1/2">
                        <Image alt={highlight} src='/check-icon.png' width={15} height={15} />
                        <p className='text-grayPrimary text-xs'>{highlight}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default TripHighlights