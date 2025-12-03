import React from 'react';
import marc from '../assets/images/marc_white.png';

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
                <img className={'img-marc hero-img img-responsive'} src={marc}
                     alt={'Marc'}/>
                <div className="hero">
                    <div className={'hero-inner'}>
                        <h1>Welcome to MyOnePager</h1>

                        <div className={'hero-content'}>
                            <div className={'flex-column justify-content-center'}>
                                <p>Hi ich bin der Marc schön dass du reinschaust</p>
                                <p>Geboren am 21.05.1992</p>
                                <p>
                                    Ich spreche Deutsch als Muttersprache und Englisch verhandlungssicher
                                </p>
                                <button className={'cursor-pointer btn-no-style'} onClick={() => scrollTo('contact')}>Kontakt</button>
                            </div>
                        </div>
                    </div>

                </div>
            </header>
        </div>)
};

