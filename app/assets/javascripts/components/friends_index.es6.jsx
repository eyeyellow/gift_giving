class FriendsIndex extends React.Component {

  handleAdd() {
    window.location.href = '/friends/new'
  }

  render () {
    return (
      <div>
        <h1>Here is a list of friends:</h1>
        <ul>
          {this.props.friends.map(function(friend){
            return <li key={friend.id}><a href={`friends/${friend.id}`}>{friend.name}</a></li>
          })}
        </ul>
        <button onClick={this.handleAdd}>Add New Friend</button>
      </div>
    );
  }
}

FriendsIndex.propTypes = {
  friends: React.PropTypes.array
};
