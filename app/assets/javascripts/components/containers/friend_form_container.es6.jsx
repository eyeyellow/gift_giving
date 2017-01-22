var FriendFormContainer = React.createClass({

getInitialState() {
    return { friendInfo: {name: '', birthday: '', id: this.props.friendId}, action: 'create', success: '', errors: [] }
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

  handleSave(friend) {
    var name = friend.name
    var birthday = friend.birthday
    var id = this.props.friendId
    var friendInfo = { name: name, birthday: birthday, id: id }
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
          this.setState({ errors: errors })
        }
      });
    }
    else {
      $.ajax({
        url: '/api/v1/friends/',
        type: 'POST',
        data: { friendInfo: friendInfo },
        success: (friendInfo) => {
          this.setState({ friendInfo: friendInfo, success: 'successfully created new friend', action: 'update', errors: [] })
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
          action={this.state.action}
          success={this.state.success}
          errors={this.state.errors}  />
      </div>
    );
  }
})

FriendFormContainer.propTypes = {
  friendId: React.PropTypes.number
};
