import React from "react";
import {Card} from "../card";
export const HowIWork= ({   }) => {
    const workItems= [
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

    return (

        <div>
            <div className={'grid-1-1 gap-8'}>
                {workItems.map((item, i) => (
                    <Card key={"badge-" + i} content={item.content} title={item.title}/>
                ))}
            </div>

            {/*<ul>*/}
            {/*    <li><strong>Tickets:</strong> Ich arbeite strukturiert mit Aufgaben und Tickets, um den Überblick zu*/}
            {/*        behalten.*/}
            {/*    </li>*/}
            {/*    <li><strong>Zusammenarbeit mit Product Ownern:</strong> Ich stimme mich regelmäßig ab, um Anforderungen*/}
            {/*        klar zu verstehen.*/}
            {/*    </li>*/}
            {/*    <li><strong>Designer:</strong> Ich arbeite eng mit Designern zusammen, um eine einheitliche User*/}
            {/*        Experience zu gewährleisten.*/}
            {/*    </li>*/}
            {/*    <li><strong>Code Reviews:</strong> Ich überprüfe und gebe Feedback zu Code, um Qualität und Best*/}
            {/*        Practices sicherzustellen.*/}
            {/*    </li>*/}
            {/*    <li><strong>Neuster Stand der Technik:</strong> Ich halte mich immer über aktuelle Technologien und*/}
            {/*        Frameworks auf dem Laufenden.*/}
            {/*    </li>*/}
            {/*    <li><strong>Pair Programming:</strong> Ich teile mein Wissen durch gemeinsame Programmier-Sessions und*/}
            {/*        lerne gleichzeitig dazu.*/}
            {/*    </li>*/}
            {/*    <li><strong>Selbstständigkeit:</strong> Ich übernehme Verantwortung und arbeite eigenständig an*/}
            {/*        Aufgaben.*/}
            {/*    </li>*/}
            {/*    <li><strong>Teamplayer:</strong> Ich unterstütze das Team aktiv und fördere eine offene, kooperative*/}
            {/*        Arbeitsatmosphäre.*/}
            {/*    </li>*/}
            {/*</ul>*/}
        </div>
    )
};
