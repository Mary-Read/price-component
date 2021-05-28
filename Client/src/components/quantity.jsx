const React = require('react');
import {DivTagBody, DivTagPrice, DivTagReviews, SpanTag, ButtonTag, ButtonLabel} from './styledComponents.jsx'

class Quantity extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      stock: '1'
    },
    this.handleClick = this.handleClick.bind(this);
  }

handleClick() {
  this.setState({clicked: !this.state.clicked});
  console.log(this.state.clicked)
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

        <div>
        <div>Quantity</div>
        <button type="button" onClick={this.handleClick}>
          <div>
            <ul>
              <li>
                <a>
                  <div>
                    <div>1</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </button>
      </div>
      )
    }
  }
}

export default Quantity;