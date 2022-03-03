import React from 'react';
import axios from 'axios';



class test extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    password: ''
  };

  componentDidMount = () => {
    this.getuser();
  };


  getuser = () => {
    axios.get('/api')
      .then((response) => {
        const user = response.data;
        this.setState({ posts: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };


  submit = (event) => {
    event.preventDefault();

    const payload = {
      lastName: this.state.lastName,
      firstName: this.state.firstName
    };


    axios({
      url: './api/index',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs();
        this.getuser();
      })
      .catch(() => {
        console.log('Internal server error');
      });;
  };

  resetUserInputs = () => {
    this.setState({
      firstName: '',
      lastName: ''
    });
  };

  displayuser = (user) => {

    if (!user.length) return null;


    return user.map((user, index) => (
      <div key={index}>
        <h3>{user.firstName}</h3>
        <p>{user.lastName}</p>
      </div>
    ));
  };

  render() {

    console.log('State: ', this.state);

    //JSX
    return(
      <div className="app">
        <h2>Welcome to the best app ever</h2>
        <form onSubmit={this.submit}>
          <div className="form-input">
            <input 
              type="text"
              name="firstName"
              placeholder="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <textarea
              placeholder="lastName"
              name="lastName"
              cols="30"
              rows="10"
              value={this.state.lastName}
              onChange={this.handleChange}
            >
              
            </textarea>
          </div>

          <button>Submit</button>
        </form>

        <div className="blog-">
          {this.displayuser(this.state.user)}
        </div>
      </div>
    );
  }
}


export default test;