import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { motion as m } from 'framer-motion';
import ImageLoader from './ImageLoader';

interface ImageI {
    src: string;
    width: number;
    height: number;
}

const getImageRenderHeight = (
    containerRef: null | HTMLDivElement,
    aspectRatio: number
): number => {
    if (!containerRef) return 0;
    return containerRef.clientWidth / aspectRatio;
};

export default function Image({ src, width, height }: ImageI) {
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);
    const [imageHeight, setImageHeight] = useState<number>(0);
    const aspectRatioClass = `aspect-[${width}/${height}]`;
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const imageRenderHeight = () => {
            const aspectRatio = width / height;
            setImageHeight(
                getImageRenderHeight(containerRef.current, aspectRatio)
            );
        };

        window.addEventListener('resize', imageRenderHeight);

        return () => window.removeEventListener('resize', imageRenderHeight);
    }, [height, width, src]);

    return (
        <div
            ref={containerRef}
            className={`relative w-full h-auto ${aspectRatioClass} rounded-md border border-gray-primary/25 dark:border-gray-primary/50`}
            style={{ height: imageHeight }}
        >
            <m.img
                src={src}
                className={'w-full h-full object-cover rounded-md'}
                onLoad={() => setImageLoaded(true)}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={imageLoaded && { scale: 1, opacity: 1 }}
                transition={{ type: 'tween', stiffness: 250 }}
            />
            {!imageLoaded && <ImageLoader />}
        </div>
    );
}
