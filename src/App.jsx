import { BrowserRouter } from "react-router-dom";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import Footer from "./layout/Footer";
import ScrollToTop from "./layout/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <PageContent />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
