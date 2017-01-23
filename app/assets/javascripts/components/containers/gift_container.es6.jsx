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
    var name = this.state.giftData.name
    var price = this.state.giftData.price
    var link = this.state.giftData.link
    var id = this.props.gift.id
    var gift = { name: name, price: price, link: link, id: id}
    $.ajax({
      url: `/api/v1/gifts/${gift.id}`,
      type: 'PUT',
      data: { gift: gift },
      success: (gift) => {
        this.setState({ giftData: { name: gift.name, price: gift.price, link: gift.link }, errors: [] })
        this.toggleEditable();
      },
      error: (xhr) => {
        var errors = JSON.parse(xhr.responseText).errors
        this.setState({ errors: errors })
      }
    })
  },

  handleDelete() {
    var id = this.props.gift.id
    $.ajax({
      url: `/api/v1/gifts/${id}`,
      type: 'DELETE',
      success: (gift) => {
        this.props.handleDelete(id);
      }
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
