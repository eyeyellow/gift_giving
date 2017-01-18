class Gift extends React.Component {
  render () {
    return (
      <div>
        <div>Name: {this.props.name}</div>
        <div>Price: {this.props.price}</div>
        <div>Link: {this.props.link}</div>
      </div>
    );
  }
}

Gift.propTypes = {
  name: React.PropTypes.string,
  price: React.PropTypes.node,
  link: React.PropTypes.string
};
