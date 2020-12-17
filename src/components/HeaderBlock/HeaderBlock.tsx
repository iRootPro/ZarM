import React from 'react';
import style from './HeaderBlock.module.css'

const HeaderBlock = () => {
    return (
        <div>
            <h1 className={style.header}>Учите английские слова Online</h1>
            <p>Воспользуйтесь карточками</p>
        </div>
    );
};

export default HeaderBlock;
