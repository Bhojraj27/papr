import Layout from './components/Layout'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  
  return (
    <div>
          <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} />

      </Routes>
    </BrowserRouter>

     
    </div>
  );
}

export default App;
