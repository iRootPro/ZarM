import React from 'react';
import style from './FooterBlock.module.css'

const FooterBlock = ({tel, email, copyright}: propsType) => {
    return (
        <div className={style.footer}>
            {tel} / {email} / {copyright}
        </div>
    );
};

export default FooterBlock;

//type
type propsType = {
    tel: string,
    email: string,
    copyright: string
}
