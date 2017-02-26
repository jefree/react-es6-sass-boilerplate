var React = require('react');

class ProductCreator extends React.Component {
  constructor(props) {
    super(props);

    this.onCreateProduct = props.onCreateProduct;
  }

  render() {
    return (
      <div> 
        <h1> Product Creator </h1>
        <button onClick={this.onCreateProduct}> Create </button>
      </div>
    );
  }
}

module.exports = ProductCreator;
