import React, { Component } from 'react';
import CartList from './CartList';

class CartItem extends Component {
    constructor(props){
        super(props);

    }

    removeItem(listIndex){
        let ia = JSON.parse(localStorage.getItem("ItemArr"));
        ia.splice(listIndex,1);       
        localStorage.setItem("ItemArr", JSON.stringify(ia));
        this.props.updatePList();
    }

    render(){
        return(
            <div className="cartItem">
                <span>
                    <img src={this.props.src}/>
                     <b className="itemNameList">{this.props.name}</b> <b className="itemPriceList">${this.props.price}</b>
                    <button onClick={() => this.removeItem(this.props.listIndex)}>&times;</button>
                </span>
            </div>
        );
    }
}

export default CartItem;