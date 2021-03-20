import React, { Component } from 'react';
import './Accueil.scss'
import Items from '../accueil/items-accueil/items/Items';
import NosRealisation from './items-accueil/nos-realisation/NosRealisation'
import Galeries from './items-accueil/galeries/Galeries'
import Magasin from './items-accueil/magasin/Magasin'
import Configurer from './items-accueil/configurer/Configurer'

export default class Accueil extends Component {
    render() {
        return (
            <div>
                <Items />
                <div className="acc-container">
                     <Configurer/>
                     < NosRealisation />
                     <Galeries />
                    <Magasin />
                    </div>
            </div>
           
        )
    }
}
