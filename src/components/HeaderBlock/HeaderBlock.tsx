import React from 'react';
import style from './HeaderBlock.module.css'
import ReactLogo from './img/logo.png'

const HeaderBlock = ({title, description, hideBackground = false}: propsType) => {
    const backStyle = hideBackground ? {backgroundImage: "none"} : {}
    return (
        <div className={style.cover} style={backStyle}>
            <div className={style.wrap}>
                {title && <h1 className={style.header}>{title}</h1>}
                {description && <p className={style.descr}>{description}</p>}
                <img src={ReactLogo} alt="React logo"/>
            </div>
        </div>
    );
};

export default HeaderBlock;


// types

type propsType = {
    title?: string
    description?: string
    hideBackground?: boolean
}
