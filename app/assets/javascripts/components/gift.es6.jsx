{/*
  Gift is initially rendered as plain text, but upon calling toggleEditable prop function,
  the component is rendered as an editable form.
 */}

var Gift = React.createClass({

  render () {
    if(this.props.editable) {
      return (
        <tr>
            <td>
              <TextInput
                name="name"
                type="text"
                value={this.props.gift.name}
                onChange={this.props.onChange}/>
            </td>
            <td>
              <TextInput
                name="price"
                type="text"
                value={this.props.gift.price ? this.props.gift.price.toString() : ''}
                onChange={this.props.onChange}/>
            </td>
            <td>
              <TextInput
                name="link"
                type="text"
                value={this.props.gift.link}
                onChange={this.props.onChange}/>
            </td>
            <td>
              <button onClick={this.props.handleEdit}>Update</button>
            </td>
            <td>
              <button onClick={this.props.handleDelete}>Delete</button>
            </td>
            <td>
            <ul>
            {this.props.errors.map((error, index) => {
              return <li style={{color: "red"}} key={index}>{error}</li>
            })}
            </ul>
            </td>
        </tr>
      );
    }
    else {
      return (
        <tr>
          <td>{this.props.gift.name}</td>
          <td>{this.props.gift.price}</td>
          <td>{this.props.gift.link}</td>
          <td><button onClick={this.props.toggleEditable}>Edit</button></td>
        </tr>
      )
    }
  }
})

Gift.propTypes = {
  gift: React.PropTypes.object,
  handleDeleteGift: React.PropTypes.func,
  handleEdit: React.PropTypes.func,
  onChange: React.PropTypes.func,
  editable: React.PropTypes.bool,
  toggleEditable: React.PropTypes.func,
  errors: React.PropTypes.array
};
