import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Alert from "./components/layouts/Alert";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import { GitHubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

function App() {
  return (
    <GitHubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className="container mx-auto text-center px-8 pb-12">
              <div className="text-left px-20 font-nunito">
                <Alert />
              </div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GitHubProvider>
  );
}

export default App;
