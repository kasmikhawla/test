import React ,{Component }from 'react'
import './items-boutique.scss'


 const  ItemsBoutique =({items})=> {
          console.log('hello khawla',items)
        return (
            <div className="item-product item-product-hover">
                <div className="img-product img-product-hover">
                    <img src={items.picture} />
                </div>
                <div className="details-product ">
                    <div className="product-title">Lame terrasse bois Pin Stylevester traité classe 4</div>
                    <div className="product-price">{items.price} ML</div>
                </div>
                <div>
                    
                </div>
                <div className="voir-details voir-detail-hover">VOIR DETAILS</div>
            </div>
        )
}

export default ItemsBoutique 


