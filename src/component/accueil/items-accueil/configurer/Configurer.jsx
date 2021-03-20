import React, { Component } from 'react'
import E from '../../../images/E.png'
import config from '../../../images/config.png'
import plus from '../../../images/plus.png'

export default class Configurer extends Component {
    render() {
        return (
            <div className="item-container">
            <div className="items-bottom1 items-bottom-hover">
                <div className="icon"><img src={E}  /></div>
                <div className="icon2"><img src={config}  /></div>
                <div className="titleItem">
                    <div className="title">Configurez votre espace</div>
                    <div className="subtitle">Veniam voluptate cillum adipisicing deserunt.
                     Do sint in ea dolor qui non. Ex exercitation eu aliqua fugiat sint cillum tempor qui quis dolore dolor labore.
                     .</div>
                </div>
                <div className="iconplus"><img src={plus}  /></div>
            </div>
            </div>
        )
    }
}
