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

  render () {
    var gifts = this.state.gifts.map((gift) => {
      return (
        <div key={gift.id}>
          <Gift
          giftId={gift.id}
          name={gift.name}
          link={gift.link}
          price={gift.price}
          populated={this.props.populated} />
        </div>
      )
    });

    return(
      <div>
        {gifts}
      </div>
    )
  }
})

AllGifts.propTypes = {
  friendId: React.PropTypes.number,
  populated: React.PropTypes.bool
};
