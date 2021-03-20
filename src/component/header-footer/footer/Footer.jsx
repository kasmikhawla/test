import React, { Component } from 'react';
import './Footer.scss';
import time from'../../images/time.png'

const Footer =()=> {
        return (
            <footer >
                <div className="footer">
               <div className='footerLogo'>
                    <div className="logoMon">Mon</div> <div className="logonext">Extérieur.fr</div>
                </div>
                   <div className='footer-container'>
                       <div className="supertitle">Lien Utiles</div>
                   <div>
                       <div>Configurateur</div>
                       <div>Notre magasin</div>
                       <div>Notice et installation</div>
                       <div>Livraison Transport</div>
                   </div>
                   </div>
                   <div className='footer-container'>
                       <div className="supertitle">Nous contacter</div>
                   <div>
                       <div className="subtitre">Adress:</div>
                       <div>3 rue de champ de verger Allones, Pays de la Loire, France</div>
                       <div className="subtitre">Téléphone:</div>
                       <div>+ 33 2 43 57 00 87</div>
                   </div>
                   </div>
                   <div className=''>
                       <div className="supertitle">Horaire</div>
                   <div>
                       <div className="subtitre">Lundi a vendredi</div>
                       <div className='times'><img src={time}  />7:30 - 12:00</div>
                       <div className='times'><img src={time}  />13:30 - 18:00</div>
                       <div className="subtitre">Samedi</div>
                       <div>(Fermé les samedis de janvier et février)</div>
                       <div className='times'> <img src={time}  />09:00 - 12:00</div>
                   </div>
                   </div>
               <div></div>
               <div></div>
               </div>
            </footer>
        )
}


export default Footer