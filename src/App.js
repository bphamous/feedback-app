import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' //NavLink
import Header from "./components/Header"
// import Card from './components/shared/Card'
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'

import Post from './components/Post'
import Project from './components/Project'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList /> 
              </>
            }>
            </Route>
            <Route path='/about' element={<AboutPage />} />
            <Route path='/post/:id/:name' element={<Post />} />
            <Route path='/project/*' element={<Project />} />
          </Routes>
          
          {/* <Card>
            <NavLink to='/' activeclassname='active'>
              Home
            </NavLink>
            <NavLink to='/about' activeclassname='active'>
              About
            </NavLink>
          </Card> */}

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App