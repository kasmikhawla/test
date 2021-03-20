import React, { Component } from 'react'
import './Boutique.scss'
import {Link} from 'react-router-dom'
import back from '../images/back.png'
import ItemsBoutique from './items-boutique/ItemsBboutique'
import { connect } from "react-redux";
import { getData } from "../redux/actions/index";
import E from '../images/E.png'
import config from '../images/config.png'
import plus from '../images/plus.png'

 class Boutique extends Component {
    constructor(props) {
        super(props);
      }
      componentDidMount=()=> {
        this.props.getData()
        console.log('rrrr',this.props.getData())
        console.log('khawla',this.props.items)

      }
    render() {
        return (
            <div className="boutique-container">
                <div className="item-header">
                    <div className="item-details">
                    <h2>Nos Produits</h2>
                    <p>
                    <Link  to='/' style={{color: '#B7B7B7',fontSize:'12px',
                            textDecoration: 'none'}}>Accuiel  </Link>
                     <Link  to='/' style={{color: '#B7B7B7',fontSize:'12px',
                            textDecoration: 'none'}}>Boutique</Link>
                    </p>
                    </div>
                </div>
                <div className="items-bottom-boutique">
                    <div className="items-right-boutique ">
                    </div>
                    <div className='items-left'>
                    {this.props.items.map((el) => (
                    <ItemsBoutique key={el.id} items={el}/>
                    ))}
                    </div>
                </div>
                <div className="afficher-plus">
                    <div>AFFICHER PLUS</div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    console.log('hiii',state)
    return {
        items: state.items.slice(0,9)
    };
  }
  
  export default connect(
    mapStateToProps,
    { getData }
  )(Boutique);