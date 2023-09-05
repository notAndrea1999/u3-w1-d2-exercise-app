import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./component/MyNav";
import MyFooter from "./component/MyFooter";
import Welcome from "./component/Welcome";
import AllTheBooks from "./component/AllTheBooks";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome
        name="The best online book-shop"
        subtitle="Connecting Communities through Books"
        slogan="Immerse Yourself in the World of Books."
      />
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}

export default App;
