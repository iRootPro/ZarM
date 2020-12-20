import React, {Component} from 'react';
import s from './Card.module.scss';

class Card extends React.Component<any, any> {
    render() {
        const {eng, rus} = this.props
        return (
            <div onClick={this.handlerOnClick} className={s.card}>
                <div className={s.cardInner}>
                    <div className={s.cardFront}>
                        {eng}
                    </div>
                    <div className={s.cardBack}>
                        {rus}
                    </div>
                </div>

            </div>
        );
    }

    private handlerOnClick = () => {
        console.log('На русском это:', this.props.rus)
    }
}


export default Card;

//type

type propsType = {
    eng: string
    rus: string
}
