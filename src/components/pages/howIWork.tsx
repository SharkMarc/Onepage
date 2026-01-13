import React, {useState} from "react";
import arrowDown from '../assets/images/arrow-down.png';
import { useTranslation } from "../../hooks/useTranslation";

interface workItem {
    title: string;
    content: string;
}
interface HowIWorkProps {
    t: any;
}

export const HowIWork = ({ t }: HowIWorkProps) => {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section], // toggle this section
        }));
    };

    if (!t?.howIWork?.items) return null;
    const workItems: Array<{ key: string } & workItem> = Object.entries(t.howIWork.items).map(
        ([key, value]) => {
            const item = value as workItem;
            return {
                key,
                title: item.title,
                content: item.content
            };
        }
    );


    return (
        <div>
            <div className='align-item-start grid-1-1 gap-8'>
                {workItems.map((item) => (
                    <div
                        key={item.key}
                        className={`card cursor-pointer ${openSections[item.key] ? 'opened-card' : ''}`}
                        onClick={() => toggleSection(item.key)}
                    >
                        <div className="title d-flex justify-content-center">
                            {item.title}
                            <img
                                alt='collapse carrot'
                                className={`img-responsive caret ${openSections[item.key] ? "rotated" : ""}`}
                                src={arrowDown}
                            />
                        </div>
                        <p className={`collapsible-content ${openSections[item.key] ? 'open' : ''}`}>
                            {item.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
