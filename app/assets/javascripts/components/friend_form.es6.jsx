var FriendForm = React.createClass({

  getInitialState() {
    return { friendInfo: {name: '', birthday: ''}, formAction: 'create', success: '', errors: [] }
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.friendId) {
      this.setState({ friendInfo: nextProps.friendInfo, formAction: nextProps.formAction, success: nextProps.success, errors: nextProps.errors })
    }
  },

  onChange(event) {
    const field = event.target.name;
    const friendInfo = this.state.friendInfo;
    friendInfo[field] = event.target.value;
    return this.setState({ friendInfo: friendInfo });
  },

  onSave() {
    var name = this.state.friendInfo.name
    var birthday = this.state.friendInfo.birthday
    var friend = { name: name, birthday: birthday }
    this.props.onSave(friend)
  },

  render () {
    var friendId = this.props.friendId
    return (
      <div>
        <h1>Fill out the fields to {this.state.formAction} a friend:</h1>

          <TextInput
            name="name"
            label="Name:"
            type="text"
            value={this.state.friendInfo.name}
            onChange={this.onChange}/>

          <TextInput
            name="birthday"
            label="Birthday:"
            type="text"
            value={this.state.friendInfo.birthday}
            onChange={this.onChange}/>

          <button onClick={this.onSave}>{this.state.formAction}</button>

        <br></br>
        <br></br>

        {this.state.success}
        <ul>
        {this.state.errors.map((error, index) => {
          return <li style={{color: "red"}} key={index}>{error}</li>
        })}
        </ul>
        <br></br>

          { friendId ? <AllGiftsContainer friendId={friendId} /> : 'Add a valid Name and Birthday to create a new friend' }

      </div>
    );
  }
})

FriendForm.propTypes = {
  friendId: React.PropTypes.number,
  friendInfo: React.PropTypes.object,
  onSave: React.PropTypes.func,
  action: React.PropTypes.string,
  success: React.PropTypes.string,
  errors: React.PropTypes.array
};

