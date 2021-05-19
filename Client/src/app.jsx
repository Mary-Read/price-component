const React = require('react');
const ReactDOM = require('react-dom');
import Reviews from './components/reviews.jsx';
import Quantity from './components/quantity.jsx';
import Colors from './components/colors.jsx';
import $ from 'jquery';
import {DivTagBody, DivTagPrice, DivTagReviews} from './components/styledComponents.jsx'


class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      price: ''
    },
    $.ajax({
      type: 'GET',
      url: 'http://localhost:2000/price/22',
      success: (data) => {
        this.setState({price: data.price});
      }
    })
  }



  render() {
    return (
      <DivTagBody>
        <DivTagPrice>${this.state.price}</DivTagPrice>
        <DivTagReviews>
          <Reviews />
        </DivTagReviews>

          {/* <Reviews /> */}
          {/* <p>Payment Options Here</p> */}
          {/* <PayOptions /> */}
          <p>Quanttity Tab Here</p>
          <Quantity />
          {/* <Quanttity /> */}
          <p>Color Picker Here</p>
          <Colors />
          {/* <Colors /> */}
          <p>Size Selector Here</p>
      </DivTagBody>
    )
  }
}
// let test = (test) => {
//   return true;
// }
ReactDOM.render(<App />, document.getElementById('price'));
