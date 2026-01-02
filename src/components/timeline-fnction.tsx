import React from "react";
import {motion} from "framer-motion";
import {timeline} from "./lebenslauf_zeitstrahl";
import {timelineExperience} from "./lebenslauf_zeitstrahl";
import {useInView} from "react-intersection-observer";

interface verticalTimeLineProps  {
    t:any;
}
export const VerticalTimeline = ({t}:verticalTimeLineProps) => {
    const [ref, inView] = useInView({
        triggerOnce: true,  // nur einmal animieren
        threshold: 0.1,     // wann gilt es als sichtbar (10%)
    });
    const [ref2, inView2] = useInView({
        triggerOnce: true,  // nur einmal animieren
        threshold: 0.1,     // wann gilt es als sichtbar (10%)
    });
    if (!t) return null;


    const timelineExperience = t.timeline.experience;
    const timeline = t.timeline.education;

    return  (
        <>
            <section id="resume" className="grid-1-1">
                {/* EXPERIENCE */}
                <div>
                    <h2>{t.timeline.titles.experience}</h2>

                    <div className="timeline-container blue" ref={ref2}>
                        <div className="timeline-line"/>

                        {timelineExperience.map((entry, index) => (
                            <motion.div
                                key={index}
                                className="timeline-item"
                                initial={{ opacity: 0, scaleY: 0 }}
                                animate={inView2 ? { opacity: 1, scaleY: 1 } : {}}
                                style={{ originY: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.4 + 0.4 }}
                            >
                                <motion.div
                                    className="timeline-dot"
                                    initial={{ opacity: 0, scaleY: 0 }}
                                    animate={inView2 ? { opacity: 1, scaleY: 1 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.4 + 0.4 }}
                                />

                                <div className="timeline-card">
                                    <h3>{entry.title}</h3>
                                    {entry.subtitle && <p className="subtitle">{entry.subtitle}</p>}
                                    {entry.location && <p className="location">{entry.location}</p>}
                                    <p className="date">
                                        {entry.start}
                                        {entry.end ? ` – ${entry.end}` : null}
                                    </p>

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
                </div>

                {/* EDUCATION */}
                <div>
                    <h2>{t.timeline.titles.education}</h2>

                    <div className="timeline-container silver" ref={ref}>
                        <div className="timeline-line"/>

                        {timeline.map((entry, index) => (
                            <motion.div
                                key={index}
                                className="timeline-item"
                                initial={{ opacity: 0, scaleY: 0 }}
                                animate={inView ? { opacity: 1, scaleY: 1 } : {}}
                                style={{ originY: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.4 + 0.4 }}
                            >
                                <motion.div
                                    className="timeline-dot"
                                    initial={{ opacity: 0, scaleY: 0 }}
                                    animate={inView ? { opacity: 1, scaleY: 1 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.4 + 0.4 }}
                                />

                                <div className="timeline-card">
                                    <h3>{entry.title}</h3>
                                    {entry.subtitle && <p className="subtitle">{entry.subtitle}</p>}
                                    {entry.location && <p className="location">{entry.location}</p>}
                                    <p className="date">
                                        {entry.start}
                                        {entry.end ? ` – ${entry.end}` : null}
                                    </p>

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
                </div>
            </section>
        </>
    );
}