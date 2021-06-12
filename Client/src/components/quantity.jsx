const React = require('react');
import {DivTagBody, DivTagPrice, DivTagReviews, SpanTag, ButtonTag, ButtonLabel, ButtonTab} from './styledComponents.jsx'

class Quantity extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      stock: '1'
    },
    this.handleClick = this.handleClick.bind(this),
    this.stock = this.stock.bind(this)
  }


  handleClick() {
    this.setState({clicked: !this.state.clicked});
    console.log(this.state.clicked)
  }

  stock() {
    let stockAmount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
      stockAmount.map((stock) => (
        <li>
          <a>
            <div>
              <div key={Math.floor(Math.random() * (999 - 1 + 1) + 1)}>{stock}</div>
            </div>
          </a>
        </li>
      ))
    )
  }

  render() {

    if(!this.state.clicked) {
      return (
        <div>
          <div>
            <div>
              <ButtonLabel>Quantity</ButtonLabel>
              <ButtonTag type="button" onClick={this.handleClick}>
                <div>
                  <div>
                  <span>{this.state.stock}</span>
                  </div>
                </div>
              </ButtonTag>
            </div>
          </div>
        </div>
      )
    } else {
      return (

        <ButtonTab>
        <ul type="button" onClick={this.handleClick}>
          <div>
            <ul>
                  {this.stock()}
            </ul>
          </div>
        </ul>
      </ButtonTab>
      )
    }
  }
}

export default Quantity;