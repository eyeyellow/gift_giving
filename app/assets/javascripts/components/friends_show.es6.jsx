class FriendsShow extends React.Component {
  render () {
    return (
      <div>
        <h1>Here are the details for {this.props.friend.name}</h1>
        <h3>Name: {this.props.friend.name}</h3>
        <h3>Birthday: {this.props.friend.birthday}</h3>
        <h3>Gifts:</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {this.props.gifts.map(function(gift){
              return (
                <tr key={gift.id}>
                  <td>{gift.name}</td>
                  <td>{gift.price}</td>
                  <td>{gift.link}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

FriendsShow.propTypes = {
  friend: React.PropTypes.object,
  gifts: React.PropTypes.array
};
