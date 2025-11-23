import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import {Card} from './components/card';
import {Header} from "./components/header/header";
import {Badge} from "./components/badge";
import {Carousel} from "./components/carousell";
import {Preva} from "./components/preva/preva";
import {Contact} from "./components/footer/contact";

const badgesClientSide = ["React",
    "Javascript",
    "TypeScript",
    "Twig",
    "JEST",
    "(S)CSS",
    "Bootstrap",
    "SASS",
    "Node.js",
    "Responsive Design",
    "SEO",
    "Barrierefreiheit",
    "React Server Side Rendering",
    'Javascript',
    'Typescript'
];
const tools = [
    "npm", "webpack", "git", "github"
]
const badgesServerSide = [
    "PHP",
    "Symfony",
    "MariaDB",
    "Infrastruktur",
    "DevOps",
    "Docker / Docker Compose",
    "Bitbucket",
    "Jira",
];

const badgesUiUx = [
    "Figma"
];

const cards = [
    {
        name: 'Javascript',
        title: 'Javascript',
        content: "content und so text",
        link: ""
    },
    {
        name: 'foo',
        title: 'foo',
        content: "content und so text",
        link: ""
    },
];

const App = () => (
    <>
        <Header/>

        <main>
            <div className={'app flex-wrap'}>
                <Carousel/>
                <div className={'flex-wrap gap-8'}>
                    {cards.map((card, i) => (
                        <Card key={"badge-" + i} content={card.content} name={card.name} title={card.title}
                              link={card.link}/>
                    ))}
                </div>
                <div className={'flex-column gap-8 w-100'}>
                    <h3>Client-side
                        {/*<hr/>*/}
                    </h3>

                    <div className={'badge-list'}>
                        {badgesClientSide.map((badge, i) => (
                            <Badge key={"badge-" + i} content={badge}/>
                        ))}
                    </div>
                </div>
                <div className={'flex-column gap-8 w-100'}>
                    <h3>Server-side</h3>
                    <div className={'badge-list'}>
                        {badgesServerSide.map((badge, i) => (
                            <Badge key={"badge-" + i} content={badge}/>
                        ))}
                    </div>
                </div>
                <div className={'flex-column gap-8 w-100'}>
                    <h3>Ui / Ux</h3>
                    <div className={'badge-list'}>
                        {badgesUiUx.map((badge, i) => (
                            <Badge key={"badge-" + i} content={badge}/>
                        ))}
                    </div>
                </div>
                <div>
                    Sprachen
                    Deutsch
                    Muttersprache
                    Englisch
                    verhandlungssicher
                </div>
                <div className={'preva-grid'}>
                    <Preva/>
                    <Contact/>
                </div>
            </div>
        </main>
    </>
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App/>);
