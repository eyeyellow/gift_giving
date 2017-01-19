var AllGifts = React.createClass({

  getInitialState() {
    return { gifts: [] }
  },

  componentDidMount() {
    if(this.props.populated) {
      var friendId = this.props.friendId
      $.ajax({
        url: `/api/v1/gifts/${friendId}`,
        type: 'GET',
        success: (gifts) => {
          this.setState({ gifts: gifts })
        }
      })
    }
  },

  handleNewGift(newGiftData) {
    console.log(newGiftData)
  },

  render () {
    return(
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {this.state.gifts.map(function(gift){
              return (
                <Gift key={gift.id}
                editable={false}
                giftId={gift.id}
                name={gift.name}
                link={gift.link}
                price={gift.price} />
              )
            })}
          </tbody>
        </table>
        <AddGift friendId={this.props.friendId}
        handleNewGift={this.handleNewGift} />
      </div>
    )
  }
})

AllGifts.propTypes = {
  friendId: React.PropTypes.number,
  populated: React.PropTypes.bool
};
