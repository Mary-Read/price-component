const React = require('react');
import {DivTagBody, DivTagPrice, DivTagReviews, SpanTag, ButtonTag, ButtonLabel, ButtonTab} from './styledComponents.jsx'

class Quantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
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
                  <span>{this.props.stock}</span>
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
              <li>
                <a>
                  <div>
                    <div>1</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </ButtonTab>
      )
    }
  }
}

export default Quantity;