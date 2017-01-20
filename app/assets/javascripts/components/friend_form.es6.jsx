var FriendForm = React.createClass({

  getInitialState() {
    return { friendInfo: {name: '', birthday: '', id: this.props.friendId}, action: 'create', messages: {friend: '', gift: ''} }
  },

  componentDidMount() {
    if(this.props.friendId) {
      var friendId = this.props.friendId
      $.ajax({
        url: `/api/v1/friends/${friendId}`,
        type: 'GET',
        success: (response) => {
          this.setState({ friendInfo: response, action: 'update' })
        }
      })
    }
  },

  onChange(event) {
    const field = event.target.name;
    const friendInfo = this.state.friendInfo;
    friendInfo[field] = event.target.value;
    return this.setState({ friendInfo: friendInfo });
  },

  onSave() {
    var friendInfo = this.state.friendInfo
    var friendId = friendInfo.id
    if(friendId) {
      $.ajax({
        url: `/api/v1/friends/${friendId}`,
        type: 'PUT',
        data: { friendInfo: friendInfo },
        success: (friend) => {
          this.setState({ messages: { friend: 'successfully changed friend info' } })
        }
      });
    }
    else {
      $.ajax({
        url: '/api/v1/friends/',
        type: 'POST',
        data: { friendInfo: friendInfo },
        success: (friendInfo) => {
          console.log(friendInfo)
          this.setState({ friendInfo: friendInfo, messages: { friend: 'successfully created new friend' }, action: 'update' })
        }
      });
    }
  },

  render () {
    var friendId = this.state.friendInfo.id
    return (
      <div>
        <h1>Fill out the fields to {this.state.action} a friend:</h1>

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

          <button onClick={this.onSave}>{this.state.action}</button>

        <br></br>
        <br></br>
        {this.state.messages.friend}
        <br></br>

          { friendId ? <AllGifts friendId={friendId} /> : 'Add a valid Name and Birthday to create a new friend' }

      </div>
    );
  }
})

FriendForm.propTypes = {
  friendId: React.PropTypes.number
};
