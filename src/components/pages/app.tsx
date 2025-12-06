import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import '../../assets/style.scss';
import {Header} from "../header/header";
import {Badge} from "../badge";
import {Carousel} from "../carousell";
import {Contact} from "../footer/contact";
import {HowIWork} from "./howIWork";
import {AboutMe} from "./about-me";
import freelancermapImg from '../assets/images/freelancermap.png';
import designenlassenImg from '../assets/images/designenlassen.png';
import speisekarteImg from '../assets/images/speisekarte.png';
import prevaImg from '../assets/images/preva.png';
import freelanceomatImg from '../assets/images/freelanceomat.png';
import gastromanagerImg from '../assets/images/gastromanager.png';
import {VerticalTimeline} from "../timeline-fnction";

export const projectImagePaths = [
    {
        src: freelancermapImg,
        alt: 'freelancermap',
        title: 'Freelancermap',
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
        } ,
        link: 'https://www.freelancermap.de/'
    },
    {
        src: designenlassenImg,
        alt: 'designenlassen',
        title: 'Designenlassen',
        content: {
            experience: [
                "Redesign",
                "Admin",
                "4 Wochen Zeit"
            ],
            text: [
                'TWIG',
                'REST Api',
                'SCSS',
                'Pagespeed',
                'Admin',
                'Figma'
            ]
        },
        link: 'https://www.designenlassen.de/'
    },
    {
        src: speisekarteImg,
        alt: 'speisekarte',
        title: 'Speisekarte',
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
            ]},
        link: 'https://www.speisekarte.de/'
    },
    {
        src: prevaImg,
        alt: 'processevaluation',
        title: 'Processevaluation',
        content: {
            experience: [
                'Umsetzung der Doktorarbeit',
                'Algorythmen inplentation'
            ],
            text: [
                'Redux',
                'PHP',
                'Server',
                'SCSS'
            ]
        },
        link: 'https://processevaluation.de/'
    },
    {
        src: freelanceomatImg,
        alt: 'freelanceomat',
        title: 'Freelance-o-mat',
        content: {
            experience: [
                'Erstellung des Freelance-O-Mat',
                'Umfrage'
            ],
            text: [
                'Figma',
                'scss',
                'Redux',
            ],
        },
        link: 'https://www.freelance-o-mat.de/'
    },
    {
        src: gastromanagerImg,
        alt: 'gastromanager',
        title: 'Gastromanager',
        content: {
            experience: [
                'Erstellung des Gastromanagers - Ein Ort für gastronomen, ihren Online auftritt zu verwalten.',
                'Umfrage'
            ],
            text: [
                'scss',
                'React',
                'REST Api',
            ],
            // text:'Von Öffnungszeiten, Speisekarten erstellen,  eine Pickup karte zu erstellen ( Corona), Reservierungen zu verwalten und mehr.',
        },
        link: 'https://gastro.speisekarte.de/anmelden'
    }
];


