import React from 'react';
import s from './Card.module.scss';
import cl from 'classnames'
import {CheckSquareOutlined} from "@ant-design/icons";

class Card extends React.Component<any, any> {
    state: stateType = {
        done: false,
        isRemembered: false
    }

    render() {
        const {eng, rus} = this.props
        const {done, isRemembered} = this.state
        return (
            <div className={s.root}>
                <div onClick={this.handlerOnClick} className={cl(s.card, {[s.done]: done, [s.isRemembered]: isRemembered})}>
                    <div className={s.cardInner}>
                        <div className={s.cardFront}>
                            {eng}
                        </div>
                        <div className={s.cardBack}>
                            {rus}
                        </div>

                    </div>

                </div>
                <div className={s.checkIcon}>
                    <CheckSquareOutlined onClick={this.handleIsRememberedClick}/>
                </div>
            </div>

        );
    }

    handleIsRememberedClick = () => {
       this.setState((state: stateType) => {
           return {
               isRemembered: !state.isRemembered
           }
       })
    }

    private handlerOnClick = () => {
        this.setState(((state: stateType) => {
            return {
                done: !this.state.done
            }
        }))

    }
}


export default Card;

//type

type propsType = {
    eng: string
    rus: string
}

type stateType = {
    done: boolean
    isRemembered: boolean
}
