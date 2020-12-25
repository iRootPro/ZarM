import React from 'react';
import Card from "../Card/Card";
import {wordsListType} from "../../App";
import style from "./CardsList.module.css"

class CardsList extends React.Component<propsType, any> {
    state: stateType = {
        value: '',
        label: ''
    }
    render() {
        const {wordsList, onDeleteItem}: propsType = this.props
        return (
            <div className={style.wrapper}>
            <span className={style.description}>
                Запоминайте слова с помощью карточек. Кликни по карточке для получения правильного ответа
            </span>
                <span>{this.state.label}</span>
                <form onSubmit={e => this.handleFormSubmit(e)}>
                    <input onChange={(e) => this.handleChangeInput(e)} type="text" placeholder="Введите новое слово" value={this.state.value}/>
                    <button>Добавить</button>
                </form>
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
    }

    private handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({value: e.target.value})
    }

    private handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        this.setState({label: this.state.value, value: ''})
    }
}

export default CardsList;

//type
type propsType = {
    wordsList: Array<wordsListType>
    onDeleteItem: (id: number) => void
}

type stateType = {
    value: string
    label: string
}