const badgesClientSide = [
    {label: "React", tooltip: "Frontend Library für UI-Komponenten"},
    {label: "Javascript", tooltip: "DIE Sprache des Webs"},
    {label: "TypeScript", tooltip: "JS + Types für bessere Wartbarkeit"},
    {label: "Twig", tooltip: "Templating Engine für PHP/Symfony"},
    {label: "JEST", tooltip: "JavaScript Testing Framework"},
    {label: "(S)CSS", tooltip: "Moderne Stylesheets mit Nesting & mehr"},
    {label: "Bootstrap", tooltip: "CSS-Framework für schnelle Layouts"},
    {label: "SASS", tooltip: "CSS Präprozessor mit Variablen & Mixins"},
    {label: "Node.js", tooltip: "Backend JS-Laufzeitumgebung"},
    {label: "Responsive Design", tooltip: "Mobile-first Layout Prinzipien"},
    {label: "SEO", tooltip: "Optimierung für Suchmaschinen"},
    {label: "Barrierefreiheit", tooltip: "Accessibility Standards"},
    {label: "React Server Side Rendering", tooltip: "SSR mit React (Next.js etc.)"},
    {label: "Javascript", tooltip: "Programmiersprache für Frontend & Backend"},
    {label: "Typescript", tooltip: "Statisches Typing für JS"}
];
// const tools = [
//     "npm", "webpack", "git", "github"
// ]
const badgesServerSide = [
    {label: "PHP", tooltip: "Backend-Skriptsprache für Webanwendungen"},
    {label: "Symfony", tooltip: "Enterprise PHP Framework für komplexe Apps"},
    {label: "MariaDB", tooltip: "Open-Source SQL Datenbank (MySQL Fork)"},
    {label: "Infrastruktur", tooltip: "Server, Netzwerke & Deployment-Prozesse"},
    {label: "DevOps", tooltip: "CI/CD, Automatisierung & Deployment"},
    {label: "Docker / Docker Compose", tooltip: "Containerisierung & Multi-Service Setup"},
    {label: "Bitbucket", tooltip: "Code-Repository & Git Management Tool"},
    {label: "Jira", tooltip: "Projekt- & Ticketmanagement für Teams"}
];

const badgesUiUx = [
    {label: "Figma", tooltip: "UI/UX Design & Prototyping Tool"}
];


const App = () => {
// Katze in der Konsole für F12-Öffner
    (function () {
        const catArt = `
      |\\---/|
      | o_o |
       \\_^_/ 
  `;

        const message = "%cHey du! Schön, dass du die Konsole geöffnet hast! 😸";

        const styles = [
            "color: #ff69b4; font-size: 16px; font-weight: bold;", // Nachricht
            "color: #00ffff; font-size: 14px;" // Katze
        ];

        let devtoolsOpen = false;
        const detectDevTools = () => {
            const start = new Date();

            const end = new Date();
            if (end.getTime() - start.getTime() > 100) { // ✅ TypeScript-kompatibel
                if (!devtoolsOpen) {
                    devtoolsOpen = true;
                    console.log("%c" + catArt, styles[1]);
                    console.log(message, styles[0]);
                }
            }
        };

        setInterval(detectDevTools, 1000);
    })();

    const [openSections, setOpenSections] = useState({});

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section], // toggle this section
        }));
    };

    const sections = [
        {name: 'Client-side', badges: badgesClientSide, key: 'client'},
        {name: 'Server-side', badges: badgesServerSide, key: 'server'},
        {name: 'UI / UX', badges: badgesUiUx, key: 'uiux'},
    ];

    return (
        <>
            <Header/>

            <main>
                {/*<div className={'app flex-wrap'}>*/}
                <div className={''}>
                    <section>
                        <h2>Projekte</h2>
                        <Carousel isProject={true} data={projectImagePaths}/>
                    </section>

                    {/*has sections inside */}
                    <VerticalTimeline/>
                    <section>
                        <div className={"w-100"}>
                            <h2>Skills</h2>

                            <div className="flex-column gap-8 w-100">
                                {sections.map(({name, badges, key}) => (
                                    <div key={key} className="flex-column w-100">
                                        <h3
                                            onClick={() => toggleSection(key)}
                                            className={`collapsible-header ${openSections[key] ? 'open' : ''}`}
                                        >
                                            {name} ({badges.length})
                                        </h3>
                                        <div className={`collapsible-content ${openSections[key] ? 'open' : ''}`}>
                                            {badges.map((badge, i) => (
                                                <Badge key={`${key}-badge-${i}`} content={badge.label}
                                                       tooltip={badge.tooltip}/>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h2>How i work</h2>
                            <div className={'flex-column gap-8 w-100 text-center'}>
                                <HowIWork/>
                            </div>
                        </div>
                    </section>
                    <AboutMe/>
                    <section>
                        <Contact/>
                    </section>
                </div>
            </main>
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App/>);
