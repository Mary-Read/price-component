const React = require('react');

class Quantity extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    }
  }
  render() {
    return (
      //<h4>Quantity</h4>
      // drop down bar
        // numbers provided by shiping api
      <div>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
      </div>
    )
  }
}

export default Quantity;