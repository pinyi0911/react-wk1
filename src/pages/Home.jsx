import Header from "../components/Header"
import ImagesList from "../components/ImagesList"
import Footer from "../components/Footer"
import imgs from "../json/imgs.json"

function Home() {
  return (
    <div className="maincontainer main-layout">
      <Header 
      className="layout-header"
      title="Name"
      slogan="Slogan"
      />
      <ImagesList imgs={imgs} className="layout-content" />
      <Footer className="layout-footer" />
    </div>
  );
}

export default Home;
//<div className="container main-layout"> container拿掉恢復正常
