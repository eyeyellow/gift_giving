{/*
  State values:
  editable - determines if gift item in table is rendered as a form, plus allows for options of editing and deleting it
  giftData - stores information to display or submit for the gift
  errors - holds messages to display for validation errors
 */}

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
    return this.setState({ giftData });
  },

  handleEdit() {
    var { name, price, link, id } = this.state.giftData
    var gift = { name, price, link, id }
    GiftApi.updateGift(gift)
      .then((response) => {
        if(response.errors) {
          var { errors } = response;
          this.setState({ errors })
        }
        else {
          this.setState({ giftData: gift, errors: [] })
          this.toggleEditable();
        }
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
