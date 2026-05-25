import React from 'react'
import type { StrapiComponentTechnology } from '@/types/component'
import { 
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from './ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

export type CarouselElement = StrapiComponentTechnology

export interface CarouselBuilderProps {
  content: CarouselElement[];
}

export function CarouselBuilder(props: CarouselBuilderProps) {
  return (
    <Carousel 
        opts={{
            align: "start",
            loop: true,
        }}
        plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
    >
        <CarouselContent>
            { props.content.map((tech, index) => (
                <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
                    <div className="flex items-center justify-center h-40 bg-muted rounded-lg"> 
                        <span className="text-2xl font-bold">{tech}</span>
                    </div>
                </CarouselItem>
            )) }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
  )
}
