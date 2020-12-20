import React from 'react';
import style from "./ContentBlocl.module.css";

const ContentBlock = ({title, description}: propsType) => {
    return (
        <div className={style.cover}>
            <div className={style.wrap}>
                {title && <h1 className={style.header}>{title}</h1>}
                {description && <p className={style.descr}>{description}</p>}
            </div>
        </div>
    );
};

export default ContentBlock;

//types

type propsType = {
    title?: string
    description?: string
}
