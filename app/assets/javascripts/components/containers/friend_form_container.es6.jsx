var FriendFormContainer = React.createClass({

 getInitialState() {
    return { friendInfo: {name: '', birthday: ''}, formAction: 'create', success: '', errors: [] }
  },

  componentDidMount() {
    if(this.props.friendId) {
      var friendId = this.props.friendId
      $.ajax({
        url: `/api/v1/friends/${friendId}`,
        type: 'GET',
        success: (response) => {
          this.setState({ friendInfo: response, formAction: 'update' })
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
    var name = this.state.friendInfo.name
    var birthday = this.state.friendInfo.birthday
    var friend = { name: name, birthday: birthday }
    this.handleSave(friend)
  },

  handleSave(friend) {
    var name = friend.name
    var birthday = friend.birthday
    var id = this.props.friendId
    var friendInfo = { name, birthday, id }
    if(id) {
      $.ajax({
        url: `/api/v1/friends/${id}`,
        type: 'PUT',
        data: { friendInfo: friendInfo },
        dataType: "json",
        success: (response) => {
          this.setState({ success:'successfully changed friend info', errors: [] })
        },
        error: (xhr) => {
          var errors = JSON.parse(xhr.responseText).errors
          this.setState({ errors })
        }
      });
    }
    else {
      $.ajax({
        url: '/api/v1/friends/',
        type: 'POST',
        data: { friendInfo: friendInfo },
        success: (friendInfo) => {
          this.setState({ friendInfo: friendInfo, success: 'successfully created new friend', formAction: 'update', errors: [] })
        },
        error: (xhr) => {
          var errors = JSON.parse(xhr.responseText).errors
          this.setState({ errors: errors })
        }
      });
    }
  },

  render () {
    return (
      <div>
        <FriendForm onSave={this.handleSave}
          friendId={this.props.friendId ? this.props.friendId : this.state.friendInfo.id}
          friendInfo={this.state.friendInfo}
          formAction={this.state.formAction}
          success={this.state.success}
          errors={this.state.errors}
          onChange={this.onChange}
          onSave={this.onSave}  />
      </div>
    );
  }
})

FriendFormContainer.propTypes = {
  friendId: React.PropTypes.number
};
