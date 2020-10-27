import '../App.css';
import React, { Component } from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000'
})

class Category extends Component {

    state = {
        products: []
    }

    constructor () {
        super();
        api.get('api/v1/products/').then( res => {
            this.setState({ products: res.data })
        })
    }

    render() {
        return (
          <div className="products-container col-md-10 col-lg-10 col-sm-10">
            { 
                this.state.products.map( product =>
                  <div key={product.slug} className="product-card col-md-4 col-lg-4">
                      <a href="#">
                          <div className="product">
                              <img className="product-image" src={product.product_image_url} />
                              <div style={{color: "rgb(135, 149, 161)"}}> {product.name}</div>
                              <div style={{color: "rgb(61, 72, 82)"}}>$ {product.price} </div>                         
                          </div>
                      </a>
                  </div>
                )
            }
            </div>
        );
    }
}

export default Category;