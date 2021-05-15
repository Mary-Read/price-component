const React = require('react');
const ReactDOM = require('react-dom');
import Reviews from './components/reviews.jsx';
import Quantity from './components/quantity.jsx';
import Colors from './components/colors.jsx';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      price: 15.99
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.price}</h1>
          <p>reviews here</p>
          <Reviews />
          {/* <Reviews /> */}
          <p>Payment Options Here</p>
          {/* <PayOptions /> */}
          <p>Quanttity Tab Here</p>
          <Quantity />
          {/* <Quanttity /> */}
          <p>Color Picker Here</p>
          <Colors />
          {/* <Colors /> */}
          <p>Size Selector Here</p>
      </div>
    )
  }
}
// let test = (test) => {
//   return true;
// }
ReactDOM.render(<App />, document.getElementById('price'));
