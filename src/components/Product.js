import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Utility from './context/Utility'

const Product = (props)=> {
        const {img, title, id, price, inCart} = props.product;
        const {descProvider,addToCart} = Utility();
                    return(
                            <CardStyle className="col-9 col-md-6 col-lg-3 mx-auto py-3">
                                <div className="card rounded-top wraper text-lead">
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
                      </CardStyle>

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


/*STYLE*/
const CardStyle = styled.div`
.added-to-cart{
        position:absolute;
        bottom:0
        left:0 !important;
        margin:auto;
}
.wraper{
    transition: all .5s ease-in-out;
    line-weight:800 !important;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.wraper:hover{
    transform:scale(1.1);
}
.wraper .btn {
        position:absolute;
        bottom:0;
        right:0;
        margin:auto;
}
.wraper .btn::before {
  content: "";
  display: block;
  position: absolute;
  bottom: 3px;
  left: 0;
  height: 3px;
  width: 100%;
  background-color: #FFF5E4;
  transform-origin: right top;
  transform: scale(0, 1);
  transition: color 0.1s, transform 0.2s ease-out;
}
.wraper .btn:hover::before,
.wraper .btn:focus::before {
  transform-origin: left top;
  transform: scale(1, 1);
}
`
export default Product;
