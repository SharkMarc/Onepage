import React from 'react';
import {Card} from './card';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const cardsData = [
    {
        title: 'Junior Frontend Developer',
        place: "speisekarte.de",
        content: 'Redesign Speisekarte.de',
        date: "01/2019 - 12/2020"
    },
    {
        title: 'Frontend Developer',
        place: "freelancermap.de",
        content: 'multiple redesigns',
        date: "01/2021 - bis heute"
    },
];

// const projectsData = [
//     {
//         title: 'designenlassen.de',
//         place: "designenlassen.de",
//         content: 'This is the first card.',
//         date: "01/2019 - 12/2020"
//     },
//     {
//         title: 'Frontend Developer',
//         place: "freelanceomat.de",
//         content: 'This is the second card.',
//         date: "01/2021 - bis heute"
//     },
//     {
//         title: 'gastromanager',
//         place: "gastromanager.de",
//         content: 'This is the second card.',
//         date: "01/2021 - bis heute"
//     },
//     {
//         title: 'prozessevaluation',
//         place: "prozessevaluation.de",
//         content: 'This is the second card.',
//         date: "01/2021 - bis heute"
//     },
// ]

interface CarouselProps {
    isProject: boolean;
    data?: any;
}

export const Carousel = ({isProject, data}: CarouselProps) => {
    if (isProject) {
        return (
            <div className={"swiper-header-container"}>
                <Swiper spaceBetween={50}
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={1}
                        navigation
                        pagination={{clickable: true, type: "bullets"}}
                        speed={1200}
                        autoplay={{
                            delay: 3000,      // 3 Sekunden
                            disableOnInteraction: false
                        }}
                        loop={true}

                >
                    {data.map((data, index) => (
                        <SwiperSlide key={index}>

                            <div className={'swiper-item'}>
                                <h3 className={'text-center'}>{data.title}</h3>

                                <a className={'projects-container'} href={data.link} target="_blank"
                                   rel="noopener noreferrer">
                                    <img className={'img-responsive'} src={data.src} alt={data.title}/>
                                </a>

                                <p>{data.content}</p>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
    }
    return (
        <div className={"swiper-header-container"}>
            <Swiper spaceBetween={50}
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    navigation
                    pagination={{clickable: true, type: "bullets"}}
                    autoplay={{
                        delay: 3000,      // 3 Sekunden
                        disableOnInteraction: false
                    }}
                    loop={true}

            >
                {cardsData.map((card, index) => (
                    <SwiperSlide key={index}>

                        <div className={'swiper-item'}>
                            <Card name={card.title}
                                  title={card.title}
                                  content={card.content}
                                  place={card.place}
                                  date={card.date}/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};