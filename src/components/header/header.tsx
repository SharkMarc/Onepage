import React from 'react';
import marc from '../assets/images/marc_white.png';
import anchor from '../assets/images/anchor.png';

interface headerProps {
    t: any;
}

export const Header = ({t}: headerProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const heroSvgRef = React.useRef<HTMLDivElement | null>(null);

    const scrollTo = (id) => {
        setIsOpen(!isOpen);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({behavior: 'smooth'});
        }
    }

    // New: adjust .hero-svg width based on viewport (clientWidth) and keep it centered.
    React.useEffect(() => {
        const MAX_SVG_WIDTH = 900; // should match the svg viewBox width
        let rafId: number | null = null;

        const updateHeroSvg = () => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                const vw = document.documentElement.clientWidth || window.innerWidth;
                const svgWidth = Math.min(MAX_SVG_WIDTH, vw);
                const wrapper = heroSvgRef.current;
                if (!wrapper) return;
                // set flexible width with maxWidth so layout isn't forced
                wrapper.style.width = '100%';
                wrapper.style.maxWidth = `${svgWidth}px`;
                wrapper.style.marginLeft = 'auto';
                wrapper.style.marginRight = 'auto';
                wrapper.style.display = 'block';
                wrapper.style.boxSizing = 'border-box';
            });
        };

        // run initially and on resize
        updateHeroSvg();
        window.addEventListener('resize', updateHeroSvg);
        return () => {
            window.removeEventListener('resize', updateHeroSvg);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    if (!t?.header) return null;

    return (
    <div className="header-content">
            <header className="header">
                <div className="hero">
                    <div className="hero-inner">
                        <div className="hero-svg" ref={heroSvgRef}>
                            <svg width="100%" height="auto" viewBox="0 0 550 260" preserveAspectRatio="xMidYMid meet" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <clipPath id="clip-code" clipPathUnits="userSpaceOnUse">
                                        <rect x="40" y="160" width="32" height="32" />
                                    </clipPath>
                                </defs>
                                <g transform="translate(0 48)">
                                    <rect x="0" y="0" width="32" height="32" rx="4"
                                          stroke="#ff2e63" strokeWidth="2"/>
                                    <rect x="8" y="8" width="16" height="16" rx="2"
                                          fill="#ff2e63"
                                          className="icon-rect"/>
                                </g>

                                <g transform="translate(0 110)">
                                    <g className="icon-heart">
                                        <path d="M16 4
                                                   C16 0, 2 0, 2 14
                                                   C2 24, 16 32, 16 32
                                                   C16 32, 30 24, 30 14
                                                   C30 0, 16 0, 16 4Z"
                                              fill="#ff2e63"/>
                                    </g>
                                </g>

                                <g transform="translate(0 164)">
                                    <path d="M11 6 L3 16 L11 26"
                                          stroke="#ff2e63"
                                          strokeWidth={3}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M21 6 L29 16 L21 26"
                                          stroke="#ff2e63"
                                          strokeWidth={3}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <g className="icon-rotate">
                                        <line x1="12" y1="28" x2="20" y2="4"
                                              stroke="#ff2e63"
                                              strokeWidth={2.5}
                                              strokeLinecap="round"/>
                                    </g>
                                </g>

                                <text x="120" y="78"
                                      fill="#ffffff"
                                      fontSize="40"
                                      fontWeight="700"
                                      fontFamily="Inter, Helvetica, Arial, sans-serif"
                                      letterSpacing="0.8">
                                    {t.header.headline}
                                </text>
                                <text x="120" y="136"
                                      fill="#b3b3b3"
                                      fontSize="32"
                                      fontWeight="500"
                                      fontFamily="Inter, Helvetica, Arial, sans-serif">
                                    {t.header.headline_second}
                                </text>
                                <text x="120" y="190"
                                      fill="#b3b3b3"
                                      fontSize="32"
                                      fontWeight="500"
                                      fontFamily="Inter, Helvetica, Arial, sans-serif">
                                    &amp; {t.header.headline_third}
                                </text>

                            </svg>
                        </div>

                        <div className="hero-content grid-1-1">
                            <div className="flex-column justify-content-center">

                                <p>
                                    <strong>{t.header.intro.greeting}</strong><br/>
                                    {t.header.intro.text}
                                </p>

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
