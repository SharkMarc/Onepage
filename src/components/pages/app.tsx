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
import kom21 from '../assets/images/kom21.png';
import gossenmetrawatt from '../assets/images/gossenmetrawatt.png';
import {VerticalTimeline} from "../timeline-fnction";
import {useTranslation} from "../../hooks/useTranslation";
import marc from "../assets/images/marc_white.png";
import birthday from "../assets/images/birthday.png";
import home from "../assets/images/home.png";
import global from "../assets/images/global.png";
import soccre from "../assets/images/soccre.png";
import cooking from "../assets/images/cooking-white.png";
import console from "../assets/images/console.png";

// images bleiben wie bisher
export const projectImagePaths = (t: any) => [
    {
        src: freelancermapImg,
        alt: 'freelancermap',
        title: t.projects.freelancermap.title,
        content: {
            experience: t.projects.freelancermap.experience,
            text: t.projects.freelancermap.text
        },
        link: t.projects.freelancermap.link
    },
    {
        src: designenlassenImg,
        alt: 'designenlassen',
        title: t.projects.designenlassen.title,
        content: {
            experience: t.projects.designenlassen.experience,
            text: t.projects.designenlassen.text
        },
        link: t.projects.designenlassen.link
    },
    {
        src: speisekarteImg,
        alt: 'speisekarte',
        title: t.projects.speisekarte.title,
        content: {
            experience: t.projects.speisekarte.experience,
            text: t.projects.speisekarte.text
        },
        link: t.projects.speisekarte.link
    },
    {
        src: prevaImg,
        alt: 'processevaluation',
        title: t.projects.preva.title,
        content: {
            experience: t.projects.preva.experience,
            text: t.projects.preva.text
        },
        link: t.projects.preva.link
    },
    {
        src: freelanceomatImg,
        alt: 'freelanceomat',
        title: t.projects.freelanceomat.title,
        content: {
            experience: t.projects.freelanceomat.experience,
            text: t.projects.freelanceomat.text
        },
        link: t.projects.freelanceomat.link
    },
    {
        src: gastromanagerImg,
        alt: 'gastromanager',
        title: t.projects.gastromanager.title,
        content: {
            experience: t.projects.gastromanager.experience,
            text: t.projects.gastromanager.text
        },
        link: t.projects.gastromanager.link
    },
    {
        src: kom21,
        alt: 'kom21',
        title: t.projects.kom21.title,
        content: {
            experience: t.projects.kom21.experience,
            text: t.projects.kom21.text
        },
        link: t.projects.kom21.link
    },
    {
        src: gossenmetrawatt,
        alt: 'gossenmetrawatt',
        title: t.projects.gossenmetrawatt.title,
        content: {
            experience: t.projects.gossenmetrawatt.experience,
            text: t.projects.gossenmetrawatt.text
        },
        link: t.projects.gossenmetrawatt.link
    },
];


export const badgesClientSide = (t: any) => [
    {label: t.skills.badges.javascript.label, tooltip: t.skills.badges.javascript.tooltip, isSuccess: true},
    {label: t.skills.badges.typescript.label, tooltip: t.skills.badges.typescript.tooltip, isSuccess: true},
    {label: t.skills.badges.react.label, tooltip: t.skills.badges.react.tooltip, isSuccess: true},
    {label: t.skills.badges.reactSSR.label, tooltip: t.skills.badges.reactSSR.tooltip, isSuccess: true},
    {label: t.skills.badges.responsive.label, tooltip: t.skills.badges.responsive.tooltip, isSuccess: true},

    {label: t.skills.badges.scss.label, tooltip: t.skills.badges.scss.tooltip, isSuccess: true},
    {label: t.skills.badges.sass.label, tooltip: t.skills.badges.sass.tooltip, isSuccess: true},
    {label: t.skills.badges.bootstrap.label, tooltip: t.skills.badges.bootstrap.tooltip, isSuccess: true},

    {label: t.skills.badges.twig.label, tooltip: t.skills.badges.twig.tooltip, isSuccess: false},
    {label: t.skills.badges.node.label, tooltip: t.skills.badges.node.tooltip, isSuccess: false},

    {label: t.skills.badges.accessibility.label, tooltip: t.skills.badges.accessibility.tooltip, isSuccess: true},
    {label: t.skills.badges.seo.label, tooltip: t.skills.badges.seo.tooltip, isSuccess: true},

    {label: t.skills.badges.jest.label, tooltip: t.skills.badges.jest.tooltip, isSuccess: true},
];

export const badgesServerSide = (t: any) => [
    {label: t.skills.badges.php.label, tooltip: t.skills.badges.php.tooltip, isSuccess: false},
    {label: t.skills.badges.symfony.label, tooltip: t.skills.badges.symfony.tooltip, isSuccess: false},
    {label: t.skills.badges.mariadb.label, tooltip: t.skills.badges.mariadb.tooltip, isSuccess: false},

    {label: t.skills.badges.devops.label, tooltip: t.skills.badges.devops.tooltip, isSuccess: false},
    {label: t.skills.badges.docker.label, tooltip: t.skills.badges.docker.tooltip, isSuccess: false},
    {label: t.skills.badges.infrastructure.label, tooltip: t.skills.badges.infrastructure.tooltip, isSuccess: false},

    {label: t.skills.badges.bitbucket.label, tooltip: t.skills.badges.bitbucket.tooltip, isSuccess: true},
    {label: t.skills.badges.jira.label, tooltip: t.skills.badges.jira.tooltip, isSuccess: true},
];

