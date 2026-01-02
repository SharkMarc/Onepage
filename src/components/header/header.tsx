import React from 'react';
import marc from '../assets/images/marc_white.png';
import birthday from '../assets/images/birthday.png';
import home from '../assets/images/home.png';
import global from '../assets/images/global.png';
import name from '../assets/images/name.png';
import console from '../assets/images/console.png';
import cooking from '../assets/images/cooking-white.png';
import soccre from '../assets/images/soccre.png';
import anchor from '../assets/images/anchor.png';

interface headerProps{
    t: any;
}
export const Header = ({t}:headerProps) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const scrollTo = (id) => {
        setIsOpen(!isOpen);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({behavior: 'smooth'});
        }
    }
    if (!t?.header) return null;

    return (
        <div className="header-content">
            <header className="header">
                <div className="hero">
                    <div className="hero-inner">
                        <h1>{t.header.headline}</h1>

                        <div className="hero-content grid-1-1">
                            <div className="flex-column justify-content-center">
                                <p><img className="icon" src={name} alt="name"/> {t.header.personal.name}</p>
                                <p><img className="icon" src={birthday} alt="birthday"/> {t.header.personal.birthday}</p>
                                <p><img className="icon" src={home} alt="home"/> {t.header.personal.location}</p>
                                <p><img className="icon" src={global} alt="languages"/> {t.header.personal.languages}</p>

                                <p>
                                    <strong>{t.header.intro.greeting}</strong><br/>
                                    {t.header.intro.text}
                                </p>

                                <p>{t.header.hobbies.title}:</p>
                                <ul>
                                    <li>
                                        <img className="icon" src={soccre} alt="soccer"/>
                                        {t.header.hobbies.items.soccer}
                                    </li>
                                    <li>
                                        <img className="icon" src={cooking} alt="cooking"/>
                                        {t.header.hobbies.items.cooking}
                                    </li>
                                    <li>
                                        <img className="icon" src={console} alt="gaming"/>
                                        {t.header.hobbies.items.gaming}
                                    </li>
                                </ul>

                                {/* Mobile Navigation */}
                                <button className="d-flex cursor-pointer btn-no-style align-items-center d-md-none"
                                        onClick={() => scrollTo('skills')}>
                                    <img className="icon" src={anchor} alt="skills"/>
                                    {t.header.navigation.skills}
                                </button>

                                <button className="d-flex cursor-pointer btn-no-style align-items-center d-md-none"
                                        onClick={() => scrollTo('projects')}>
                                    <img className="icon" src={anchor} alt="projects"/>
                                    {t.header.navigation.projects}
                                </button>

                                <button className="d-flex cursor-pointer btn-no-style align-items-center d-md-none"
                                        onClick={() => scrollTo('resume')}>
                                    <img className="icon" src={anchor} alt="resume"/>
                                    {t.header.navigation.resume}
                                </button>

                                <button className="d-flex cursor-pointer btn-no-style align-items-center d-md-none"
                                        onClick={() => scrollTo('howiwork')}>
                                    <img className="icon" src={anchor} alt="how i work"/>
                                    {t.header.navigation.howIWork}
                                </button>

                                <button className="d-flex cursor-pointer btn-no-style align-items-center d-md-none"
                                        onClick={() => scrollTo('contact')}>
                                    <img className="icon" src={anchor} alt="contact"/>
                                    {t.header.navigation.contact}
                                </button>
                            </div>

                            <div></div>
                        </div>
                    </div>

                    <img className="img-marc hero-img img-responsive" src={marc} alt="Marc"/>
                </div>
            </header>
        </div>
    );
};

