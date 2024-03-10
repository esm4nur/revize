import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SiteRoutes from "./SiteRoutes";
import data from "/src/data/data.json"

function App() {


  return (
    <>
      <Navbar data={data} />
      <SiteRoutes data={data} />
      <Footer />
    </>
  );
}

export default App;
