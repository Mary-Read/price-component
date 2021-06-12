const React = require('react');
import DivTagReviews from './styledComponents.jsx'
class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    },
    this.stars = this.stars.bind(this);
  }

  stars() {
    let x = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    let starAmount = [];
    for(let i = 0; i < x; i++) {
      starAmount.push('⭐️');
    }
    return (
      starAmount.map((star) => (
        <th key={Math.floor(Math.random() * (999 - 1 + 1) + 1)}>{star}</th>
      ))
    )
  }

  render() {
    return (
      <div>
        {/* temp place holders */}
        {/* ⭐️⭐️⭐️⭐️⭐️ */}
        <table>
          <tr>{this.stars()}  {Math.floor(Math.random() * (3215 - 8 + 8) + 8)}</tr>
        </table>

      </div>
    )
  }
}

export default Reviews;