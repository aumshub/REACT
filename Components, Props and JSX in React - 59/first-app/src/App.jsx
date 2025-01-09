import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Card from "./components/card"


function App() {
  return (
    <>
      <Navbar/>   
        <div className="cards">
      <Card title="Card 1" description="This is card 1 desc"/>
      <Card title="Card 2" description="This is card 2 desc"/>
      <Card title="Card 3" description="This is card 3 desc"/>
      <Card title="Card 4" description="This is card 4 desc"/>
      <Card title="Card 5" description="This is card 5 desc"/>
        </div>
      <Footer/>                                                                                               
    </>
  )
}

export default App
