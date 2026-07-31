import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";

function App (){
  return (
    <BrowserRouter>
    <Header />
    <PageContent />
    </BrowserRouter>
  )
}

export default App;