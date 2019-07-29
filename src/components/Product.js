import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Utility from './context/Utility'
import './CSS/Product.css'

const Product = (props)=> {
  const {img, title, id, price, inCart} = props.product;
  const {descProvider,addToCart} = Utility();
              return(
                      <div className="col-9 col-md-6 col-lg-3 mx-auto py-3">
                          <div className="card rounded-top wraper text-lead ">
                                <Link to="/description" onClick={()=>descProvider(id)}>
                                    <img className="card-img-top bg-white" src={img} alt={title}/>
                                </Link>
                                <div className="card-body">
                                    <div className="card-title row">
                                        <h5 className="col-7">
                                        {title}
                                        </h5>
                                        <h5 className="col-5">
                                        {price}$
                                        </h5>
                                    </div>
                                    <p className="card-text text-center">Lorem ipsum dolor sit amet,  consectetur adipisicing elit.</p>
                                    {
                                      inCart? <div><button className="btn btn-danger added-to-cart" disabled={true}>Added to Cart</button>
                                      <Link to="/Cart" className="btn btn-success">Go to Cart</Link></div>
                                      :<button  className="btn btn-outline-success text-white bg-success" onClick={()=>addToCart(id)}><i className="fa fa-shopping-cart"></i></button>

                                    }
                          </div>
                    </div>
                </div>

                        )
                  }

/*To avoid any unexpected changes to our data*/
Product.propTypes = {
    product:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool

  }).isRequired
}

export default Product;
