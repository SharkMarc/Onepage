
import React from 'react';

interface CardProps {
    title: string;
    content: {
        experience: string[],
        text: string[];
    };
    link?: string;
    date?: string;
    place?: string;
    name?: string;
    details?: string[];
}

export const Card= ({ title, content, name, link, date, place, details }:CardProps) => (
    <div className="card gap-8">
        {date && <div className={"info"}>{date}</div>}
        {place && <div className={"place"}>{place}</div>}
        <div className={"title"}>{title}</div>

        <h3>{name}</h3>
        <p>{content.experience}</p>
        <p>{content.text}</p>
        {details && details.map((d, i) => (
            <li key={i}>{d}</li>
        ))}
        {link && <a href={link}>{link}</a>}
    </div>
);

