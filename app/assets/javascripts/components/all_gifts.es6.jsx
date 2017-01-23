var AllGifts = React.createClass({

  getInitialState() {
    return { gifts: [], addGiftDisplay: false }
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({ gifts: nextProps.gifts, addGiftDisplay: nextProps.addGiftDisplay })
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
                <GiftContainer key={gift.id}
                editable={false}
                gift={gift}
                handleDelete={this.props.handleDeleteGift} />
              )
            })}
          </tbody>
        </table>
        <AddGift display={this.state.addGiftDisplay}
        friendId={this.props.friendId}
        handleNewGift={this.props.handleNewGift} />
      </div>
    )
  }
})

AllGifts.propTypes = {
  friendId: React.PropTypes.number,
  gifts: React.PropTypes.array,
  handleDeleteGift: React.PropTypes.func,
  handleAddGift: React.PropTypes.func
};
