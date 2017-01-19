var FriendForm = React.createClass({

  getInitialState() {
    return { friendInfo: {name: '', birthday: '', gifts: []} }
  },

  componentDidMount() {
    if(this.props.populated) {
      var friendId = this.props.friendId
      $.ajax({
        url: `/api/v1/friends/${friendId}`,
        type: 'GET',
        success: (response) => {
          this.setState({ friendInfo: response })
        }
      })
    }
  },

  onChange(event) {
    const field = event.target.name;
    const friendInfo = this.state.friendInfo;
    friendInfo[field] = event.target.value;
    return this.setState({friendInfo: friendInfo});
  },

  onSave(event) {
    event.preventDefault();
    var friendInfo = this.state.friendInfo
    var friendId = this.props.friendId
    $.ajax({
      url: `/api/v1/friends/${friendId}`,
      type: 'PUT',
      data: { friendInfo: friendInfo },
      success: (response) => {
        window.location.href = `../../friends/${friendId}`
      }
    });
  },

  render () {
    return (
      <div>
        <h1>Fill out the fields to add a new friend:</h1>
        <form>
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

          <input
            type="submit"
            onClick={this.onSave}/>

        </form>
        <br></br>
        <br></br>
        <h2>Gifts</h2>

          <AllGifts friendId={this.props.friendId} populated={this.props.populated} />

          <AddGift />

      </div>
    );
  }
})

FriendForm.propTypes = {
  populated: React.PropTypes.bool,
  friendId: React.PropTypes.number
};
