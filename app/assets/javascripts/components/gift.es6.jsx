var Gift = React.createClass({

  getInitialState() {
    return { giftData: { name: '', price: 0, link: '' } }
  },

  componentDidMount() {
    this.setState({ giftData: { name: this.props.name, price: this.props.price, link: this.props.link }})
  },

  render () {
    return (
      <div>

        <TextInput
          name={this.props.name}
          label="Name:"
          type="text"
          value={this.state.giftData.name}
          onChange={this.onChange}/>

        <TextInput
          name={this.props.price.toString()}
          label="Price:"
          type="text"
          value={this.state.giftData.price.toString()}
          onChange={this.onChange}/>

        <TextInput
          name={this.props.link}
          label="Link:"
          type="text"
          value={this.state.giftData.link}
          onChange={this.onChange}/>

      </div>
    );
  }
})

Gift.propTypes = {
  name: React.PropTypes.string,
  giftId: React.PropTypes.number,
  link: React.PropTypes.string,
  price: React.PropTypes.number,
  populated: React.PropTypes.bool
};
