var AllGiftsContainer = React.createClass({
  render () {
    return (
      <div>
        <div>friendId: {this.props.friendId}</div>
      </div>
    );
  }
})

AllGiftsContainer.propTypes = {
  friendId: React.PropTypes.number
};
