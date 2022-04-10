import '../styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import {DOlaProvider} from '../context/DOlaContext' 
function MyApp({ Component, pageProps }) {
  return <DOlaProvider><Component {...pageProps} /></DOlaProvider>
}

export default MyApp
