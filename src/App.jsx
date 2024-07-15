import { useSelector } from "react-redux"
import { Header } from "./components/index"

function App() {
  
  const currentTheme = useSelector((state) => state.theme.initialTheme)

  return (
    <body className= {`h-screen ${currentTheme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <Header />
    </body>
  )
}

export default App
