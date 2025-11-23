import React from 'react';


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
            <div className={'display-mobile'}>
                <div className={'d-flex svg-menu'} onClick={toggleNav}>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                         width="128.000000pt" height="128.000000pt" viewBox="0 0 128.000000 128.000000"
                         preserveAspectRatio="xMidYMid meet">
                        <metadata>
                            Created by potrace 1.16, written by Peter Selinger 2001-2019
                        </metadata>
                        <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" fill="#000000"
                           stroke="none">
                            <path d="M497 1155 c-124 -34 -249 -129 -316 -239 -93 -154 -95 -389 -6 -542
66 -115 212 -225 335 -253 67 -16 208 -13 275 4 171 45 334 213 374 385 17 72
13 208 -8 282 -46 169 -190 313 -360 360 -77 21 -222 23 -294 3z m335 -87
c303 -144 373 -525 139 -759 -186 -186 -476 -186 -662 0 -186 186 -186 476 0
662 101 101 204 140 353 135 86 -3 104 -7 170 -38z"/>
                            <path d="M394 805 c-4 -8 -4 -22 0 -30 5 -13 39 -15 248 -13 l243 3 0 25 0 25
-243 3 c-209 2 -243 0 -248 -13z"/>
                            <path d="M394 655 c-4 -8 -4 -22 0 -30 5 -13 39 -15 248 -13 l243 3 0 25 0 25
-243 3 c-209 2 -243 0 -248 -13z"/>
                            <path d="M394 505 c-4 -8 -4 -22 0 -30 5 -13 39 -15 248 -13 l243 3 0 25 0 25
-243 3 c-209 2 -243 0 -248 -13z"/>
                        </g>
                    </svg>
                </div>
                <h1 className="logo">Marcs Onepage im aufbau</h1></div>

            <header className="header">
                <nav className="nav">
                    <h1 className="logo">Marcs Onepage im aufbau</h1>
                    <ul className="nav-links">
                        <li><a href="#übermich">About me</a></li>
                        <li><a href="#skills">Skillset</a></li>
                        {/*<li><a href="#lebenslauf">werdegang</a></li>*/}
                        <li><a href="#prozessevaluation">Prozessevaluation</a></li>
                        <li><a href="#contact">Kontakt</a></li>
                    </ul>
                </nav>

                <nav className="mobile-nav slide-in">
                    <ul className={isOpen ? "nav-links" : "d-none"}>
                        <li>
                            <div onClick={() => scrollTo("aboutMe")}>About me</div>
                        </li>
                        <li>
                            <div onClick={() => scrollTo("skills")}>Skillset</div>
                        </li>
                        <li>
                            <div onClick={() => scrollTo("prozessevaluation")}>Prozessevaluation</div>
                        </li>
                        <li>
                            <div onClick={() => scrollTo("contact")}>Kontakt</div>
                        </li>
                    </ul>
                    {/*<button className="cta">Get Started</button>*/}
                </nav>
                <div className="hero">
                    <h1>Welcome to MyOnePager</h1>
                    <p>Hier eine Idee einfügen.</p>
                    <p>öööh n bild hier ?</p>
                    <button className="btn">ööh button</button>
                </div>

            </header>

        </div>)
};

