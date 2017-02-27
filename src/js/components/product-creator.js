var React = require('react');

const CLEAN_STATE = {
  name: '',
  description: '',
  value: ''
};

class ProductCreator extends React.Component {
  constructor(props) {
    super(props);

    this.state = CLEAN_STATE;
    this.createProduct = this.createProduct.bind(this);

    this.onNameChange = this.onNameChange.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
  }

  render() {
    return (
      <div> 
        <input value={this.state.name} placeholder="name" onChange={this.onNameChange}/>
        <input value={this.state.description} placeholder="description" onChange={this.onDescriptionChange}/>
        <input value={this.state.value} placeholder="value" onChange={this.onValueChange}/>

        <button onClick={this.createProduct}> Create </button>
      </div>
    );
  }

  createProduct() {
    this.props.onCreateProduct(this.state);
    this.setState(CLEAN_STATE);
  }

  onNameChange(e) {
    this.setState({name: e.target.value});
  }

  onDescriptionChange(e) {
    this.setState({description: e.target.value});
  }

  onValueChange(e) {
    this.setState({value: e.target.value});
  }
}

module.exports = ProductCreator;
