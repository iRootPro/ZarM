import React, {Component} from 'react';
import HeaderBlock from "./components/HeaderBlock/HeaderBlock";
import ContentBlock from "./components/ContentBlock/ContentBlock";
import FooterBlock from "./components/FooterBlock/FooterBlock";
import Header from "./components/Header/Header";
import Paragraph from "./components/Paragraph/Paragraph";
import CardsList from "./components/CardsList/CardsList";
import {log} from "util";


class App extends Component<any, any> {
    state = {
        words: wordsList
    }

    handleDeleteItem(id: number) {
        this.setState(() => {
            return {
                ...this.state,
                words: this.state.words.filter(word => id !== word.id)
            }
        })
    }

    render() {
        const {words} = this.state
        return (
            <>
                <HeaderBlock>
                    <Header>Учить слова онлайн</Header>
                    <Paragraph>Воспользуйтесь карточками для запоминания и пополнения активныйх словарных
                        запасов</Paragraph>
                </HeaderBlock>
                <CardsList wordsList={words} onDeleteItem={(id: number) => this.handleDeleteItem(id)}/>
                <ContentBlock
                    title="Тренируй память!"
                    description="Тебе будут даны карточки со словами, ты должен их выучить путем повторения."
                />
                <FooterBlock tel={"+79184681012"} email={"admin@armavir.ru"} copyright={"2020"}/>
            </>
        )
    }
}

export default App;

export const wordsList: Array<wordsListType> = [
    {
        eng: 'between',
        rus: 'между',
        id: 1
    },
    {
        eng: 'high',
        rus: 'высокий',
        id: 2
    },
    {
        eng: 'really',
        rus: 'действительно',
        id: 3
    },
    {
        eng: 'something',
        rus: 'что-нибудь',
        id: 4
    },
    {
        eng: 'most',
        rus: 'большинство',
        id: 5
    },
    {
        eng: 'another',
        rus: 'другой',
        id: 6
    },
    {
        eng: 'much',
        rus: 'много',
        id: 7
    },
    {
        eng: 'family',
        rus: 'семья',
        id: 8
    },
    {
        eng: 'own',
        rus: 'личный',
        id: 9
    },
    {
        eng: 'out',
        rus: 'из/вне',
        id: 10
    },
    {
        eng: 'leave',
        rus: 'покидать',
        id: 11
    },
];

// types
export type wordsListType = {
    eng: string
    rus: string
    id: number
}
