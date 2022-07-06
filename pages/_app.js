import '../styles/globals.css'
import Head from 'next/head'
import Nav from '../componate/nav'
import Footer from '../componate/footer'

function MyApp({ Component, pageProps }) {
   

  return (
    <>
   
    <Head>
       <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
     
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
    <script defer src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

<script defer
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>
  

<script defer
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>
 
    </Head>
    <Nav/>
  <Component {...pageProps} />
  <Footer/>
    
  </>
  )

}

export default MyApp
