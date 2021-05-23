const React = require('react');

class Quantity extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false
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
          <div>Quantity</div>
          <button type="button" onClick={this.handleClick}>
            <div>
              <span>1</span>
            </div>
          </button>
        </div>
      )
    } else {
      return (

          //<h4>Quantity</h4>
      // drop down bar
        // numbers provided by shiping api
      // <div>
      //   <ul>
      //     <li>1</li>
      //     <li>2</li>
      //   </ul>
      // </div>
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
              <li>
                <a>
                  <div>
                    <div>2</div>
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