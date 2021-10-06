import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import layoutStyles from '../styles/Layout.module.css'

const Layout = ({children}) => {
    return (
        <>
            {/* <Nav /> */}
            <div className={layoutStyles.container}>
                <main className={layoutStyles.main}>
                    <Header />
                    {children}
                </main>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Layout