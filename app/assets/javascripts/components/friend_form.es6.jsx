class FriendForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { friendInfo: {name: '', birthday: '', gifts: []} };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const friendInfo = this.state.friendInfo;
    friendInfo[field] = event.target.value;
    return this.setState({friendInfo: friendInfo});
  }

  onSave(event) {
    event.preventDefault();
    var friendInfo = this.state.friendInfo
    console.log(friendInfo)
  }

  render () {
    return (
      <div>
        <h1>Fill out the fields to add a new friend:</h1>
        <form>
            < TextInput
              name="name"
              label="name"
              type="name"
              value={this.state.friendInfo.name}
              onChange={this.onChange}/>

            < TextInput
              name="birthday"
              label="birthday"
              type="birthday"
              value={this.state.friendInfo.birthday}
              onChange={this.onChange}/>

            < input
              type="submit"
              onClick={this.onSave}/>

      </form>
      </div>
    );
  }
}

FriendForm.propTypes = {
  populated: React.PropTypes.bool,
  data: React.PropTypes.object
};
