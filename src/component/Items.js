import React, { Component } from 'react';
import Page from './Page';



class Items extends Component{

    addToCart = (num) => {

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

    focusFirstChild = () => {
        alert('hey');
        this.firstRef.current.focus();
    }
    
    

    render(){
        return(
            <div ref={this.props.innerRef} className="item">
                <img alt="ItemImg" src={this.props.src}/>
                <p>{this.props.name}</p>
                <h5>{this.props.price}</h5>
               
                <button onClick={() => this.addToCart(this.props.id)}>Add To Cart</button>
            </div>
        );
    }
    
}


export default React.forwardRef((props, ref) => <Items 
  innerRef={ref} {...props}
/>);