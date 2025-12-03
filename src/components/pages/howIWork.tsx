import React, {useState} from "react";
import arrowDown from '../assets/images/arrow-down.png';

export const HowIWork = ({}) => {
    const workItems = [
        {
            title: "Tickets",
            content: "Ich arbeite strukturiert mit Aufgaben und Tickets, um den Überblick zu behalten."
        },
        {
            title: "Zusammenarbeit mit Product Ownern",
            content: "Ich stimme mich regelmäßig ab, um Anforderungen klar zu verstehen."
        },
        {
            title: "Designer",
            content: "Ich arbeite eng mit Designern zusammen, um eine einheitliche User Experience zu gewährleisten."
        },
        {
            title: "Code Reviews",
            content: "Ich überprüfe und gebe Feedback zu Code, um Qualität und Best Practices sicherzustellen."
        },
        {
            title: "Neuster Stand der Technik",
            content: "Ich halte mich immer über aktuelle Technologien und Frameworks auf dem Laufenden."
        },
        {
            title: "Pair Programming",
            content: "Ich teile mein Wissen durch gemeinsame Programmier-Sessions und lerne gleichzeitig dazu."
        },
        {
            title: "Selbtständigkeit",
            content: "Ich übernehme Verantwortung und arbeite eigenständig an Aufgaben."
        },
        {
            title: "Teamplayer",
            content: "Ich unterstütze das Team aktiv und fördere eine offene, kooperative Arbeitsatmosphäre."
        }
    ];


    const [openSections, setOpenSections] = useState({});

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section], // toggle this section
        }));
    };

    return (

        <div>
            <div className={'grid-1-1 gap-8'}>
                {workItems.map((item, i) => (
                    <div key={"how-i-work-" + i} className={`${openSections["how-i-work-" + i] ? "card gap-8 cursor-pointer": "card cursor-pointer"}`}>
                         onClick={() => toggleSection("how-i-work-" + i)}>
                        <div className={"title d-flex justify-content-center"}>{item.title}
                            <img alt={'collapse carrot'}
                                 className={`img-responsive caret ${openSections["how-i-work-" + i] ? "rotated" : ""}`}
                                 src={arrowDown}
                            />
                        </div>
                        <p className={`collapsible-content ${openSections["how-i-work-" + i] ? 'open' : ''}`}>{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};
