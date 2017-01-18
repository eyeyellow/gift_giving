class FriendsShow extends React.Component {
  render () {
    return (
      <div>
        <div>{this.props.friend.name}</div>
      </div>
    );
  }
}

FriendsShow.propTypes = {
  friend: React.PropTypes.object
};
