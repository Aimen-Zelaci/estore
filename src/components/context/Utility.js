import   {useContext} from 'react';
import {ProductsContext} from './Context'

const  Utility = ()=>{

    const [state, setState] = useContext(ProductsContext);
    let {cartCounter, itemsInCart, products} = state;

    /*Gets the id of a selected product. id is defined in the data.js file in context folder*/
    const getId = (id)=> {
            const product = products.find((item)=> item.id===id);
            return product;
                         }

    /*To provide the selected product for the description page after clicking the product*/
    const descProvider = (id)=>{

            setState(state=>({...state, dTemplate:getId(id)}))
                                }


    const addToCart = (id)=>{
            const selectedProduct = getId(id);

            selectedProduct.inCart=true;
            selectedProduct.count+=1;

            if(selectedProduct.count>1)/*To not duplicate an item in the itemsIncart array*/{
                setState(state=>({...state,cartCounter:cartCounter+1}));
            }else{
                setState(state=>({...state,cartCounter:cartCounter+1,itemsInCart:[...itemsInCart,selectedProduct] }));
            }
                            }

    /*This is used for the quantity minus button on the cart page*/
    const removeFromCart = (id)=>{
                     const selectedProduct=getId(id);

                     selectedProduct.inCart=false;
                     selectedProduct.count -=1;

                     if(!selectedProduct.count){
                        setState(state=>({...state,cartCounter:cartCounter-1,itemsInCart:itemsInCart.filter((item)=>item.id !== id)}));
                    }else{
                        setState(state=>({...state,cartCounter:cartCounter-1}));
                    }
                                }

    //To delete the item entirely from the cart and not reduce its quantity (On the cart page)
    const deleteFromCart = (id)=>{
                    const selectedProduct = getId(id)
                    let tempCounter = cartCounter

                    tempCounter-=selectedProduct.count
                    selectedProduct.count=0;
                    selectedProduct.inCart = false

                    setState(state=>({...state,cartCounter:tempCounter,itemsInCart:itemsInCart.filter((item)=>item.id !== id)}))
                                }

    return {
        addToCart,
        removeFromCart,
        descProvider,
        deleteFromCart,
        ...state
        }

}

export default Utility;
