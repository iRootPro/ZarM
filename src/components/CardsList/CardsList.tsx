import React from 'react';
import Card from "../Card/Card";
import {wordsList} from "../../App";
import style from "./CardsList.module.css"

const CardsList = () => {
    return (
        <div className={style.wrapper}>
            <span className={style.description}>
                Запоминайте слова с помощью карточек. Кликни по карточке для получения правильного ответа
            </span>
            <div className={style.cardLists}>
                {wordsList.map(({eng, rus}, index) => <Card key={index} eng={eng} rus={rus}/>)}
            </div>
        </div>

    );
};

export default CardsList;
