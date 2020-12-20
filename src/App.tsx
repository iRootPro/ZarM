import React from 'react';
import HeaderBlock from "./components/HeaderBlock/HeaderBlock";
import ContentBlock from "./components/ContentBlock/ContentBlock";
import FooterBlock from "./components/FooterBlock/FooterBlock";
import Header from "./components/Header/Header";
import Paragraph from "./components/Paragraph/Paragraph";
import Card from "./components/Card/Card";

const App = () => {
    return (
        <>
            <HeaderBlock>
                <Header>Учить слова онлайн</Header>
                <Paragraph>Воспользуйтесь карточками для запоминания и пополнения активныйх словарных
                    запасов</Paragraph>
            </HeaderBlock>
            {wordsList.map(({eng, rus}, index) => <Card key={index} eng={eng} rus={rus}/>)}
            <ContentBlock
                title="Тренируй память!"
                description="Тебе будут даны карточки со словами, ты должен их выучить путем повторения."
            />
            <FooterBlock tel={"+79184681012"} email={"admin@armavir.ru"} copyright={"2020"}/>
        </>
    );
};

export default App;

export const wordsList = [
    {
        eng: 'between',
        rus: 'между'
    },
    {
        eng: 'high',
        rus: 'высокий'
    },
    {
        eng: 'really',
        rus: 'действительно'
    },
    {
        eng: 'something',
        rus: 'что-нибудь'
    },
    {
        eng: 'most',
        rus: 'большинство'
    },
    {
        eng: 'another',
        rus: 'другой'
    },
    {
        eng: 'much',
        rus: 'много'
    },
    {
        eng: 'family',
        rus: 'семья'
    },
    {
        eng: 'own',
        rus: 'личный'
    },
    {
        eng: 'out',
        rus: 'из/вне'
    },
    {
        eng: 'leave',
        rus: 'покидать'
    },
];

