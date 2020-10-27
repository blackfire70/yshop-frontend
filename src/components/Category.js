import React, { Component } from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000'
})

class Category extends Component {

    state = {
        categories: []
    }

    constructor () {
        super();
        api.get('api/v1/product-categories/').then( res => {
            this.setState({ categories: res.data })
        })
    }

    render() {
        return (
            <div>
            { 
                this.state.categories.map( category =>
                <a key={category.name} href="#" id ="categories" className="list-group-item list-group-item-action">
                {category.name}
                </a>
                )
            }
            </div>
        );
    }
}

export default Category;