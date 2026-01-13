import React, {useState} from 'react';
import marc from '../assets/images/marc_white.png';
import phone from '../assets/images/phone.png';
import mail from '../assets/images/email.png';
import steam from '../assets/images/steam.png';
import discord from '../assets/images/discord.png';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';


export const Contact = ({}) => {
    const [showToast, setShowToast] = useState<boolean>(false);
    const [toasterText, setToasterText] = useState<string>('');

    const copy = async (url: string, name: string) => {
        await navigator.clipboard.writeText(url);
        let text = 'Copied ' + name + ' link!';
        setToasterText(text);
        setShowToast(true);

        setTimeout(() => setShowToast(false), 2000);
    };

    return (
        <div className={''}>
            <div id={"contact"}>
                <h2 className="display-desktop">Kontakt</h2>

                <div className="contact d-grid gap-8">
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
                        <img className={'icon'} src={linkedin} alt={'LinkedIn'}/>
                        <button
                            onClick={() => copy("https://www.linkedin.com/in/marc-spree-357950238/", 'LinkedIn')}
                            data-tooltip={showToast ? "Copied!" : "https://www.linkedin.com/in/marc-spree-357950238/"}
                            className="btn-no-style"
                        >
                            Copy LinkedIn
                        </button>
                    </p>
                    <p>
                        <img className={'icon'} src={steam} alt={'steam'}/>
                        <button
                            onClick={() => copy("https://steamcommunity.com/profiles/76561199516498788/", 'Steam')}
                            data-tooltip={showToast ? "Copied!" : "https://steamcommunity.com/profiles/76561199516498788/"}
                            className="btn-no-style">
                            Copy Steam
                        </button>
                    </p>
                    <p>
                        <img className={'icon'} src={discord} alt={'steam'}/>
                        <button
                            onClick={() => copy("https://discord.gg/aA4crfpZ", 'Discord')}
                            data-tooltip={showToast ? "Copied!" : "https://discord.gg/aA4crfpZ"}
                            className="btn-no-style"
                        >
                            Copy Discord
                        </button>
                    </p>

                    <p data-tooltip="https://github.com/SharkMarc/Onepage/tree/main">
                        <img className={'icon'} src={github} alt={'Github'}/>
                        <button
                            onClick={() => copy('https://github.com/SharkMarc/Onepage/tree/main', 'Github')}
                            data-tooltip={"https://github.com/SharkMarc/Onepage/tree/main"}
                            data-tooltip-title={'foobar'}
                            className="btn-no-style"
                        >
                            Copy Github
                        </button>
                    </p>
                </div>
                <div className={`toast ${showToast ? "show" : ""}`}>
                    {toasterText}
                </div>
            </div>

        </div>
    )
};