var AllGiftsContainer = React.createClass({

  getInitialState() {
    return { gifts: [], addGiftDisplay: false }
  },

  componentDidMount() {
    if(this.props.friendId) {
      var friendId = this.props.friendId
      $.ajax({
        url: `/api/v1/gifts/${friendId}`,
        type: 'GET',
        success: (gifts) => {
          if(gifts.length) {
            this.setState({ gifts: gifts })
          }
          else {
            this.setState({ gifts: gifts, addGiftDisplay: true})
          }
        }
      })
    }
  },

  handleNewGift(newGiftData) {
    var newState = this.state.gifts.concat(newGiftData)
    this.setState({ gifts: newState })
  },

  handleDeleteGift(giftId) {
    var newGifts = this.state.gifts.filter((gift) => {
      return gift.id !== giftId
    });
    if(newGifts.length) {
      this.setState({ gifts: newGifts, addGiftDisplay: false });
    }
    else {
      this.setState({ gifts: newGifts, addGiftDisplay: true})
    }
  },

  render () {
    return (
      <div>
        <AllGifts
        gifts={this.state.gifts}
        friendId={this.props.friendId}
        addGiftDisplay={this.state.addGiftDisplay}
        handleDeleteGift={this.handleDeleteGift}
        handleNewGift={this.handleNewGift} />
      </div>
    );
  }
})

AllGiftsContainer.propTypes = {
  friendId: React.PropTypes.number
};
