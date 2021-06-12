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
      item: '1',
      stock: '',
      store: Math.floor(Math.random() * 99)
    }

     this.item = window.location.pathname.slice(window.location.pathname.length -1);
    if(this.item === '/') {
      this.item = '1';
    }
    $.ajax({
      type: 'GET',
      url: `http://ec2-18-191-151-219.us-east-2.compute.amazonaws.com:2000/${this.item}`,
      success: (item) => {
            this.setState({
              price: item.price
            });
          }
        })

        $.ajax({
          type: 'GET',
          url: `https://ec2-18-116-227-34.us-east-2.compute.amazonaws.com:4000/shipping/${this.state.store}/${this.item}`,
          success: (item) => {
                this.setState({
                  stock: item.stock
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
            <Quantity stock={this.state.stock}/>
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
