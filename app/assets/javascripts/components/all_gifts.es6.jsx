var AllGifts = React.createClass({

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
      console.log(newGifts.length)
      this.setState({ gifts: newGifts, addGiftDisplay: false });
    }
    else {
      this.setState({ gifts: newGifts, addGiftDisplay: true})
    }
  },

  render () {
    return(
      <div>
      <h2>Gifts</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {this.state.gifts.map((gift) => {
              return (
                <Gift key={gift.id}
                editable={false}
                giftId={gift.id}
                name={gift.name}
                link={gift.link}
                price={gift.price}
                handleDeleteGift={this.handleDeleteGift} />
              )
            })}
          </tbody>
        </table>
        <AddGift display={this.state.addGiftDisplay}
        friendId={this.props.friendId}
        handleNewGift={this.handleNewGift} />
      </div>
    )
  }
})

AllGifts.propTypes = {
  friendId: React.PropTypes.number,
  populated: React.PropTypes.bool
};
