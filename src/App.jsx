import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Docs, Home, Licenses, NotFound, Privacy, Support, Terms } from "./pages";
import { MainLayout } from "./layouts";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/licenses" element={<Licenses />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/docs" element={<Docs/>} />
          {/* Handle unmatched routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
