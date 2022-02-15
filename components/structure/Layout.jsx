import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

const Layout = ({ children }) => {
   return (
      <div className="container">
         <div className="wrapper">
            <Header />
            <Main>{children}</Main>
            <Footer />
         </div>
      </div>
   )
}

export default Layout