import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
    return (
        <main className='max-w-7xl mx-auto'>
            <Navbar />
            <Hero />
            <About />
        </main>
    )
}

export default App
