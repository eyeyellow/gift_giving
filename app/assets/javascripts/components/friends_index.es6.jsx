class FriendsIndex extends React.Component {

  handleAdd() {
    window.location.href = '/friends/new'
  }

  render () {

    return (
      <div>
        <h1>Here is a list of friends:</h1>
        <table>
          <tbody>
          {this.props.friends.map(function(friend){
            return <tr key={friend.id}>
                    <td><a href={`friends/${friend.id}`}>{friend.name}</a></td>
                    <td>
                      <form method="get" action={`/friends/${friend.id}/edit`}>
                          <button type="submit">Edit</button>
                      </form>
                    </td>
                  </tr>
          })}
          </tbody>
        </table>
        <button onClick={this.handleAdd}>Add New Friend</button>
      </div>
    );
  }
}

FriendsIndex.propTypes = {
  friends: React.PropTypes.array
};
