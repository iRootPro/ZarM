import React from 'react';
import HeaderBlock from "./components/HeaderBlock/HeaderBlock";

const App = () => {
    return (
        <>
            <HeaderBlock
                title="Учите слова онлайн"
                description="Воспользуйтесь карточками для запоминания и пополнения активныйх словарных
                    запасов"/>
            <HeaderBlock
                title="Второй блок"
                hideBackground
            />
        </>
    );
};

export default App;
