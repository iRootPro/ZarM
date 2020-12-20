import React from 'react';
import style from './HeaderBlock.module.css'
import ReactLogo from './img/logo.png'

const HeaderBlock = ({children,hideBackground = false}: propsType) => {
    const backStyle = hideBackground ? {backgroundImage: "none"} : {}
    return (
        <div className={style.cover} style={backStyle}>
            <div className={style.wrap}>
                {children}
                <img src={ReactLogo} alt="React logo"/>
            </div>
        </div>
    );
};

export default HeaderBlock;


// types

type propsType = {
    hideBackground?: boolean
    children: any
}
