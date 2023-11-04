import "./App.css";
import { Router, Routes, Route, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Error from "./ErrorPage";
import DetailCase from "./DetailCase";
import DetailOfficersData from "./DetailOfficersData";
import SingupPage from "./SingupPage";
import SignForm from "./SignForm";

function App() {
    const location = useLocation();

    const retrievedFromStore = useSelector((state) => state.todo.tasks);

    let Casedata = retrievedFromStore[1].text.data;
    let Officersdata = retrievedFromStore[2].text;

    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />

                    <Route path="/detailCase" element={<DetailCase />} />
                    <Route path="/singupPage" element={<SingupPage />} />
                    <Route path="/signForm" element={<SignForm />} />

                    {typeof Casedata === "undefined"
                        ? "нет кейсов"
                        : Casedata.map((key) => (
                              <Route
                                  path={key["_id"]}
                                  element={<DetailCase />}
                              />
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
            <footer id="footer">
                <ul class="nav nav-links footer-nav">
                    <li>
                        <a href="http://vk.com/velomesto" target="_blank">
                            <span class="fa fa-vk icon-left"></span>
                            <span class="sr-only">Вконтакте</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.facebook.com/velomesto"
                            target="_blank"
                        >
                            <span class="fa fa-facebook icon-left"></span>
                            <span class="sr-only">Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/velomesto" target="_blank">
                            <span class="fa fa-twitter icon-left"></span>
                            <span class="sr-only">Twitter</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://plus.google.com/110011375304314630440"
                            target="_blank"
                            rel="publisher"
                        >
                            <span class="fa fa-google-plus icon-left"></span>
                            <span class="sr-only">Google+</span>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default App;
