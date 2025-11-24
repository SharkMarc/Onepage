
import React from 'react';

interface CardProps {
    title: string;
    content: string;
    link?: string;
    date?: string;
    place?: string;
    name: string;
}

export const Card= ({ title, content, name, link, date, place }:CardProps) => (
    <div className="card gap-8">
        {date && <div className={"info"}>{date}</div>}
        {place && <div className={"place"}>{place}</div>}
        <div className={"title"}>{title}</div>

        <h3>{name}</h3>
        <p>{content}</p>
        {link && <a href={link}>{link}</a>}
    </div>
);

