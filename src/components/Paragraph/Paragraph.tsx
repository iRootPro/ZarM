import React from 'react';
import style from './Paragraph.module.css'

const Paragraph = ({children} : propsType) => {
    return (
        <>
           <p className={style.p}>{children}</p>
        </>
    );
};

export default Paragraph;

//types
type propsType = {
    children: string
}
