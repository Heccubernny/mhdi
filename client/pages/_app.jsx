import '../styles/globals.css'
import "tailwindcss/tailwind.css"





// import App from 'next/app'

// import { Provider } from "react-redux";

// import store from "../redux/stores/stores"

// import Home from './index'
// import withRedux from "next-redux-wrapper"











// ReactDOM.render(
//     <Provider store = {store}>
//         <Home />,

//     </Provider>,
// document.getElementById('root'))


// function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
// }
// export default MyApp

//const MyApp = ({ Component, pageProps }) => (
  //<Component {...pageProps} />
//)





// class MyApp extends App{
//   static async getInitialProps({Component, ctx}){
//     const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx) :{};
//     console.log(appProps)
//     return{appProps: appProps}
//   }

//   render(){
//     const {Component, appProps} = this.props;
//     return(
//       <Provider store={store}>
//           <Component {...appProps} />
//       </Provider>

//     )
//   }
// }
import React from "react"
import { wrapper } from "../redux/stores/stores"

const MyApp = ({ Component, pageProps}) => (
   <Component {...pageProps} />
)

export default wrapper.withRedux(MyApp);