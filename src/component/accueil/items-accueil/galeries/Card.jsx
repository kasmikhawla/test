

import React from 'react'
import './Card.scss'
import E from '../../../images/E.png'
import img1 from '../../../images/img1.png'

const  Card =({image})=> {
    console.log('hi khawla',image.id)
        return (
            <div className="card-container card-container-change">
                <img  src={image.image} />
                <div className="icon-galerie icon-galerie-change"><img src={E} /></div>
            </div>
        )
}
export default  Card