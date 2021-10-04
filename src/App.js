import React from 'react'
import './App.css';
import Sync from './Component/Sync';

export const App = () => {
  return (
    <div>
      <Sync />
    </div>
  )
}
export default App;




























// import { useEffect } from 'react'
// import { useDispatch} from 'react-redux'
// import { Provider as AlertProvider } from 'react-alert'
// import AlertTemplate from 'react-alert-template-basic'
// import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import './App.css'

// import Alert from './Component/Layout/Alert';
// import Header from './Component/Layout/Header'
// import Dashboard from './Component/Lead/Dashboard';
// import Login from './Component/account/Login'
// import Register from './Component/account/Register'
// import PrivateRoute from './Component/common/Private'


// import axios from "axios";
// import { returnErrors } from "./actions/meesage";
// import { USER_LOADING, USER_LOADED, AUTH_ERROR } from "./actions/types";



// const alertOptions = {
//   timeout: 6000,
//   position: 'top center'
// }









// function App() {
//   const dispatch = useDispatch()


//   const send = ()=>{
//     dispatch({
//       type: USER_LOADING
//     })

//     const token = localStorage.getItem('token')
//     const config ={
//       headers: {
//         'Content-Type': 'applicatio/json'
//       }
//     }
//     if(token){
//       config.headers['Authorization'] = `Token ${token}`
//       axios.get('http://localhost/api/auth/user', config)
//         .then(res =>{
//           dispatch({
//             type: USER_LOADED,
//             payload: res.data
//           })
//         }).catch(err =>{
//           dispatch(returnErrors(err.response.data, err.response.status))
//           dispatch({
//             type: AUTH_ERROR
//           })
//         })
//     }


//    }

//   useEffect(() => {
//     send()
//   }, [])






























//   return (
//       <AlertProvider template={AlertTemplate} {...alertOptions}>
//         <Router>
//           <div className="App">
//             <Header />
//             <Alert />
//             <Switch>
//               <PrivateRoute exact path="/" component={Dashboard} />
//               <Route path="/login" component={Login} />
//               <Route path="/register" component={Register} />
//             </Switch>
//           </div>
//         </Router>
//       </AlertProvider>
//   );
// }

// export default App;
