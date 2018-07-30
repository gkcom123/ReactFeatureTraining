import React,{Component} from "react";
import "../prop-pass/style.css";

const UserContext = React.createContext();

const UserAvatar = ({ size }) => (
  <UserContext.Consumer>
    {user => (
      <img
        className={`user-avatar ${size || ""}`}
        alt="user avatar"
        src={user.avatar}
      />
    )}
  </UserContext.Consumer>
);

const UserStats = () => (
  <UserContext.Consumer>
    {user => (
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
    )}
  </UserContext.Consumer>
);

const Nav = () => (
  <div className="nav">
    <UserAvatar size="small" />
  </div>
);

const Content = () => <div className="content">main content here</div>;

const Sidebar = () => (
  <div className="sidebar">
    <UserStats />
  </div>
);

const Body = () => (
  <div className="body">
    <Sidebar />
    <Content />
  </div>
);

class ContextDemo extends Component {
  state = {
    user: {
      avatar:
        "https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b",
      name: "This is a context demo",
      followers: 1234,
      following: 123
    }
  };

  render() {
    const { user } = this.state;

    return (
      <div className="app">
      <h2>Context API</h2>
      <UserContext.Provider value={user}>
          <Nav />
          <Body />
        </UserContext.Provider>
      </div>
    );
  }
}
export default ContextDemo;