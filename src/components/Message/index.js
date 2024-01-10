import './index.css'

const Message = props => {
  const {name} = props
  return <h1 className="main-heading"> {name} </h1>
}

export default Message
