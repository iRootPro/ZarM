import React from 'react';
import HeaderBlock from "./components/HeaderBlock/HeaderBlock";
import ContentBlock from "./components/ContentBlock/ContentBlock";
import FooterBlock from "./components/FooterBlock/FooterBlock";

const App = () => {
    return (
        <>
            <HeaderBlock
                title="Учите слова онлайн"
                description="Воспользуйтесь карточками для запоминания и пополнения активныйх словарных
                    запасов"/>
            <ContentBlock
                title="Тренируй память!"
                description="Тебе будут даны карточки со словами, ты должен их выучить путем повторения."
            />
            <FooterBlock tel={"+79184681012"} email={"admin@armavir.ru"} copyright={"2020"}/>
        </>
    );
};

export default App;
