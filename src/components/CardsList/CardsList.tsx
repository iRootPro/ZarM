import React from 'react';
import Card from "../Card/Card";
import {wordsListType} from "../../App";
import style from "./CardsList.module.css"

const CardsList = ({wordsList, onDeleteItem}: propsType) => {
    return (
        <div className={style.wrapper}>
            <span className={style.description}>
                Запоминайте слова с помощью карточек. Кликни по карточке для получения правильного ответа
            </span>
            <div className={style.cardLists}>
                {wordsList.map(({eng, rus, id}) =>
                    <Card
                        key={id}
                        eng={eng}
                        rus={rus}
                        onDelete={() => onDeleteItem(id)}
                    />)}
            </div>
        </div>

    );
};

export default CardsList;

//type
type propsType = {
    wordsList: Array<wordsListType>
    onDeleteItem: (id: number) => void
}
