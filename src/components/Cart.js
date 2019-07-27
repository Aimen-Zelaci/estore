import React from 'react';
import Utility from './context/Utility'

const Cart = ()=>{
      const imgStyle={
          width:'10rem',
      }
      const {cartCounter,itemsInCart,addToCart,removeFromCart,deleteFromCart} = Utility();

                        return(
                        <div>
                        {
                          cartCounter?/*Check whether the cart is empty*/
                          <table className="table table-striped">
                            <thead>
                              <tr>{/*First Row*/}
                                <th scope="col">#</th>
                                <th scope="col">Product</th>
                                <th scope="col">Details</th>
                                <th scope="col">Quantity</th>
                              </tr>
                            </thead>
                            <tbody>
                            {
                              /*Generate other rows, depending on the items currently in cart*/

                              itemsInCart.map((item,index)=>{
                              return(
                                <tr>
                                  <th scope="row">{index+1}</th>
                                  <td><img src={item.img} alt={item.title} style={imgStyle}/></td>
                                  <td>{item.title}</td>
                                 {<td>
                                     <button type="button" className="btn btn-success mr-1 py-0 px-2" onClick={()=>addToCart(item.id)}>+</button>
                                           {item.count}
                                     <button type="button" className="btn btn-success ml-1 my-2 py-0 px-2" onClick={()=>removeFromCart(item.id)} disabled={item.count===1?true:false}>-</button>
                                 </td>
                               }
                               <td><button className="btn btn-danger" onClick={()=>{deleteFromCart(item.id)}}>Delete</button></td>
                                </tr>
                                    )
                            })

                            }

                            </tbody>
                          </table>
                          :/*IF CART IS EMPTY*/
                          <h2 className="text-center">Cart is empty</h2>}</div>)
            }

export default Cart;
