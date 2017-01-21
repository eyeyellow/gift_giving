var AddGift = React.createClass({

  getInitialState() {
    return { newGiftData: { name: '', price: '', link: '', friendId: this.props.friendId }, showForm: this.props.display }
  },

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.toggleForm()
    }
  },

  toggleForm() {
    this.setState({ showForm: !this.state.showForm })
  },

  handleAdd() {
    var name = this.state.newGiftData.name
    var price = this.state.newGiftData.price
    var link = this.state.newGiftData.link
    var friend_id = this.state.newGiftData.friendId
    $.ajax({
      url: '../../api/v1/gifts/',
      type: 'POST',
      data: { gift: { name: name, price: price, link: link, friend_id: friend_id }, errors: [] },
      success: (gift) => {
        this.props.handleNewGift(gift);
        this.setState({ newGiftData: { name: '', price: '', link: '', friendId: this.props.friendId }, showForm: false, errors: [] })
        this.toggleForm()
      },
      error: (xhr) => {
        var errors = JSON.parse(xhr.responseText).errors
        this.setState({ errors: errors })
      }
    });
  },

  onChange(event) {
    const field = event.target.name;
    const newGiftData = this.state.newGiftData;
    newGiftData[field] = event.target.value;
    return this.setState({newGiftData: newGiftData});
  },

  render () {
    var addGiftForm = (
      <div>
        <TextInput
          label="Name"
          name="name"
          type="text"
          value={this.state.newGiftData.name}
          onChange={this.onChange}/>

        <TextInput
          label="Price"
          name="price"
          type="text"
          value={this.state.newGiftData.price.toString()}
          onChange={this.onChange}/>

        <TextInput
          label="Link"
          name="link"
          type="text"
          value={this.state.newGiftData.link}
          onChange={this.onChange}/>


        <button onClick={this.handleAdd}>Add Gift</button>

      </div>
    )
    return (
      <div>
        <br></br>
        {this.state.showForm ? addGiftForm : <button onClick={this.toggleForm}>Add Gift</button> }
        <ul>
        {this.state.errors.map((error, index) => {
          return <li style={{color: "red"}} key={index}>{error}</li>
        })}
        </ul>
      </div>
    );
  }
})

AddGift.propTypes = {
  friendId: React.PropTypes.number,
  handleNewGift: React.PropTypes.func,
  display: React.PropTypes.bool
};
