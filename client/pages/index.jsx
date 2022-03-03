import Head from 'next/head'
import MyApp from './_app.jsx'
import {useDispatch} from 'react-redux'
import getUsers from '../redux/actions/users'
import useEffect from 'react'
import Layout from "../components/Layout/Layout"

export default function Home(){
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getUsers())
  
  // }, [dispatch])
  

  return(
    <div>
      <Head>
        <title>MHDI</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      </Head>
      <Layout>
	</Layout>
    </div>
    
  )
}