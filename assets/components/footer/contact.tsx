import React from 'react';


export const Contact = ({}) => (
    <div className={'header-content'}>
        <div className="contact"><h2 className="mg-b-display-m">Kontakt</h2>
            <div className="contact-information mg-b-xl">
                <div className="rounded-image-border">
                    <div className="rounded-profile-image" style={{borderRadius:"1rem"}}>
                        <picture>
                            {/*<source*/}
                            {/*    srcSet="https://img-cdn.freelancermap.de/116x0/filters:format(webp)//press/Alexander-Becker-pr-2.jpg"*/}
                            {/*    type="image/webp"/>*/}
                            {/*<source*/}
                            {/*    srcSet="https://img-cdn.freelancermap.de/116x0/filters:format(png)}//press/Alexander-Becker-pr-2.jpg"*/}
                            {/*    type="image/png"/>*/}
                            <img src="example.com"
                                 alt="Alexander Becker, Presse" width="116" height="116" className="img-responsive "
                                 loading="lazy" fetchPriority="auto"/></picture>
                    </div>
                </div>
                <div className="contact-text d-grid gap-4"><p className="text-bold">Marc Spree</p><a
                    data-testid="phone-contact" data-id="phone-contact" href="phone:+49 40 111111111111"
                    className="btn style">+49 40 1111111111111</a><a
                    data-testid="mail-contact" data-id="mail-contact" href="mailto:marcspree.steam@gmx.de"
                    className="fm-btn fm-btn-no-style text-thin text ">marcspree.steam@gmx.de</a></div>
            </div>
        </div>


    </div>
);