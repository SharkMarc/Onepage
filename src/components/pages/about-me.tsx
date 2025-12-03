import React from "react";
import {Preva} from "../preva/preva";

export const AboutMe = ({}) => {

    return (

        <div className={'w-100'}>
            <div className={''}>
               <h2>Write smthing about me</h2>
                <ul>
                    <li>Fußßball</li>
                    <li>mit freunden unterwegs</li>
                    <li>Daddeln</li>
                    <li>Kochen</li>
                </ul>
            </div>
            <div className={'preva-grid'}>
                <Preva/>
            </div>
        </div>
    )
};
