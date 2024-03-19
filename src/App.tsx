import './App.css'
import HideSecret from './components/HideSecret'

function App() {
  return (
    <>
    <HideSecret text='mongodb+srv://userName:********@clxster9.ba5b2bg.mongodb.net/retryWrites=true&w=majority&appName=Cluster' secret='RandomPassword112233'/>
    <HideSecret text='mongodb+srv://userName:********@clxster9.ba5b2bg.mongodb.net/retryWrites=true&w=majority&appName=Cluster' secret='RandomPassword112233'/>
    <HideSecret text='mongodb+srv://userName:********@clxster9.ba5b2bg.mongodb.net/retryWrites=true&w=majority&appName=Cluster' secret='RandomPassword112233'/>
    </>
  )
}

export default App
