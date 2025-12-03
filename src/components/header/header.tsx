import React from 'react';
import marc from '../assets/images/marc_white.png';
import birthday from '../assets/images/birthday.png';
import home from '../assets/images/home.png';
import user from '../assets/images/user.png';
import global from '../assets/images/global.png';
import name from '../assets/images/name.png';

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
                                <p><img className={'icon'} src={name} alt={'name'}/> Marc Spree</p>
                                <p><img className={'icon'} src={birthday} alt={'birthday'}/> 21.05.1992</p>
                                <p><img className={'icon'} src={home} alt={'home'}/> Deutschland, Nürnberg</p>
                                <p><img className={'icon'} src={global} alt={'global'}/>Deutsch Muttersprache, Englisch verhandlungssicher</p>
                                <button className={'cursor-pointer btn-no-style'} onClick={() => scrollTo('contact')}> <img className={'icon'} src={user} alt={'user'}/>Kontakt</button>
                            </div>
                        </div>
                    </div>

                </div>
            </header>
        </div>)
};

