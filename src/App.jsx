import "./App.css";
import Header from "./components/Header/Header.jsx";
import Home from "./views/Home.jsx";
import logo from "./assets/main-logo.png";

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
    </>
  );
}

export default App;
