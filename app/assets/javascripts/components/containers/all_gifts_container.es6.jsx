{/*
  The value of addGiftDisplay determines whether the AddGift form is rendered.
  The last lines of code in componentDidMount and handleDeleteDift conditionally set the value
  of addGiftDisplay to true for cases where the array of gifts in state are empty
 */}

var AllGiftsContainer = React.createClass({

  getInitialState() {
    return { gifts: [], addGiftDisplay: false }
  },

  componentDidMount() {
    if(this.props.friendId) {
      var { friendId } = this.props
      GiftApi.getFriendGifts(friendId)
        .success((gifts) => {
          this.setState({ gifts })
          if(!gifts.length) this.setState({ gifts, addGiftDisplay: true})
        })
    }
  },

  handleNewGift(newGiftData) {
    var newState = this.state.gifts.concat(newGiftData)
    this.setState({ gifts: newState })
  },

  handleDeleteGift(giftId) {
    var gifts = this.state.gifts.filter((gift) => {
      return gift.id !== giftId
    });
    gifts.length ? this.setState({ gifts, addGiftDisplay: false }) : this.setState({ gifts, addGiftDisplay: true})
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
