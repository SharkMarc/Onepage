import React from 'react';


export const Contact = ({}) => (
    <div className={''}>
        <div id={"aboutMe"} className="contact"><h2 className="mg-b-display-m">Kontakt</h2>
            <div className="contact-information mg-b-xl">
                <div className="rounded-image-border">
                    <div className="rounded-image" style={{borderRadius: "1rem"}}>
                        <img className={'img-marc img-responsive'} src={'../assets/images/marc_white.png'}
                             alt={'Marc'}/>
                    </div>
                </div>
                <div className="contact-text d-grid gap-4">
                    <p className="text-bold">Marc Spree</p>
                    <a data-testid="phone-contact" data-id="phone-contact" href="phone:+49 15155540232"
                       className="btn-no-style">
                        +49 40 1111111111111
                    </a>
                    <a data-testid="mail-contact" data-id="mail-contact" href="mailto:marcspree.steam@gmx.de"
                       className="btn-no-style">
                        marcspree.steam@gmx.de
                    </a>
                </div>
            </div>
        </div>


    </div>
);