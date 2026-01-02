import React from 'react';
import {Card} from './card';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import pen from './assets/images/pen.png';
import hammer from './assets/images/hammer.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const cardsData = [
    {
        title: 'Junior Frontend Developer',
        place: "speisekarte.de",
        content: {
            experience: [
                'Redesign von Speisekarte.de',
                'Daily business',
                'Pickup card',
                'Speisekarten WYSIWYG',
                'Premium seiten'
            ],
            text: [
                'Twig',
                'Javascript',
                'css',
                'REST Api'
            ]
        },
        date: "01/2019 - 12/2020"
    },
    {
        title: 'Frontend Developer',
        place: "freelancermap.de",
        content: {
            experience: [
                "2 Redesigns",
                "Admin",
                "Freelancer/Provider Suche",
                "Daily business",
            ],
            text: [
                'Redux',
                'REST Api',
                'SCSS',
                'Typescript',
                'Jest',
                'PHP',
                'Pagespeed',
                'React Admin',
                'Figma'
            ]
        },
        date: "01/2021 - bis heute"
    },
];

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

                                <div className={'grid-1-1 gap-8'}>
                                    <div className={''}>
                                        <div className={'w-100 d-flex align-items-center'}>
                                            <img className="icon"
                                                 alt="Erfahrung / Aufgaben"
                                                 src={hammer}/>
                                            <h3>Anforderungen</h3>
                                        </div>
                                        <ul>
                                            {data.content.experience && data.content.experience.length && data.content.experience.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={''}>
                                        <div className={'w-100 d-flex align-items-center'}>
                                            <img className="icon" alt="Werkzeug"
                                                 src={pen}/>
                                            <h3>Werkzeug</h3>
                                        </div>
                                        <ul>
                                            {data.content && data.content.text && data.content.text.length && data.content.text.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
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