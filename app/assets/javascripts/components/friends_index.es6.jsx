class FriendsIndex extends React.Component {
  render () {
    return (
      <div>
        <h1>Here is a list of friends:</h1>
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
