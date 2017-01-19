class TextInput extends React.Component {
  render () {
    return (
      <div>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div>
          <input
            type={this.props.type}
            name={this.props.name}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.onChange}/>
        </div>
      </div>
    );
  }
}

TextInput.propTypes = {
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  onChange: React.PropTypes.func,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  type: React.PropTypes.string
};
