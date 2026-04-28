import "./App.css";
import Header from "./components/Header/Header.jsx";
import Home from "./views/Home.jsx";
import logo from "./assets/main-logo.png";

import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header
        title="PHOTOSNAP"
        navText1="STORIES"
        navText2="FEATURES"
        navText3="PRICING"
        inviteBtn="GET AN INVITE"
        imgLogo={logo}
      />
      <Home />
      <Footer imgLogo={logo} />
    </>
  );
}

export default App;
