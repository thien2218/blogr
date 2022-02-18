import Footer from "./Footer"

const Layout = ({ children }) => {
   return (
      <div className="container">
         <div className="wrapper">
            {children}
            <Footer />
         </div>
      </div>
   )
}

export default Layout