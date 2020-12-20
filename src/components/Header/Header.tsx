import React from 'react';
import style from './Header.module.css'

const Header = ({children}: propsType) => {
    return (
        <>
           <h1 className={style.h1}>{children}</h1>
        </>
    );
};

export default Header;

type propsType = {
    children: string
}
