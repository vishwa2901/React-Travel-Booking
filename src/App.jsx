import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";

import Packages from "./pages/Packages";
import PackageCategory from "./pages/PackageCategory";
import PackageDetails from "./pages/PackageDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";

import { TravelProvider } from "./context/TravelContext";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <TravelProvider>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            

            <Route path="/packages" element={<Packages />}>
              <Route index element={<PackageCategory type="all" />} />
              <Route
                path="all"
                element={<PackageCategory type="all" />}
              />
              <Route
                path="domestic"
                element={<PackageCategory type="Domestic" />}
              />
              <Route
                path="international"
                element={<PackageCategory type="International" />}
              />
            </Route>

            <Route
              path="/packages/:id"
              element={<PackageDetails />}
            />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </TravelProvider>
    </BrowserRouter>
  );
}

export default App;