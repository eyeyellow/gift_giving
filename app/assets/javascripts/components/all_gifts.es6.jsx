var AllGifts = React.createClass({

  getInitialState() {
    return { gifts: [] }
  },

  render () {
    return(
      <div>All Gifts</div>
    )
  }
})

AllGifts.propTypes = {
  gifts: React.PropTypes.array
};
