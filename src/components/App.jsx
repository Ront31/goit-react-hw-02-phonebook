const { Component } = require('react');

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = prevState => {
    this.setState({
      [prevState.currentTarget.name]: prevState.currentTarget.value,
    });
  };

  formSubmit = e => {
    e.preventDefault();

    this.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ contacts: [], name: '' });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <form onSubmit={this.formSubmit}>
          <label>
            {' '}
            Name
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
