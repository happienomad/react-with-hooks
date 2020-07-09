import * as React from 'react'
import './styles.scss'
import Header from './containers/Header'
import Main from './containers/Main'
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Main />
        </div>
      </Router>
    </div>
  )
}

export default App
