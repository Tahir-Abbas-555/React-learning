import './App.css'
import Card from "./components/Cards"
function App() {
  const obj = {
    name:"Lara",
    buttonName: "View Profile"
  } 
  return (
    <>
      <h1 className="px-4 bg-green-400 data-ripple-light='true' mb-4 rounded-xl">TailwindCSS</h1>
      <Card someObj={ obj } />
    </>
  )
}

export default App
