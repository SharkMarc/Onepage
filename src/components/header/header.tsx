import React from 'react';
import marc from '../assets/images/marc_white.png';
import birthday from '../assets/images/birthday.png';
import home from '../assets/images/home.png';
import user from '../assets/images/user.png';
import global from '../assets/images/global.png';
import name from '../assets/images/name.png';
import console from '../assets/images/console.png';
import cooking from '../assets/images/cooking-white.png';
import soccre from '../assets/images/soccre.png';

export const Header = ({}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const scrollTo = (id) => {
        setIsOpen(!isOpen);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <div className={'header-content'}>
            <header className="header">

                <div className="hero">
                    <div className={'hero-inner'}>
                        <h1>Welcome to MyOnePager</h1>

                        <div className={'hero-content'}>
                            <div className={'flex-column justify-content-center'}>
                                <p><img className={'icon'} src={name} alt={'name'}/> Marc Spree</p>
                                <p><img className={'icon'} src={birthday} alt={'birthday'}/> 21.05.1992</p>
                                <p><img className={'icon'} src={home} alt={'home'}/> Deutschland, Nürnberg</p>
                                <p><img className={'icon'} src={global} alt={'global'}/>Deutsch Muttersprache, Englisch
                                    verhandlungssicher</p>
                                <p>Hey, ich bin Marc.
                                    Ich liebe es, Menschen, Ideen und Projekte miteinander zu verbinden und
                                    Wege zu finden, wie man gemeinsam etwas bewegen kann.
                                    Was mich antreibt: echte Zusammenarbeit, klare Kommunikation und Projekte, die Spaß machen und Mehrwert schaffen.
                                    <br/>

                                    Ich suche Möglichkeiten,
                                    meine Fähigkeiten einzubringen,
                                    kreativ zu denken,
                                    Probleme smart zu lösen und etwas aufzubauen, das bleibt.
                                    <br/>
                                    Wenn du jemanden suchst, der engagiert, zuverlässig und voll dabei ist – dann lass uns sprechen.
<br/>
                                    Let’s meet. Let’s build. Let’s start.</p>
                                <p>Hobbys:</p>
                                <ul>
                                    <li>
                                        <img className={'icon'} src={soccre} alt={'soccre'}/>Fußball
                                    </li>
                                    <li>
                                        <img className={'icon'} src={cooking} alt={'cooking'}/>Kochen
                                    </li>
                                    <li>
                                        <img className={'icon'} src={console} alt={'console'}/>Gaming
                                    </li>
                                </ul>
                                {/*<p><img className={'icon'} src={global} alt={'global'}/>mit freunden unterwegs</p>*/}
                                <button className={'d-flex cursor-pointer btn-no-style'} onClick={() => scrollTo('contact')}>
                                    <img className={'icon'} src={user} alt={'user'}/>Kontakt
                                </button>
                            </div>
                        </div>
                    </div>
                    <img className={'img-marc hero-img img-responsive'} src={marc}
                         alt={'Marc'}/>
                </div>
            </header>
        </div>)
};

