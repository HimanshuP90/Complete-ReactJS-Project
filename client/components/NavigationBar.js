import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';

class NavigationBar extends React.Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <div>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
      </ul>
      <ul className="nav navbar-nav">
          <li><Link to="/home">Home</Link></li>
          <li><a href="#">About</a></li>
      </ul>
      <div className="navbar-form navbar-left">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search" />
            <div className="input-group-btn">
              <button className="btn btn-default" type="submit">
                <i className="glyphicon glyphicon-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    );

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/signup">Sign up</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    );

    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">LifeAsReact</Link>
          </div>

          <div className="collapse navbar-collapse">
            { isAuthenticated ? userLinks : guestLinks }
          </div>
        </div>
      </nav>
    );
  }
}

NavigationBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);
