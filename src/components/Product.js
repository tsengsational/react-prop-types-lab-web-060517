// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render(){
    return (
      <div>
        <p>{this.props.name} </p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propsName, componentName){
    let weight = props.weight
    if(!props.weight){
      return new Error('The `weight` prop validator does not validate the value as being required.')
    };
    if(typeof weight !== "number" ){
      return new Error('The `weight` prop validator is accepting types other than a number.')
    };
    if(!(weight > 80 && weight < 300)){
      return new Error('The `weight` prop validator does not check for the weight ranging between 80 and 300.')
    };
  }
}

export default Product;
