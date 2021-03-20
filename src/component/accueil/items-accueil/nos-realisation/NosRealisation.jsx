
import React from 'react';
import './NoRealisation.scss';
import rea from '../../../images/rea.png'
import aller from '../../../images/aller.png'
import retour from '../../../images/retour.png'
import E from '../../../images/E.png'

 const NosRealisation =()=> {
        return (
            <div className="realisation-container container-hover">
                <div></div>
               <div className="item-left">
               <div className="title">Nos Réalisations</div>
                <div className="realisation-left realisation-left-change">
                   <div>
                       <h5>Panneau bois</h5>
                       <p>Do sint eu irure nisi mollit reprehenderit cupidatat consequat 
                           veniam voluptate laboris fugiat ea.
                            Ex non do do exercitation fugiat proident exercitation sunt.
                            Cupidatat duis ipsum aute cillum nostrud reprehenderit 
                            aliquip excepteur in ut nisi laborum.</p>
                       <div className='soivoirplus savoirplus-change'>
                           <img src={retour} />
                           <div className="circle-container">
                           <span class="dot"></span>
                            <span class="dot dot-color"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                           </div>
                           <img src={aller} />
                       </div>
                   </div>
               </div>
               </div>
               <div className="realisation-right realisation-right-change ">
                    <img src={rea}  />
                    <div className="icon-change icon-when-change"><img src={E} /></div>
               </div>

            </div>
        )
}
export default NosRealisation