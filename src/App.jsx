import { useSelector } from "react-redux"
import { Header, Footer } from "./components/index"

function App() {
  
  const currentTheme = useSelector((state) => state.theme.initialTheme)

  return (
    <div className= {`h-screen ${currentTheme === 'dark' ? 'bg-blackColor' : 'bg-whiteColor'}`}>
      <Header />
      <Footer />
    </div>
  )
}

export default App
