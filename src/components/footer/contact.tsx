import React, {useState} from 'react';
import marc from '../assets/images/marc_white.png';
import phone from '../assets/images/phone.png';
import mail from '../assets/images/email.png';
import steam from '../assets/images/steam.png';
import discord from '../assets/images/discord.png';


export const Contact = ({}) => {
    const [showToast, setShowToast] = useState(false);

    const copy = async () => {
        await navigator.clipboard.writeText("https://discord.gg/aA4crfpZ");
        setShowToast(true);

        setTimeout(() => setShowToast(false), 2000);
    };

    return (
        <div className={''}>
            <div id={"contact"}>
                <h2 className="display-desktop">Kontakt</h2>

                    <div className="contact d-grid gap-8">
                        <div className="rounded-image-border">
                            <div className="rounded-image" style={{borderRadius: "1rem"}}>
                                <img className={'img-marc img-responsive'} src={marc}
                                     alt={'Marc'}/>
                            </div>
                        </div>
                        <p>
                            <img className={'icon'} src={phone} alt={'phone'}/>
                            <a data-testid="phone-contact" data-id="phone-contact" href="phone:+49 15155540232"
                               className="btn-no-style">
                                +49 15155540232
                            </a>
                        </p>

                        <p>
                            <img className={'icon'} src={mail} alt={'mail'}/>
                            <a data-testid="mail-contact" data-id="mail-contact" href="mailto:marcspree.steam@gmx.de"
                               className="btn-no-style">
                                Mail
                            </a>
                        </p>
                        <p>
                            <img className={'icon'} src={steam} alt={'steam'}/>
                            <a data-testid="mail-contact" data-id="mail-contact" href="mailto:marcspree.steam@gmx.de"
                               className="btn-no-style">
                                Steam
                            </a>
                        </p>
                        <p>
                            <img className={'icon'} src={discord} alt={'steam'}/>
                            <button
                                onClick={copy}
                                data-tooltip={showToast ? "Copied!" : "https://discord.gg/aA4crfpZ"}
                                className="btn-no-style"
                            >
                                Copy Discord link
                            </button>
                        </p>
                    </div>
                    <div className={`toast ${showToast ? "show" : ""}`}>
                        Copied!
                    </div>
            </div>
        </div>
    )
};