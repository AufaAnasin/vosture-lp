import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />} />
    </Routes>
    </>
  )
}

export default App
