import Header from "../components/Header"
import ImagesList from "../components/ImagesList"
import Footer from "../components/Footer"
import imgs from "../json/imgs.json"

function Home() {
  return (
    <div className="main-layout">
      <Header 
      className="layout-header"
      title="Name"
      slogan="Slogan"
      />
      {/* <ImagesList className="layout-content" /> */}
      <ImagesList img={imgs} className="layout-content" />
      <Footer className="layout-footer" />
    </div>
  );
}

export default Home;
