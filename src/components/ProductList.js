import React  from 'react';
import Product from './Product';
import Utility from './context/Utility'

const ProductList = ()=>{
    const {products} = Utility();

                    return(
                            <div className="row mx-auto">
                            {products.map(product=>{
                                return <Product product={product} key={product.id} />
                            })}
                            </div>
                        )




}

export default ProductList;
