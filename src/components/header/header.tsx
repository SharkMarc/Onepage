import React from 'react';
import {Contact} from "../footer/contact";
import {Preva} from "../preva/preva";
import marc from '../assets/images/marc_white.png';

export const Header = ({}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

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
                {/*<nav className="nav">*/}
                {/*    <h1 className="logo">Marcs Onepage im aufbau</h1>*/}
                {/*    <ul className="nav-links">*/}
                {/*        <li><a href="#übermich">About me</a></li>*/}
                {/*        <li><a href="#skills">Skillset</a></li>*/}
                {/*        /!*<li><a href="#lebenslauf">werdegang</a></li>*!/*/}
                {/*        <li><a href="#prozessevaluation">Prozessevaluation</a></li>*/}
                {/*        <li><a href="#contact">Kontakt</a></li>*/}
                {/*    </ul>*/}
                {/*</nav>*/}

                {/*<nav className={isOpen ? "mobile-nav slide-in":"mobile-nav "}>*/}
                {/*    <ul className={isOpen ? "nav-links" : "d-none"}>*/}
                {/*        <li>*/}
                {/*            <div onClick={() => scrollTo("aboutMe")}>About me</div>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <div onClick={() => scrollTo("skills")}>Skillset</div>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <div onClick={() => scrollTo("prozessevaluation")}>Prozessevaluation</div>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <div onClick={() => scrollTo("contact")}>Kontakt</div>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*    /!*<button className="cta">Get Started</button>*!/*/}
                {/*</nav>*/}
                <div className="hero">
                    <h1>Welcome to MyOnePager</h1>
                    {/*<p>Hier eine Idee einfügen.</p>*/}
                    <div className={'grid-1-1'}>
                        <div className={'flex-column justify-content-center'}>
                            <p>Hi ich bin der Marc schön dass du reinschaust</p>
                            <p>Geboren am 21.05.1992</p>
                            <p onClick={() => scrollTo('contact')}>Kontakt</p>
                            <p>       {/*<div>*/}
                                Ich spreche Deutsch als Muttersprache und Englisch verhandlungssicher
                                {/*</div>*/}</p>
                        </div>
                        <img className={'img-marc img-responsive'} src={marc}
                             alt={'Marc'}/>
                    </div>

                    {/*<img src={Marc} alt={'Marc'}/>*/}
                    {/*<p>öööh n bild hier ?</p>*/}
                    {/*<button className="btn">ööh button</button>*/}
                </div>

            </header>

        </div>)
};

