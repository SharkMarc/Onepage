import React from 'react';
import {Card} from './card';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import pen from './assets/images/pen.png';
import hammer from './assets/images/hammer.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


interface CarouselProps {
    isProject: boolean;
    data?: any;
    t: any;
}

export const Carousel = ({isProject, data, t}: CarouselProps) => {
    if (!t) return null;
    const cardsData = t?.cards ?? [];

    if (isProject) {
        return (
            <div className={"swiper-header-container"}>
                <Swiper
                    spaceBetween={50}
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    navigation
                    pagination={{clickable: true, type: 'bullets'}}
                    speed={1200}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop
                >
                    {data.map((project: any, index: number) => {
                            const projectT = t.projects[project.key] ?? project;
                            return (
                                <SwiperSlide key={index}>
                                    <div className="swiper-item">
                                        <h3 className="text-center">{projectT.title}</h3>

                                        <a
                                            className="projects-container"
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img className="img-responsive" src={project.src} alt={projectT.title}/>
                                        </a>

                                        <div className="grid-1-1 gap-8">
                                            <div>
                                                <div className="w-100 d-flex align-items-center">
                                                    <img className="icon" alt="Erfahrung / Aufgaben" src={hammer}/>
                                                    <h3>{t.projects.label_experience}</h3>
                                                </div>
                                                <ul>
                                                    {Array.isArray(project.content?.experience) &&
                                                        project.content.experience.map((item: any, i: number) => <li
                                                            key={i}>{item}</li>)}
                                                </ul>
                                            </div>

                                            <div>
                                                <div className="w-100 d-flex align-items-center">
                                                    <img className="icon" alt="Werkzeug" src={pen}/>
                                                    <h3>{t.projects.label_tools}</h3>
                                                </div>
                                                <ul className={'grid-1-1'}>
                                                    {Array.isArray(project.content?.text) &&
                                                        project.content.text.map((item, i) => <li key={i}>{item}</li>)}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    )}
                </Swiper>
            </div>
        );
    }

    return (
        <div className="swiper-header-container">
            <Swiper
                spaceBetween={50}
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation
                pagination={{clickable: true, type: 'bullets'}}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop
            >
                {cardsData.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className="swiper-item">
                            <Card
                                name={card.title}
                                title={card.title}
                                content={card.content}
                                place={card.place}
                                date={card.date}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};