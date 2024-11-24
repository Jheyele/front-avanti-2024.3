import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Layout({ children }) {
  const location = useLocation();
  const [isLoginPage, setIsLoginPage] = useState();

  useEffect(() => {
    if(location.pathname === "/login") {
      setIsLoginPage(true)
    } else {
      setIsLoginPage(false)
    }
  }, [location])

  return (
    <div className="d-flex flex-column vh-100">
      {!isLoginPage && <Header />}
      <main className="flex-grow-1 py-4" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          {children}
        </div>
      </main>
      {!isLoginPage && <Footer />}
    </div>
  );
}

export default Layout;
