import Header from "../components/Header"
import ImagesList from "../components/ImagesList"
import Description from "../components/Description"
import Footer from "../components/Footer"
import imgs from "../json/imgs.json"
import { useImgs } from '../react-query';

function Home() {

  const { data, isLoading } = useImgs();
  const imgs = data || [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}];

  return (
    <div className="maincontainer main-layout">
      <Header 
      className="layout-header"
      title="Name"
      slogan="Slogan"
      />
      <ImagesList imgs={imgs} isLoading={isLoading} className="layout-content" />
      {/* <ProductList products={products} isLoading={isLoading} /> */}
      <Description />
      <Footer className="layout-footer" />
    </div>
  );
}

export default Home;
//<div className="container main-layout"> container拿掉恢復正常
