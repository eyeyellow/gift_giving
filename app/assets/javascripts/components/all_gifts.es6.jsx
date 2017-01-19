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
                giftId={gift.id}
                name={gift.name}
                link={gift.link}
                price={gift.price} />
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
})

AllGifts.propTypes = {
  friendId: React.PropTypes.number,
  populated: React.PropTypes.bool
};

{/*

                <tr key={gift.id}>
                  <td>{gift.name}</td>
                  <td>{gift.price}</td>
                  <td>{gift.link}</td>
                  <td><button onClick={this.handleUpdate}>Edit</button></td>
                </tr>
            {this.state.gifts.map(function(gift){
              return (
                <tr key={gift.id}>


                </tr>
              )
            })}
*/}