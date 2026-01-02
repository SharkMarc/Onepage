import React, {useState} from "react";
import arrowDown from '../assets/images/arrow-down.png';

export const HowIWork = ({}) => {
    const workItems = [
        {
            title: "Ticketbasiertes Arbeiten",
            content: "Ich arbeite strukturiert und nachvollziehbar mit Aufgaben und Tickets, um jederzeit den Überblick über Fortschritt und Prioritäten zu behalten."
        },
        {
            title: "KI & Smart Tools",
            content: "Ich setze KI-gestützte Tools wie GitHub Copilot, JetBrains AI und ChatGPT gezielt ein, um effizienter zu arbeiten, Ideen schneller umzusetzen und die Codequalität nachhaltig zu verbessern."
        },
        {
            title: "Zusammenarbeit mit Product Ownern",
            content: "Durch regelmäßige Abstimmungen mit Product Ownern stelle ich sicher, dass Anforderungen klar verstanden und zielgerichtet umgesetzt werden."
        },
        {
            title: "Zusammenarbeit mit Designern",
            content: "Die enge Zusammenarbeit mit Designern gewährleistet eine konsistente User Experience und eine saubere Umsetzung der gestalterischen Konzepte."
        },
        {
            title: "Code Reviews",
            content: "Durch sorgfältige Code Reviews trage ich aktiv zur Qualitätssicherung sowie zur Einhaltung von Best Practices und Coding-Standards bei."
        },
        {
            title: "Aktueller Stand der Technik",
            content: "Ich bilde mich kontinuierlich weiter und halte mein Wissen zu modernen Technologien, Frameworks und Best Practices stets auf dem neuesten Stand."
        },
        {
            title: "Pair Programming",
            content: "Pair Programming nutze ich gezielt, um Wissen zu teilen, Lösungen gemeinsam zu erarbeiten und neue Perspektiven kennenzulernen."
        },
        {
            title: "Selbstständigkeit",
            content: "Ich übernehme Verantwortung für meine Aufgaben und arbeite selbstständig sowie lösungsorientiert."
        },
        {
            title: "Teamplayer",
            content: "Als Teamplayer unterstütze ich meine Kolleginnen und Kollegen aktiv und fördere eine offene, konstruktive und kooperative Arbeitsatmosphäre."
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
            <div className={'align-item-start grid-1-1 gap-8'}>
                {workItems.map((item, i) => (
                    <div key={"how-i-work-" + i}
                         className={`${openSections["how-i-work-" + i] ? "card gap-8 cursor-pointer" : "card cursor-pointer"}`}
                         onClick={() => toggleSection("how-i-work-" + i)}>
                        <div className={"title d-flex justify-content-center"}>{item.title}
                            <img alt={'collapse carrot'}
                                 className={`img-responsive caret ${openSections["how-i-work-" + i] ? "rotated" : ""}`}
                                 src={arrowDown}
                            />
                        </div>
                        <p className={`collapsible-content ${openSections["how-i-work-" + i] ? 'open' : ''}`}>“{item.content}“</p>
                    </div>
                ))}
            </div>
        </div>
    )
};