export const badgesUiUx = (t: any) => [
    {label: t.skills.badges.figma.label, tooltip: t.skills.badges.figma.tooltip, isSuccess: true},
];


const App = () => {
    const {t, lang, setLang} = useTranslation("de");
    const [openSections, setOpenSections] = useState({});

    React.useEffect(() => {
        const storedLang = localStorage.getItem("lang") as "de" | "en" | null;

        if (storedLang) {
            setLang(storedLang);
        }
    }, []);

    if (!t) return null;

// Katze in der Konsole für F12-Öffner
//     (function () {
//         const catArt = `
//       |\\---/|
//       | o_o |
//        \\_^_/
//   `;
//
//         const message = "%cHey du! Schön, dass du die Konsole geöffnet hast! 😸";
//
//         const styles = [
//             "color: #ff69b4; font-size: 16px; font-weight: bold;", // Nachricht
//             "color: #00ffff; font-size: 14px;" // Katze
//         ];
//
//         let devtoolsOpen = false;
//         const detectDevTools = () => {
//             const start = new Date();
//
//             const end = new Date();
//             if (end.getTime() - start.getTime() > 100) { // ✅ TypeScript-kompatibel
//                 if (!devtoolsOpen) {
//                     devtoolsOpen = true;
//                     console.log("%c" + catArt, styles[1]);
//                     console.log(message, styles[0]);
//                 }
//             }
//         };
//
//         setInterval(detectDevTools, 1000);
//     })();


    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section], // toggle this section
        }));
    };

    const sections = [
        {name: t.skills.client, badges: badgesClientSide(t), key: "client"},
        {name: t.skills.server, badges: badgesServerSide(t), key: "server"},
        {name: t.skills.uiux, badges: badgesUiUx(t), key: "uiux"},
    ];

    return (
        <>
            <Header t={t}/>
            <div className="switcher mg-y-auto d-flex" data-tooltip-placement="top-center"
                 data-tooltip-title={lang === "de" ? "Germany" : "English"}>
                <label htmlFor="toggler"
                       className="d-flex">
                    <span className="switch">
                    <input id="toggler" className="checkbox" type="checkbox" checked={lang === 'de'}
                           name="show_active" onChange={() => setLang(lang === "de" ? "en" : "de")}/>
                        <span className="toggle-thumb"></span></span>
                </label>
            </div>
            <main>
                {/*<div className={'app flex-wrap'}>*/}
                <div className={''}>
                    <section className="about-me centered-section" style={{padding: '2.5rem 1rem', textAlign: 'center'}}>
                        <div className="about-inner" style={{maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem'}}>
                            {/*<img src={marc} alt="Marc" className="about-avatar" style={{width: 120, height: 120, borderRadius: '50%', objectFit: 'contain'}} />*/}
                            <div className="about-card" style={{textAlign: 'center', width: '100%'}}>
                            <h2 className={'about-me-title'}>Über mich</h2><div className="about-personal" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem'}}>
                            <p><strong>{t.header.personal.name}</strong></p>
                            <p><img className="icon" src={birthday} alt="birthday" style={{width:18, verticalAlign:'middle', marginRight:6}}/> {t.header.personal.birthday}</p>
                            <p><img className="icon" src={home} alt="home" style={{width:18, verticalAlign:'middle', marginRight:6}}/> {t.header.personal.location}</p>
                            <p><img className="icon" src={global} alt="languages" style={{width:18, verticalAlign:'middle', marginRight:6}}/> {t.header.personal.languages}</p>
                        </div>
                        </div>
                        </div>

                            <div className="about-hobbies" style={{marginTop: '1rem'}}>
                                <p style={{marginBottom: '0.25rem'}}>{t.header.hobbies.title}:</p>
                                <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '1rem', justifyContent: 'center'}}>
                                    <li style={{display:'flex', alignItems:'center', gap:8}}>
                                        <img className="icon" src={soccre} alt="soccer" style={{width:20}}/>
                                        <span>{t.header.hobbies.items.soccer}</span>
                                    </li>
                                    <li style={{display:'flex', alignItems:'center', gap:8}}>
                                        <img className="icon" src={cooking} alt="cooking" style={{width:20}}/>
                                        <span>{t.header.hobbies.items.cooking}</span>
                                    </li>
                                    <li style={{display:'flex', alignItems:'center', gap:8}}>
                                        <img className="icon" src={console} alt="gaming" style={{width:20}}/>
                                        <span>{t.header.hobbies.items.gaming}</span>
                                    </li>
                                </ul>
                            </div>
                    </section>
                    <section id={"skills"}>
                        <div className={"w-100"}>
                            <h2>{t.skills.title}</h2>

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
                                                       tooltip={badge.tooltip} isSuccess={badge.isSuccess}/>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id={"projects"}>
                        <h2>{t.projects.title}</h2>
                        <Carousel isProject={true} data={projectImagePaths(t)} t={t}/>
                    </section>

                    {/*has sections inside */}
                    <VerticalTimeline t={t}/>

                    <section id={'howiwork'}>
                        <div>
                            <h2>{t.howIWork.title}</h2>
                            <div className={'flex-column gap-8 w-100'}>
                                <HowIWork t={t}/>
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
