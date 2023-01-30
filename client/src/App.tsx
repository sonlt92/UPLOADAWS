// Lib
import { Route, Routes } from 'react-router-dom'

// Styles
import './styles/index.css'

// Components
import NearBy from '@components/NearBy'

// Pages
import RegisTerMember from '@pages/registerMember'
import RegisTerCar from '@pages/registerCar'
import Create from '@Test/Create'
import Edit from '@Test/Edit'
import Home from '@Test/Home'
import Login from '@pages/login'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/create' element={<Create />} />
      <Route path='/edit/:id' element={<Edit />} />
      <Route path='/index' element={<Home />} />
      <Route path='/register-member' element={<RegisTerMember />} />
      <Route path='/register-car' element={<RegisTerCar />} />
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Create />} />
      <Route path='/nearby' element={<NearBy />} />
    </Routes>
  )
}

export default App
