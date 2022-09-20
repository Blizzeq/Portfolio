import React, {useContext} from 'react';
import {ThemeContext} from "../App";
import Github from "../assets/Github-icon.png";
import Linkedin from "../assets/Linkedin-icon.png";

function Footer(props) {

    const {themeMode} = useContext(ThemeContext);

    return (
        <div className={`Footer-${themeMode}`}>
            <div className={'Footer-Content'}>
                <div className={'Content'}>
                    <p>© 2022 Jakub Krasuski</p>
                </div>
                <div className={'Content'}>
                    <a href={'https://github.com/Blizzeq'}>
                        <img src={Github} alt={'Github'}/>
                    </a>
                </div>
                <div className={'Content'}>
                    <a href={'https://www.linkedin.com/in/jakub-krasuski-6aa818211/'}>
                        <img src={Linkedin} alt={'Linkedin'}/>
                    </a>
                </div>
                <div className={'Content'}>
                    Contact
                </div>
            </div>
        </div>
    );
}

export default Footer;
