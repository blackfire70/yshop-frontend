import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'axios';
import Category from './components/Category';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
    <div className="header col-md-12 col-lg-12 col-sm-12">
      <h1 id="title" style={{textAlign: "center"}}>
          OnlyYannie
      </h1>
      <p id="shop-label" style={{textAlign: "center"}}>Shop</p>

      </div>
      <div className="d-flex wrapper" id="app">
          <div className="flex-content" id="sidebar-wrapper">
              <div className="sidebar-heading">Categories</div>
              <div className="list-group list-group-flush">
                <Category/>
              </div>
            </div>
            <Product />
      </div>
    </div>
  );
}

export default App;
