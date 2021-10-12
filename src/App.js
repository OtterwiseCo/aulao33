import logo from './logo.svg'
import './App.css'
import { Fragment } from 'react'

import Link from './components/Link'
import { links } from './constants/links'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Otterwise</p>
        {links.map(({ href, text, id }) => (
          <Link key={id} to={href}>
            {text}
          </Link>
        ))}
        {['Exemplo 1', 'Exemplo 2'].map(text => (
          <Fragment key={text}>
            <span>Filho:</span>
            <span>{text}</span>
          </Fragment>
        ))}
      </header>
    </div>
  )
}

export default App
