import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import News from "./pages/News";
import Animals from "./pages/Animals";
import Donations from "./pages/Donations";
import AddNew from "./pages/AddNew";
import Header from "./components/Header";
import { useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <Header isAdmin={isAdmin} setAdmin={setIsAdmin} />
        <Routes>
            <Route exact path="/" element={<AboutUs />} />
            <Route path="/animals" element={<Animals />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/news" element={<News />} />
            <Route path="/addNew" element={<AddNew isAdmin={isAdmin}/>} />
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>

  );
}

export default App;
