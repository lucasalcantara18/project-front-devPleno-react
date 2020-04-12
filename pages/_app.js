import '../styles/styles.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
const App = ({ Component, pageProps }) => {
    return (
    <div>
        <Header/>
        <div className="min-h-screen container mx-auto">
            <Component {...pageProps}></Component>
        </div>
        <Footer />
    </div>
    )
}

export default App;