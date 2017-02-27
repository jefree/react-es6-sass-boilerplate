var React = require('react');

var ProductCreator = require('./product-creator');
var ProductList = require('./product-list');

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.state.products = [];
    this.createProduct = this.createProduct.bind(this);
  }

  render() {
    return (
      <div>
        <ProductCreator onCreateProduct={this.createProduct}/>
        <ProductList products={this.state.products}/>
      </div>
    );
  }

  createProduct (product) {
    console.log(product);
  }
}

module.exports = Main;
