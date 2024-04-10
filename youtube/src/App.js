import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Container from "react-bootstrap/esm/Container";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import "./_app.scss";
import LoginScreen from "./screens/LoginScreen/LoginScreen";

import {
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const [sidebar, toggleSideBar] = useState(false);

  const handleToggleSidebar = () => toggleSideBar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app_main">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {

  const {accessToken, loading} = useSelector(state => state.auth)

  const history = useNavigate();

  useEffect(() => {
    if (!loading && !accessToken){
      history('/auth');
    }
  },[accessToken,loading,history])

  return (
      <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomeScreen />
              </Layout>
            }
            exact
          />
          <Route path="/auth" element={<LoginScreen />}></Route>
          <Route
            path="/search"
            element={
              <Layout>
                <h1>Search Results</h1>
              </Layout>
            }
          />
          <Route
          path="*"
            element={
              <Navigate to="/"/>
            }
          />
      </Routes>
  );
};

export default App;
