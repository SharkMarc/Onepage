import React from 'react';
import {Card} from './card';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const cardsData = [
    {
        title: 'Junior Frontend Developer',
        place: "speisekarte.de",
        content: 'This is the first card.',
        date: "01/2019 - 12/2020"
    },
    {
        title: 'Frontend Developer',
        place: "freelancermap.de",
        content: 'This is the second card.',
        date: "01/2021 - bis heute"
    },
];

export const Carousel: React.FC = () => {
    return (
        <div className={"swiper-header-container"}>
            <Swiper spaceBetween={50}
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    navigation
                    pagination={{clickable: true,}}
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
            {/*<div className="carousel">*/}
            {/*    <button className="prev" onClick={prev}>&lt;</button>*/}
            {/*    <div className="cards">*/}
            {/*        {cardsData.map((card, index) => (*/}
            {/*            <div*/}
            {/*                key={index}*/}
            {/*                className={`card-wrapper ${index === current ? 'active' : ''}`}*/}
            {/*            >*/}
            {/*                <Card name={card.title} title={card.title} content={card.content}/>*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*    <button className="next" onClick={next}>&gt;</button>*/}
            {/*</div>*/}

        </div>
    );
};