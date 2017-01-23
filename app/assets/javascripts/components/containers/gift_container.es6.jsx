var GiftContainer = React.createClass({

  getInitialState() {
    return { giftData: { name: '', price: '', link: '', id: this.props.gift.id }, editable: this.props.editable, errors: [] }
  },

  componentDidMount() {
    var newGiftData = this.props.gift
    this.setState({ giftData: newGiftData })
  },

  toggleEditable() {
    this.setState({ editable: !this.state.editable })
  },

  onChange(event) {
    const field = event.target.name;
    const giftData = this.state.giftData;
    giftData[field] = event.target.value;
    return this.setState({giftData: giftData});
  },

  handleEdit() {
    var { name, price, link, id } = this.state.giftData
    var gift = { name, price, link, id }
    GiftApi.updateGift(gift)
      .then((response) => {
        this.setState({ giftData: gift, errors: [] })
        this.toggleEditable();
      })
      .fail((response) => {
        var errors = JSON.parse(response.responseText).errors
        this.setState({ errors })
      })
  },

  handleDelete() {
    var { id } = this.props.gift
    GiftApi.deleteGift(id)
      .then((response) => {
        this.props.handleDelete(id);
      })
  },

  render () {
    return (
      <Gift gift={this.state.giftData}
      handleEdit={this.handleEdit}
      handleDelete={this.handleDelete}
      toggleEditable={this.toggleEditable}
      editable={this.state.editable}
      onChange={this.onChange}
      errors={this.state.errors} />
    );
  }
})

GiftContainer.propTypes = {
  gift: React.PropTypes.object,
  handleDelete: React.PropTypes.func,
  editable: React.PropTypes.bool
};
