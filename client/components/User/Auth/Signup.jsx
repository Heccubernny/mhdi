
import { LockClosedIcon } from '@heroicons/react/solid'
import Header from "../../Header/Header";
import { useSelector, connect, useDispatch } from 'react-redux'
import {useState} from 'react'
import {getUsers, createUsers} from "../../../redux/actions/users"

function Signup(props){
  // const users = useSelector((state) => state.users)
  // console.log(users)

  // const {firstName, getUsers} = props
  // const [newFirstName, setFirstName] = useState("")
  // console.log(newFirstName)

  const {userData, setUserData} = useState({
    firstName: '', 
    lastName: '', 
    email: '', 
    password: ''
  })

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUsers(userData), true)
  }

  return (
    <>
     
    <Header></Header>
      
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://i.stack.imgur.com/bB3DC.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                start your 1 month free trial
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
          {/* {userData.map((userData) => ( */}
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
                <div className="container w-full">
                  <label htmlFor="email-address" className="sr-only">
                    First Name 
                  </label>
      
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="off"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="First Name"
                    value = {userData.firstName}
// e => event
                    onChange = {(e) => setUserData({...userData, firstName: e.target.value}) }
                  />
                
                  <label htmlFor="lastName" className="sr-only">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="off"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Last Name"
                    value = {userData.lastName}
// e => event
                    onChange = {(e) => setUserData({...userData, lastName: e.target.value}) }
                  />
          
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value = {userData.email}
// e => event
                    onChange = {(e) => setUserData({...userData, email: e.target.value}) }
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value = {userData.password}
// e => event
                    onChange = {(e) => setUserData({...userData, password: e.target.value}) }
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                // onClick={() => getUsers(newFirstName)}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
  {/* ))} */}
          </form>
        </div>
      </div>
    </>
  )
}


const mapStateToProps = state => {
  // console.log(state.users)
  return { firstName: state.users.firstName }
}

const mapDispatchToProps = {
    getUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)