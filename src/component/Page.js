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
        this.firstRef = React.createRef();
        this.secondRef = React.createRef();
        this.thirdRef = React.createRef();
        this.fourthRef = React.createRef();


        this.state = {
            searchVal : ""
        }

        

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

        this.disableSearchSelect();

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

        this.disableSearchSelect();
    }

    updatesearBox = event => {
        this.setState({
            searchVal : event.target.value
        })

        this.disableSearchSelect();
    }

    searchItem = () => {
        let itemsToSearch = ["Round Chair", "Pan and Brush", "Wooden Chair", "Desk Chair"];
        let s = this.state.searchVal;
        let tempI = -1;
        for(let i = 0; i < itemsToSearch.length;i++)
            {
                if(itemsToSearch[i].indexOf(s) !== -1)
                    tempI = i;
            }

            if(tempI>-1){
                switch(tempI){
                    case 0:
                        // this.firstRef.current.style.zIndex = "2" ;
                        this.firstRef.current.style.boxShadow = "0px 0px 10px grey"
                        this.secondRef.current.style.boxShadow = "none"
                        this.thirdRef.current.style.boxShadow = "none"
                        this.fourthRef.current.style.boxShadow = "none"
                        //this.firstRef.current.focus();
                        
                        
                        break;
                    case 1:
                        this.firstRef.current.style.boxShadow = "none"
                        this.secondRef.current.style.boxShadow = "0px 0px 10px grey"
                        this.thirdRef.current.style.boxShadow = "none"
                        this.fourthRef.current.style.boxShadow = "none"
                        break;
                    case 2:
                        this.firstRef.current.style.boxShadow = "none"
                        this.secondRef.current.style.boxShadow = "none"
                        this.thirdRef.current.style.boxShadow = "0px 0px 10px grey"
                        this.fourthRef.current.style.boxShadow = "none"
                        break;
                    case 3:
                        this.firstRef.current.style.boxShadow = "none"
                        this.secondRef.current.style.boxShadow = "none"
                        this.thirdRef.current.style.boxShadow = "none"
                        this.fourthRef.current.style.boxShadow = "0px 0px 10px grey"
                        break;
                }
    

            
        this.setState ({
            searchVal: "",
            temp: tempI
        })

    }

    }

    disableSearchSelect = () => {
        this.firstRef.current.style.boxShadow = "none"
        this.secondRef.current.style.boxShadow = "none"
        this.thirdRef.current.style.boxShadow = "none"
        this.fourthRef.current.style.boxShadow = "none"
    }

    

    render(){
        const ItemList = [];

        for(let i=0;i<4;i++){
            //alert('this.firstRef'+i)
            let a,b,c,d;
            if(i==0){
                a = <Items id={1} ref={this.firstRef} updateMethod={this.updatePageList} name="Round Chair" price="$890" src={require('./../assets/product-image/001.jpg')}/>
                b = <Items id={2} ref={this.secondRef} updateMethod={this.updatePageList} name="Pan and Brush" price="$120" src={require('./../assets/product-image/002.jpg')}/>
                c = <Items id={3} ref={this.thirdRef} updateMethod={this.updatePageList} name="Wooden Chair" price="$350" src={require('./../assets/product-image/003.jpg')}/>
                d = <Items id={4} ref={this.fourthRef} updateMethod={this.updatePageList} name="Desk Chair" price="$450" src={require('./../assets/product-image/004.jpg')}/>
            }else{
                a = <Items id={1} updateMethod={this.updatePageList} name="Round Chair" price="$890" src={require('./../assets/product-image/001.jpg')}/>
                b = <Items id={2} updateMethod={this.updatePageList} name="Pan and Brush" price="$120" src={require('./../assets/product-image/002.jpg')}/>
                c = <Items id={3} updateMethod={this.updatePageList} name="Wooden Chair" price="$350" src={require('./../assets/product-image/003.jpg')}/>
                d = <Items id={4} updateMethod={this.updatePageList} name="Desk Chair" price="$450" src={require('./../assets/product-image/004.jpg')}/>

            }
            ItemList.push(a, b, c, d);
        }

        return(
            <div className="outside">
                <button className="cartEnableButton" onClick={() => {this.child.current.showCartList()
                this.disableSearchSelect();}}><img ref={this.imgRef} alt="Cart" src={require('./../assets/shopping-cart.svg')}/></button>
                <CartList ref={this.child} updateMe={this.updatePage}/>
               
                <div className="itemList">
                    <div className="searBox">
                       <b>PRODUCTS</b><input className="inSearchBox" placeholder="Enter Keyword" value={this.state.searchVal} onChange={this.updatesearBox} type="text"  /><button onClick={this.searchItem} className="searchButton"> Search </button>
                    </div>
                    
                    {ItemList}
                </div>
                <div className="cart">
                </div>
            </div>
        );
    }
}

export default Page;