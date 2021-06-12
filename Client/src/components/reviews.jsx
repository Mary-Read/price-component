const React = require('react');
import DivTagReviews from './styledComponents.jsx'
class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    this.stars = this.stars.bind(this);
  }
  stars() {
    let x = Math.floor(Math.random() * 5)
    for(let i = 0; i < x; i++) {
      return (
        ⭐️
      )
    }
  }

  render() {
    return (
      <div>
        {/* temp place holders */}
        {/* ⭐️⭐️⭐️⭐️⭐️ */}
        {this.stars()}
        <span>233</span>
      </div>
    )
  }
}

export default Reviews;