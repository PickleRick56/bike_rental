import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Error from "./ErrorPage";
import DetailCase from "./DetailCase";

function App() {
    const retrievedFromStore = useSelector((state) => state.todo.tasks);
    let data = retrievedFromStore[1].text.data;
    console.log(data, "дата всех кейсов для роутинга ");

    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/detailCase" element={<DetailCase />} />
                {typeof data === "undefined"
                    ? "a"
                    : data.map((key) => (
                          <Route path={key["_id"]} element={<DetailCase />} />
                      ))}
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;
