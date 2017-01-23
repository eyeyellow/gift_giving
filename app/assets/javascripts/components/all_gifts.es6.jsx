var AllGifts = React.createClass({

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
            {this.props.gifts.map((gift) => {
              return (
                <GiftContainer key={gift.id}
                editable={false}
                gift={gift}
                handleDelete={this.props.handleDeleteGift} />
              )
            })}
          </tbody>
        </table>
        <AddGift display={this.props.addGiftDisplay}
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
  handleAddGift: React.PropTypes.func,
  addGiftDisplay: React.PropTypes.bool
};
