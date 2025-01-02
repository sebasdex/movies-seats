import Footer from "./components/Footer"
import Header from "./components/Header"
import Movies from "./components/Movies"


function App() {

  return (
    <>
      <Header />
      <main className="container mx-auto mt-20">
        <Movies />
        <Footer />
      </main>
    </>
  )
}

export default App
