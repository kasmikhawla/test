import React ,{ useState }from 'react';
import './Header.scss';
import Location from '../../images/Location.png'
import search from '../../images/search.png'
import config from'../../images/config.png'
import {Link} from 'react-router-dom'

 const Header =()=> {
    const [isShown, setIsShown] = useState(false);
      
        return (
            <div className="headerfix">
            <header className="header">
                <div className="container">
                    <div className="top">
                        <div className="logo">
                            <div className="Mon">Mon</div> <div className="next">Extérieur.fr</div>
                        </div>
                    </div>
                    <div className="search">
                        <img src={search}  />
                        <input className="title" placeholder="Recherche" /> 
                    </div>
                    <div className="position">
                        <img src={Location}  />
                        <div
                         className="title">Notre magasin</div>
                    </div>
                    <div className="configuration">
                        <img src={config}  />
                        <div className="title-change">Configurateur</div> 
                    </div>
                    <div>
                    </div>
                </div>
            </header>
            <div className="headerBottom">
                <div className="menu-v"></div>
                <div className="menu menuhover" >Accueil</div>
                {isShown ?
                    <div  className="button-second-list">
                    Boutique
                </div> :
                 <div className="menu-dropdown"  onMouseEnter={() => setIsShown(true)}
                 onMouseLeave={() => setIsShown(false)}>
                 Boutique
             </div>
                }
                <div className="menu menuhover" >Nos réalisation</div>
                <div className="menu">Contactez-nous</div>
                <div className="menu-v"></div>
                </div>
                {isShown && (
                    <div className="header-dropdown" onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>
                        <div></div>
                        <div></div>
                    <div className="dropdown-menu">
                        <div></div>
                        <div className="title-menu">Lame Composite</div>
                        <div className="title-menu">Lame en bois</div>
                        <div className="title-menu" style={{backgroundColor:'#653D36'}}>Panneau bois</div>
                        <div className="title-menu">Grille rigide</div>
                        <div className="title-menu">Gabion</div>
                        <div></div>
                            <Link  to='/boutique' className="link" style={{backgroundColor:'#7DAF3F',color: 'white',
                            textDecoration: 'none',paddingTop:'-50p'}}>Boutique</Link>
                        <div className="backgroud-menu-dro"></div>
                    </div>
                    </div>
                )}
            </div>
            

        )
    }


export default Header