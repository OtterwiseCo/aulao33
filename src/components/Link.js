const Link = props => {
  return (
    <a
      className='App-link'
      href={props.to}
      target='_blank'
      rel='noopener noreferrer'
    >
      {props.children}
    </a>
  )
}

export default Link
