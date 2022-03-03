import { Navigate, useNavigate, Routes, Route } from 'react-router-dom'

function Project() {
  const status = 200

  const navigate = useNavigate()

  const onClick = () => {
    console.log('Hello')
    navigate('/about')
  }

  if(status === 404) {
    return <Navigate to='/notfound' />
  }

  return (
    <div>
      <h1>Project: </h1>

      <button onClick={onClick}>click</button>
      <Routes>
        <Route path='/show' element={<h1>Hello word!!</h1>} />
      </Routes>
    </div>
  )
}

export default Project