import React from 'react'
import E from '../../../images/E.png'
import magasin from '../../../images/magasin.png'
import './Magasin.scss'
import magasin1 from '../../../images/magasin1.png'
import plus from '../../../images/plus.png'

const Magasin =()=> {
        return (
            <div className="magasin-container magasin-container-hover">
                <div className="item-magasin-title">Notre magasin</div>
                  <div className="magasin-right magasin-right-change ">
                      <img src={magasin}  />
                      <div className="icon-change icon-when-change"><img src={E} /></div>
                 </div>
                     <div className="magasin-left magasin-left-change">
                        <img className="image" src={magasin1} />
                        <div className="magasin-bottom"> 
                        <p>Do sint eu irure nisi mollit reprehenderit cupidatat consequat 
                            Ex non do do exercitation fugiat proident exercitation sunt.
                            aliquip excepteur in ut nisi laborum.</p>
                        <div className='savoirplus savoirplus-change'>
                            <div className="savaoir-plus">EN SAVOIR PLUS</div>
                            <div className="icon-magasin-change"><img src={plus}/></div>
                        </div>
                        </div>
                 </div>
                  
        </div>
        )
}
export default  Magasin
