class AddGift extends React.Component {
  render () {
    return (
      <div>
        <p>Add another gift</p>
      </div>
    );
  }
}

AddGift.propTypes = {
  name: React.PropTypes.string,
  price: React.PropTypes.node,
  link: React.PropTypes.string
};
