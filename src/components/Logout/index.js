import './index.css'

const Logout = props => {
  const {logout, onClickButton} = props
  const onLogin = () => {
    onClickButton()
  }
  return (
    <button className="button" onClick={onLogin}>
      {' '}
      {logout}{' '}
    </button>
  )
}
export default Logout
