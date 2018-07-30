import React, { Component } from 'react';
import "./style.css";

const UserAvatar = ({ user, size }) => (
  <img
    className={`user-avatar ${size || ""}`}
    alt="user avatar"
    src={user.avatar}
  />
);

const UserStats = ({ user }) => (
  <div className="user-stats">
    <div>
      <UserAvatar user={user} />
      {user.name}
    </div>
    <div className="stats">
      <div>{user.followers} Followers</div>
      <div>Following {user.following}</div>
    </div>
  </div>
);

const Nav = ({ user }) => (
  <div className="nav">
    <UserAvatar user={user} size="small" />
  </div>
);

const Content = () => <div className="content">Main Content area</div>;

const Sidebar = ({ user }) => (
  <div className="sidebar">
    <UserStats user={user} />
  </div>
);

const Body = ({ user }) => (
  <div className="body">
    <Sidebar user={user} />
    <Content />
  </div>
);

class PropDrillingExp extends Component {
  state = {
    user: {
      avatar:
        "https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b",
      name: "Gunjan Kumar",
      followers: 1114,
      following: 114
    }
  };

  render() {
    const { user } = this.state;

    return (
      <div className="app">
        <h2>Property Drilling</h2>
        <Nav user={user} />
        <Body user={user} />
      </div>
    );
  }
}
export default PropDrillingExp;
