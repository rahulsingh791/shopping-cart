import React, { Component } from 'react';
import CartItem from './CartItem';


class CartList extends Component {
    constructor(){
        super()
        this.currentDiv = React.createRef();

        this.state = {
            list : 0
        }
    }

    updateList = () => {
        let ia = JSON.parse(localStorage.getItem("ItemArr"));
        let tValue = 0;


        for(let i=0;i<ia.length;i++){
            tValue = parseInt(localStorage.getItem("PriceI"+ia[i])) + tValue;
        }

        this.props.updateMe();

        this.setState({
            list : tValue
        })
        
        
    }

    hideCurrentDiv = () => {
        this.currentDiv.current.style.right = "-30%";
    }

    showCartList = () => {
        this.currentDiv.current.style.right = "1%";
    }



    render(){
        let iaL;
        let ia=[];
        if(localStorage.getItem("ItemArr")!=null){
             ia = JSON.parse(localStorage.getItem("ItemArr"));
             if(ia.length==0){
                iaL = <p> Cart Empty </p>
             }
        }else{
            iaL = <p> Cart Empty </p>
        }

        if(ia.length > 0){
            iaL = [];

            for(let i=0; i < ia.length;i++){
                let id = ia[i];
                let name = localStorage.getItem("NameI"+id);
                let price = localStorage.getItem("PriceI"+id);
                let src = require('./../assets/product-image/00'+id+'.jpg')

                let temp = <CartItem pid={this.id} updatePList={this.updateList} src={src} name={name} price={price} listIndex={i} />
                iaL.push(temp);
            }
        }
        
        

        return(
            
                
                <div className="cartList" ref={this.currentDiv}>
                    <div onClick={this.hideCurrentDiv} className="buttonArrange">
                        <button className="preCartListButton">&times;</button>
                    </div>
                    <div class="innerList">
                        {iaL}
                    </div>
                    <div className="totalDiv">
                        <div className="totalLine"></div>
                        <b>Total : ${this.state.list}</b>
                    </div>
                </div>
            
        )
    }
}

export default CartList;