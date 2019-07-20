import React from 'react';
import Utility from './context/Utility'
import {Link} from 'react-router-dom'

const Description =()=>{
  const {dTemplate} = Utility();
  const {img,id,inCart,info,title} = dTemplate
  const {addToCart} = Utility();
           return (
                        <div className="row d-flex align-items-center justify-content-center mx-auto">
                             <div className="col-6">
                                <img className="img-fluid bg-white" alt={title} src={img}/>
                             </div>
                            <div className="col-6">
                                <p className="text-lead">{info}</p>
                                  {
                                     inCart? /*IF*/
                                     <div><button className="btn btn-danger added-to-cart" disabled={true}>Added to Cart</button>
                                            <Link to="/Cart" className="btn btn-success">Go to Cart</Link></div>
                                        :/*ELSE*/

                                    <button  className="btn btn-outline-success text-white bg-success" onClick={()=>addToCart(id)}>Add to cart</button>
                                  }
                            </div>
                        </div>
                        )
}
export default Description;
