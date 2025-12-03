import React from "react";
import {motion} from "framer-motion";
import {timeline} from "./lebenslauf_zeitstrahl";
import {timelineExperience} from "./lebenslauf_zeitstrahl";
import {useInView} from "react-intersection-observer";

export const VerticalTimeline = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,  // nur einmal animieren
        threshold: 0.1,     // wann gilt es als sichtbar (10%)
    });
    const [ref2, inView2] = useInView({
        triggerOnce: true,  // nur einmal animieren
        threshold: 0.1,     // wann gilt es als sichtbar (10%)
    });

    return (
        <>
            <h2>Experience</h2>

            <div className="timeline-container blue w-100"
                 ref={ref2}>
                <div className="timeline-line"/>
                {timelineExperience.map((entry, index) => (
                    <motion.div
                        key={index}
                        className="timeline-item"
                        initial={{opacity: 0, scaleY: 0}}
                        animate={inView2 ? {opacity: 1, scaleY: 1} : {}}
                        style={{originY: 0}}
                        transition={{duration: 0.5, delay: index * 0.4 + 0.4}}
                    >
                        <motion.div
                            className="timeline-dot"
                            initial={{opacity: 0, scaleY: 0}}
                            animate={inView2 ? {opacity: 1, scaleY: 1} : {}}
                            transition={{duration: 0.5, delay: index * 0.4 + 0.4}}
                        />


                        <div className="timeline-card">
                            <h2>{entry.title}</h2>
                            {entry.subtitle && <p className="subtitle">{entry.subtitle}</p>}
                            {entry.location && <p className="location">{entry.location}</p>}
                            <p className="date">{entry.start}{entry.end ? " – " + entry.end : null}</p>


                            {entry.details && (
                                <ul className="details">
                                    {entry.details.map((d, i) => (
                                        <li key={i}>{d}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </motion.div>
                ))}


                {/*<Separator className="my-6" />*/}
            </div>
            <h2>Lebenslauf</h2>

            <div className="timeline-container  w-100"
                 ref={ref}>
                <div className="timeline-line"/>
                {timeline.map((entry, index) => (
                    <motion.div
                        key={index}
                        className="timeline-item"
                        initial={{opacity: 0, scaleY: 0}}
                        animate={inView ? {opacity: 1, scaleY: 1} : {}}
                        style={{originY: 0}}
                        transition={{duration: 0.5, delay: index * 0.4 + 0.4}}
                    >
                        <motion.div
                            className="timeline-dot"
                            initial={{opacity: 0, scaleY: 0}}
                            animate={inView ? {opacity: 1, scaleY: 1} : {}}
                            transition={{duration: 0.5, delay: index * 0.4 + 0.4}}
                        />


                        <div className="timeline-card">
                            <h2>{entry.title}</h2>
                            {entry.subtitle && <p className="subtitle">{entry.subtitle}</p>}
                            {entry.location && <p className="location">{entry.location}</p>}
                            <p className="date">{entry.start}{entry.end ? " – " + entry.end : null}</p>


                            {entry.details && (
                                <ul className="details">
                                    {entry.details.map((d, i) => (
                                        <li key={i}>{d}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    );
}