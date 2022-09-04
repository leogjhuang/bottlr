import React, { Component } from "react";
import { Alert } from "reactstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

class Login extends Component {
  state = {
    email: "",
    password: "",
    msg: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = { email, password };
    console.log(user);
    this.props.login(user);
  };

  render() {
    return (
      <div class="container d-flex justify-content-center align-items-center mt-5 ">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xl-4 offset-xl-4">
            <div class="card shadow">
              <img
                src="https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
                alt=""
                class="card-img-top"
              />
              {this.state.msg ? (
                <Alert color="danger">{this.state.msg}</Alert>
              ) : null}
              <div class="card-body">
                <h5 class="card-title">Login</h5>
                <form
                  class="validated-form"
                  novalidate
                  onSubmit={this.onSubmit}
                >
                  <div class="mb-3">
                    <label class="form-label" for="username">
                      Email
                    </label>
                    <input
                      class="form-control"
                      type="email"
                      id="email"
                      name="email"
                      onChange={this.onChange}
                      autofocus
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label" for="password">
                      Password
                    </label>
                    <input
                      class="form-control"
                      type="password"
                      id="password"
                      name="password"
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <button class="btn btn-success btn-block">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAutheticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login, clearErrors })(Login);
