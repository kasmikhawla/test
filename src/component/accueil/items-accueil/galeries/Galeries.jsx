import React from 'react'
import './Galeries.scss'
import  Card  from '../galeries/Card'
import img11 from '../../../images/img11.png'
import img12 from '../../../images/img12.png'
import img13 from '../../../images/img13.png'
import img14 from '../../../images/img14.png'
import img15 from '../../../images/img15.png'
import plus from '../../../images/plus.png'



const Galeries =()=> {
    const images=[
        {
          "id": 1,
          "image": img11
        },
        {
          "id": 2,
          "image": img15
        },
        {
          "id": 3,
          "image":  img12
        },
        {
          "id": 4,
          "image": img13
        },
        {
          "id": 5,
          "image": img14
        },
    ]
        return (
            <div className="galeries-item">
            <div className="galeries-container">
                <div className="item-diff item-diff-change">
                    <div className="item-diff-container">
                    <div className="title title-change">Notice <br/>& Installation</div>
                    <p>Avant de commencer calculez la quantité de bois,de béton et de quincaillerie dont vous aurez besoin.</p>
                </div>
                <div className="item-bottom item-bottom-change">
                  <div className="savaoir-plus">EN SAVOIR PLUS</div>
                  <img src={plus}/>
                </div>
                </div>
                {images.map((image) => (
                 <Card key={image.id} image={image} />
                 ))}
            </div>
            </div>
        )
}
export default  Galeries