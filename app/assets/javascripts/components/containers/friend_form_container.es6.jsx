var FriendFormContainer = React.createClass({

 getInitialState() {
    return { friendInfo: {name: '', birthday: '', id: this.props.friendId }, formAction: 'create', success: '', errors: [] }
  },

  componentDidMount() {
    if(this.props.friendId) {
      var { friendId } = this.props;
      FriendApi.getFriendInfo(friendId)
        .success((response) => {
          this.setState({ friendInfo: response, formAction: 'update' });
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
    var { name, birthday, id } = this.state.friendInfo;
    var friend = { name, birthday, id };
    this.handleSave(friend);
  },

  handleSave(friend) {
    if(friend.id) {
      FriendApi.updateFriendInfo(friend)
        .then((response) => {
          this.setState({ friendInfo: response.friend, success:'successfully changed friend info', errors: [] })
        })
        .fail((response) => {
          var errors = JSON.parse(response.responseText)
          this.setState({ errors })
        })
    }
    else {
      FriendApi.createNewFriend(friend)
        .then((response) => {
          this.setState({ friendInfo: response, success: 'successfully created new friend', formAction: 'update', errors: [] })
        })
        .fail((response) => {
          var errors = JSON.parse(response.responseText)
          this.setState({ errors })
        })
    }
  },

  toFriendsIndex() {
    window.location.href = '/'
  },

  render () {
    return (
      <div>
        <FriendForm onSave={this.handleSave}
          friendId={this.props.friendId ? this.props.friendId : this.state.friendInfo.id }
          friendInfo={this.state.friendInfo}
          formAction={this.state.formAction}
          success={this.state.success}
          errors={this.state.errors}
          onChange={this.onChange}
          onSave={this.onSave}
          toFriendsIndex={this.toFriendsIndex}  />
      </div>
    );
  }
})

FriendFormContainer.propTypes = {
  friendId: React.PropTypes.number
};
