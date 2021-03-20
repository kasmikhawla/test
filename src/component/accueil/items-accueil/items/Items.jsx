import React, { Component } from 'react';
import './Items.scss'
import accueil from '../../../images/accueil.png';
import img1 from '../../../images/img1.png';
import img2 from '../../../images/img2.png';
import img3 from '../../../images/img3.png';
import img4 from '../../../images/img4.png';
import img5 from '../../../images/img5.png'

export default class Items extends Component {
    render() {
        return (
                <div className="acc-fix">
                <div className="img-container">
                 <img src={accueil}  />
                </div>
                <div className="items-top ">
                    <div className="items-top-changes">
                        <img src={img1}  />
                        <div class="title-item">Lame Composite</div>
                    </div>
                    <div className="items-top-changes">
                        <img src={img2}  />
                        <div class="title-item">Lame en bois</div>
                    </div>
                    <div className="items-top-changes">
                        <img src={img3}  />
                        <div class="title-item">Panneau bois</div>
                    </div>
                    <div className="items-top-changes">
                        <img src={img4}  />
                        <div class="title-item">Grille rigide</div>
                    </div>
                    <div className="items-top-changes">
                        <img src={img5}  />
                        <div class="title-item">Gabion</div>
                    </div>
                    <div>
                        <p></p>
                    </div>
                </div>
               
                </div>
            
        )
    }
}
