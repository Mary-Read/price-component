const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      price: ''
    }
  }

  render() {
    return (
      <div>
        <h1>Price</h1>
      </div>
    );
  }
}
let test = (test) => {
  return true;
}
//ReactDOM.render(<App />, document.getElementById('price'));
module.exports = App;