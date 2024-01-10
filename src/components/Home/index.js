import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import {Component} from 'react'

class Home extends Component {
  state = {isLogin: true, isLogout: false, name: 'Please Login'}

  onClickButton = () => {
    this.setState(prevState => ({
      isLogin: !prevState.isLogin,
      name: !prevState.isLogin ? 'Please Login' : 'Welcome User',
      isLogout: !prevState.isLogout,
    }))
  }

  render() {
    const {isLogin, isLogout, name} = this.state
    return (
      <div className="main-container">
        <div className="container">
          <Message name={name} />
          {isLogin ? (
            <Login login="Login" onClickButton={this.onClickButton} />
          ) : (
            ''
          )}
          {isLogout ? (
            <Logout logout="Logout" onClickButton={this.onClickButton} />
          ) : (
            ''
          )}
        </div>
      </div>
    )
  }
}

export default Home
