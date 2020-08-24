import React, { Component } from 'react';
import Page from './Page';



class Items extends Component {

    addToCart(num){

        if(localStorage.getItem("ItemArr")==null){
            let ia = [num];
            localStorage.setItem("ItemArr", JSON.stringify(ia));
        }else{
            let ia = JSON.parse(localStorage.getItem("ItemArr"));
            ia.push(num);
            localStorage.setItem("ItemArr", JSON.stringify(ia));
        }

        this.props.updateMethod();

       
    }
    
    render(){

        let sid = this.props.id;
        return(
            <div className="item">
                <img alt="ItemImg" src={this.props.src}/>
                <p>{this.props.name}</p>
                <h5>{this.props.price}</h5>
               
                <button onClick={() => this.addToCart(sid)}>Add To Cart</button>
            </div>
        );
    }
}

export default Items;