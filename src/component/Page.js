import React, { Component } from 'react';
import Items from './Items';
import './style/page.css';
import CartList from './CartList';



class Page extends Component {
    constructor(){
        super()

        localStorage.removeItem("ItemArr");


        localStorage.setItem("NameI1", "Round Chair");
        localStorage.setItem("NameI2", "Pan and Brush");
        localStorage.setItem("NameI3", "Wooden Chair");
        localStorage.setItem("NameI4", "Desk Chair");

        localStorage.setItem("PriceI1", 890);
        localStorage.setItem("PriceI2", 120);
        localStorage.setItem("PriceI3", 350);
        localStorage.setItem("PriceI4", 450);

        localStorage.setItem("SrcI1", './../assets/product-image/001.jpg');
        localStorage.setItem("SrcI2", './../assets/product-image/002.jpg');
        localStorage.setItem("SrcI3", './../assets/product-image/003.jpg');
        localStorage.setItem("SrcI4", './../assets/product-image/004.jpg'); 


        this.child = React.createRef();
        this.imgRef = React.createRef();

    }

    updatePageList = () => {
        if(localStorage.getItem("ItemArr")==null){
            this.imgRef.current.src = require('./../assets/shopping-cart.svg');
        }else{
            
            let ia = JSON.parse(localStorage.getItem("ItemArr"));
            if(ia.length==0){
                this.imgRef.current.src = require('./../assets/shopping-cart.svg');
            }else if(ia.length>0){
                this.imgRef.current.src = require('./../assets/filled-cart.svg');
                this.imgRef.current.style.width = "40px"
            }
            
        }

        this.child.current.updateList();

    }

    showCartList = () => {
        
    }

    updatePage = () => {
        if(localStorage.getItem("ItemArr")==null){
            this.imgRef.current.src = require('./../assets/shopping-cart.svg');
        }else{
            
            let ia = JSON.parse(localStorage.getItem("ItemArr"));
            if(ia.length==0){
                this.imgRef.current.src = require('./../assets/shopping-cart.svg');
            }else if(ia.length>0){
                this.imgRef.current.src = require('./../assets/filled-cart.svg');
                this.imgRef.current.style.width = "40px"
            }
            
        }
    }

    render(){
        const ItemList = [];

        for(let i=0;i<4;i++){
            let a = <Items id={1} updateMethod={this.updatePageList} name="Round Chair" price="$890" src={require('./../assets/product-image/001.jpg')}/>
            let b = <Items id={2} updateMethod={this.updatePageList} name="Pan and Brush" price="$120" src={require('./../assets/product-image/002.jpg')}/>
            let c = <Items id={3} updateMethod={this.updatePageList} name="Wooden Chair" price="$350" src={require('./../assets/product-image/003.jpg')}/>
            let d = <Items id={4} updateMethod={this.updatePageList} name="Desk Chair" price="$450" src={require('./../assets/product-image/004.jpg')}/>
            ItemList.push(a, b, c, d);
        }

        return(
            <div className="outside">
                <button className="cartEnableButton" onClick={() => this.child.current.showCartList()}><img ref={this.imgRef} alt="Cart" src={require('./../assets/shopping-cart.svg')}/></button>
                <CartList ref={this.child} updateMe={this.updatePage}/>
               
                <div className="itemList">
                    <h3>PRODUCTS</h3>
                    {ItemList}
                </div>
                <div className="cart">
                </div>
            </div>
        );
    }
}

export default Page;