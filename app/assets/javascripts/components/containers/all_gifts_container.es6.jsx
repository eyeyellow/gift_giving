var AllGiftsContainer = React.createClass({

  getInitialState() {
    return { gifts: [], addGiftDisplay: false }
  },

  componentDidMount() {
    if(this.props.friendId) {
      var { friendId } = this.props
      GiftApi.getFriendGifts(friendId)
        .success((gifts) => {
          if(gifts.length) {
            this.setState({ gifts })
          }
          else {
            this.setState({ gifts, addGiftDisplay: true})
          }
        })
    }
  },

  handleNewGift(newGiftData) {
    console.log(newGiftData)
    var newState = this.state.gifts.concat(newGiftData)
    this.setState({ gifts: newState })
  },

  handleDeleteGift(giftId) {
    var gifts = this.state.gifts.filter((gift) => {
      return gift.id !== giftId
    });
    if(gifts.length) {
      this.setState({ gifts, addGiftDisplay: false });
    }
    else {
      this.setState({ gifts, addGiftDisplay: true})
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
        handleNewGift={this.handleNewGift}
        addGiftDisplay={this.state.addGiftDisplay} />
      </div>
    );
  }
})

AllGiftsContainer.propTypes = {
  friendId: React.PropTypes.number
};
