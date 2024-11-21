import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <main className="flex-grow-1 py-4" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
