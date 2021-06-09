const React = require('react');
const ReactDOM = require('react-dom');
import Reviews from './components/reviews.jsx';
import Quantity from './components/quantity.jsx';
import Colors from './components/colors.jsx';
import $ from 'jquery';
import {DivTagBody, DivTagPrice, DivTagReviews, SpanTag, ButtonTag} from './components/styledComponents.jsx'


class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      price: '',
      item: '1'
    }

     this.item = window.location.pathname.slice(window.location.pathname.length -1);
    if(this.item === '/') {
      this.item = '1';
    }
    $.ajax({
      type: 'GET',
      url: `http://localhost:2000/price/${this.item}`,
      success: (item) => {
        // $.ajax({
        //   type: 'GET',
        //   url: `http://localhost:2000/price/${data}`,
        //   success: (item) => {
            this.setState({
              price: item.price
              //item: item
            });
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
          <SpanTag>
            <Quantity />
          </SpanTag>
          {/* <Quanttity /> */}
          {/* <p>Color Picker Here</p> */}
          {/* <Colors /> */}
          {/* <Colors /> */}
          {/* <p>Size Selector Here</p> */}
      </DivTagBody>
    )
  }
}
// let test = (test) => {
//   return true;
// }
ReactDOM.render(<App />, document.getElementById('price'));
