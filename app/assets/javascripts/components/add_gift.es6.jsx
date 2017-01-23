var AddGift = React.createClass({

  getInitialState() {
    return { newGiftData: { name: '', price: '', link: '' }, showForm: this.props.display, errors: [] }
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.display) {
      this.setState({ showForm: true })
    }
  },

  toggleForm() {
    this.setState({ showForm: !this.state.showForm })
  },

  handleAdd() {
    var { name, price, link } = this.state.newGiftData
    var friend_id = this.props.friendId
    var gift = { name, price, link, friend_id }
    GiftApi.createNewGift(gift)
      .then((response) => {
        this.props.handleNewGift(response);
        this.setState({ newGiftData: { name: '', price: '', link: '' }, showForm: false, errors: [] })
      })
      .fail((response) => {
        var errors = JSON.parse(response.responseText).errors
        this.setState({ errors })
      })
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
