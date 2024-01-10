import './index.css'

const Login = props => {
  const {login, onClickButton} = props
  const onLogin = () => {
    onClickButton()
  }
  return (
    <button className="button" onClick={onLogin}>
      {' '}
      {login}{' '}
    </button>
  )
}
export default Login
