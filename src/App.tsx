import * as React from 'react'
import './styles.scss'
import Header from './containers/Header'
import Main from './containers/Main'
import { BrowserRouter as Router, BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Main />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
