import React from 'react';
import style from './HeaderBlock.module.css'
import ReactLogo from './img/logo.png'

const HeaderBlock = () => {
    return (
        <div className={style.cover}>
            <div className={style.wrap}>
                <h1 className={style.header}>Учите слова онлайн</h1>
                <p className={style.descr}>Воспользуйтесь карточками для запоминания и пополнения активныйх словарных
                    запасов</p>
                <img src={ReactLogo} alt="React logo"/>
            </div>
        </div>
    );
};

export default HeaderBlock;
