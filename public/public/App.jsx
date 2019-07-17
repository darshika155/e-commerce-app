import React, { Component } from 'react';
import {BrowserRouter as Router,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import ShopSingle from './ShopSingle';

class App extends Component {
  constructor(){
    super();
    this.state = {
      products : [],
      front_image : ''
    };
  }
  
  componentDidMount() {
    fetch('http://localhost:5000/api/products')
            .then(res => {
                console.log(res);
                return res.json()
             })
            .then(findResponse => { 
                 console.log(findResponse); 
                this.setState({ products: findResponse.products , 
                                front_image : findResponse.front_image })
             });
  }
  
render() {
    return (
    <div>
    <div class="site-wrap">
      <div class="site-navbar bg-white py-2">
        <div class="search-wrap">
          <div class="container">
            <a href="#" class="search-close js-search-close"><span class="icon-close2"></span></a>
            <form action="#" method="post">
              <input type="text" class="form-control" placeholder="Search keyword and hit enter..."></input>
            </form>  
          </div>
      </div>

      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <div class="logo">
            <div class="site-logo">
              <a href="index.html" class="js-logo-clone">GashiQoton</a>
            </div>
          </div>
          <div class="main-nav d-none d-lg-block">
            <nav class="site-navigation text-right text-md-center" role="navigation">
              <ul class="site-menu js-clone-nav d-none d-lg-block">
                <li class="has-children ">
                  <a href="index.html">Home</a>
                  <ul class="dropdown">
                    <li><a href="#">Menu One</a></li>
                    <li><a href="#">Menu Two</a></li>
                    <li><a href="#">Menu Three</a></li>
                    <li class="has-children">
                      <a href="#">Sub Menu</a>
                      <ul class="dropdown">
                        <li><a href="#">Menu One</a></li>
                        <li><a href="#">Menu Two</a></li>
                        <li><a href="#">Menu Three</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                
                <li class="active"><a href="shop.html">Shop</a></li>
                <li><a href="#">Catalogue</a></li>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div class="icons">
            <a href="#" class="icons-btn d-inline-block js-search-open"><span class="icon-search"></span></a>
            <a href="#" class="icons-btn d-inline-block"><span class="icon-heart-o"></span></a>
            <a href="cart.html" class="icons-btn d-inline-block bag">
              <span class="icon-shopping-bag"></span>
              <span class="number">2</span>
            </a>
            <a href="#" class="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span class="icon-menu"></span></a>
          </div>
        </div>
      </div>
    </div>
      <div class="site-blocks-cover" data-aos="fade">
        <div class="container">
          <div class="row">
            <div class="col-md-6 ml-auto order-md-2 align-self-start">
              <div class="site-block-cover-content">
                <h2 class="sub-title">#New Summer Collection 2019</h2>
                <h1>Arrivals Sales</h1>
                <p><a href="#" class="btn btn-black rounded-0">Shop Now</a></p>
              </div>
            </div>
            <div class="col-md-6 order-1 align-self-end">
              <img src={this.state.front_image} alt="Image" class="img-fluid"></img>
            </div>
          </div>
        </div>
      </div>
    
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="title-section mb-5 col-12">
            <h2 class="text-uppercase">Popular Products</h2>
          </div>
        </div>
        
        <div class="row">
            {
              this.state.products.map((product,key) =>
                   <div style={{ width: '346.667px'}}>
                      <Link to={{pathname:'/shop-single',state:{name:product}}} class="product-item md-height bg-gray d-block">
                          <img src={product.imageName} alt="Image" class="img-fluid"></img>
                      </Link>
                      {product.price}
                  </div>           
               )
            }
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-3">
      <div class="block-5 mb-5">
        <h3 class="footer-heading mb-4">Contact Info</h3>
        <ul class="list-unstyled">
          <li class="address">PAC Main Gate, G-423, Main Govindpuram Rd, Near SBI ATM, Block I, G-Block, Govindpuram,
            Ghaziabad, Uttar Pradesh 201002</li>
          <li class="phone"><a href="tel://8375887376">8375887376</a></li>
          <li class="email">gashiqoton@gmail.com</li>
        </ul>
      </div>

      <div class="block-7">
        <form action="#" method="post">
          <label for="email_subscribe" class="footer-heading">Subscribe</label>
          <div class="form-group">
            <input type="text" class="form-control py-4" id="email_subscribe" placeholder="Email"></input>
            <input type="submit" class="btn btn-sm btn-primary" value="Send"></input>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="row pt-5 mt-5 text-center">
    <div class="col-md-12">
      <p>
        Copyright &copy;
        <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made
        with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank"
          class="text-primary">Colorlib</a>
      </p>
    </div>
  </div>
  </div>
    );
  }
}

export default App;
