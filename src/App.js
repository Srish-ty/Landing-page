import "./styles.css";
import { Nav } from "./components/Nav";
import { FirstPage } from "./components/slides/FirstPage";
import { Banner } from "./components/atoms/Banner";
import { SecondPage } from "./components/slides/SecondPage";

export default function App() {
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:"space-around"}}>
      <Nav />
      <FirstPage/>
      <Banner/>
      <SecondPage/>
    </div>
  );
}
