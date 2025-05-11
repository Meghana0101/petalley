// import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import LoginForm from './Components/Login'
import SignupForm from './Components/Signup'
import Aboutus from './Components/Aboutus'
import Shopping from './Components/Shopping'
import Petfood from './Components/Petfood'
import Petclothes from './Components/Petclothes'
import Petacce from './Components/Petacce'

import Services from './Components/Services'
import Petsitters from './Components/Petsitters'
import Petpharma from './Components/Petpharma'
import Petclinic from './Components/Petclinic'

import Petfun from './Components/Petfun'
import Petcafe from './Components/Petcafe'
import Petsittersform from './Components/Petsfrom'
import Petsellingform from './Components/Petselling'
import Beasitter from './Components/Beasitter'




import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      

      <Router>
      <Header/>

     
      
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Shopping' element={<Shopping/>} />
          <Route path='/Petfood' element={<Petfood/>} />
          <Route path='/Petclothes' element={<Petclothes/>} />
          <Route path='/Petacce' element={<Petacce/>} />

          <Route path='/Services' element={ <Services/>} />
          <Route path='/Petsitters' element={<Petsitters/>} />
          <Route path='/Petclinic' element={<Petclinic/>} />
          <Route path='/Petpharma' element={<Petpharma/>} />
          <Route path='/Petsellingform' element={<Petsellingform/>} />
          <Route path='/Beasitter' element={<Beasitter/>}/> 

          <Route path='/Petfun' element={<Petfun/>} />
          <Route path='/Petcafe' element={<Petcafe/>} />

          <Route path='/Petsittersform' element={<Petsittersform/>} />

          <Route path='/Login' element={<LoginForm/>} />
          <Route path='/Signup' element={<SignupForm/>}/> 
          <Route path='/Aboutus' element={<Aboutus/>}/> 
          <Route/>
        </Routes>
      </Router>

   
    
    {/* <Home/> */}
     


    </div>
  );
}

export default App;
