import './App.css'

// pages
import RegisterPage from './features/auth/pages/RegisterPage';
import { FrappeProvider } from 'frappe-react-sdk'
function App() {

  return ( 
	<div className="App">
	  <FrappeProvider>
		<RegisterPage />
	  </FrappeProvider>
	</div>
  )
}

export default App
