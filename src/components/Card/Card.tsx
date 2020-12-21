import React from 'react';
import s from './Card.module.scss';

class Card extends React.Component<any, any> {
    state = {
        done: false
    }

    render() {
        const {eng, rus} = this.props
        const {done} = this.state
        const cardStyle = [s.card]
        if (done) {
            cardStyle.push(s.done)
        }
        return (
            <div onClick={this.handlerOnClick} className={cardStyle.join(' ')}>
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
        if (this.state.done) {
            this.setState({done: false})
        } else {
            this.setState({
                done: true
            })
        }

    }
}


export default Card;

//type

type propsType = {
    eng: string
    rus: string
}
