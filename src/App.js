import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Error from "./ErrorPage";
import DetailCase from "./DetailCase";
import DetailOfficersData from "./DetailOfficersData";
import SingupPage from "./SingupPage";

function App() {
    const retrievedFromStore = useSelector((state) => state.todo.tasks);

    let Casedata = retrievedFromStore[1].text.data;
    let Officersdata = retrievedFromStore[2].text;
    console.log(retrievedFromStore, "дата всех officers для роутинга ");
    console.log(typeof Officersdata);

    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/detailCase" element={<DetailCase />} />
                <Route path="/singupPage" element={<SingupPage />} />

                {typeof Casedata === "undefined"
                    ? "нет кейсов"
                    : Casedata.map((key) => (
                          <Route path={key["_id"]} element={<DetailCase />} />
                      ))}

                {Object.keys(Officersdata).length === 0
                    ? "нет оффицеров"
                    : Officersdata.map((key) => (
                          <Route
                              path={key["_id"]}
                              element={<DetailOfficersData />}
                          />
                      ))}

                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;
