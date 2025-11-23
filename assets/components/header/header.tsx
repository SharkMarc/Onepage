import React from 'react';


export const Header = ({}) => (
    <div className={'header-content'}>
        <header className="header">
            <nav className="nav">
                <h1 className="logo">Marcs Onepage im aufbau</h1>
                <ul className="nav-links">
                    <li><a href="#übermich">About me</a></li>
                    <li><a href="#skills">Skillset</a></li>
                    <li><a href="#lebenslauf">werdegang</a></li>
                    <li><a href="#prozessevaluation">Prozessevaluation</a></li>
                    <li><a href="#contact">Kontakt</a></li>
                </ul>
                {/*<button className="cta">Get Started</button>*/}
            </nav>
            <div className="hero">
                <h1>Welcome to MyOnePager</h1>
                <p>Hier eine Idee einfügen.</p>
                <p>öööh n bild hier ?</p>
                <button className="cta">ööh button</button>
            </div>

        </header>

    </div>
);

