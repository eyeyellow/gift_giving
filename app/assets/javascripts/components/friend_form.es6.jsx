var FriendForm = React.createClass({

  render () {
    var { friendId } = this.props
    return (
      <div>
        <h1>Fill out the fields to {this.props.formAction} a friend:</h1>

          <TextInput
            name="name"
            label="Name:"
            type="text"
            value={this.props.friendInfo.name}
            onChange={this.props.onChange}/>

          <TextInput
            name="birthday"
            label="Birthday:"
            type="text"
            value={this.props.friendInfo.birthday}
            onChange={this.props.onChange}/>

          <button onClick={this.props.onSave}>{this.props.formAction}</button>

        <br></br>
        <br></br>

        {this.props.success}
        <ul>
        {this.props.errors.map((error, index) => {
          return <li style={{color: "red"}} key={index}>{error}</li>
        })}
        </ul>
        <br></br>

          { friendId ? <AllGiftsContainer friendId={friendId} /> : 'Add a valid Name and Birthday to create a new friend' }

        <button onClick={this.props.toFriendsIndex}>Back</button>
      </div>
    );
  }
})

FriendForm.propTypes = {
  friendId: React.PropTypes.number,
  friendInfo: React.PropTypes.object,
  onSave: React.PropTypes.func,
  onChange: React.PropTypes.func,
  success: React.PropTypes.string,
  errors: React.PropTypes.array,
  formAction: React.PropTypes.string,
  toFriendsIndex: React.PropTypes.func
};

