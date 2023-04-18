import { Component } from "react";


 class Description extends Component {
  constructor(props) {
  super(props);
  }
  render() {
    const styles={ 
      border:'5px solid orange',
      padding: '25px',

    } 
    return (
      <div style={styles}>{this.props.text}</div>
    );
  }
}

export default Description
