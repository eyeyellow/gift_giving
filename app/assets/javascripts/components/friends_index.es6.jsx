class FriendsIndex extends React.Component {
  render () {
    return (
      <div>
        <ul>
          {this.props.friends.map(function(friend){
            return <li key={friend.id}><a href={`friends/${friend.id}`}>{friend.name}</a></li>
          })}
        </ul>
      </div>
    );
  }
}

FriendsIndex.propTypes = {
  friends: React.PropTypes.array
};
