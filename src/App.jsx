import { Routes, Route } from 'react-router-dom'

import './App.scss'
import Home from './components/pages/Home/Home'


// import reactLogo from './assets/images/react.svg'
function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>


      {/* <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button>count is</button>
      <p>
        Edit <code>src/App.jsx</code> save to test
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </main>
  )
}

export default App
