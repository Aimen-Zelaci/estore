import React , {useState} from 'react'
import {storeProducts,dTemplate} from './data'

const ProductsContext = React.createContext ([{}, ()=> {}])

/*Copying original data from data.js, in order to keep the original data unmodified.
    Since it passed by reference here*/
let temp=[]
storeProducts.forEach(item=>{
    const copyItem = {...item};
    temp.push(copyItem);
})

const ProductsProvider = (props)=>{
    const [state, setState] = useState({
        products:temp,
        dTemplate:dTemplate,

        itemsInCart:[],       /*For the Cart page*/
        cartCounter:0,        /*How many items in the cart*/

    });
    return(
        <ProductsContext.Provider value = {[state, setState]}>
         {props.children}
        </ProductsContext.Provider>
        );

}

export {ProductsProvider, ProductsContext};
