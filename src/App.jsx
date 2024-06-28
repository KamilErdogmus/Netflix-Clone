import { BrowserRouter as BR, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";

export default function App() {
  return (
    <BR>
      <div className="p-5 md:p-10 lg:p-15 ">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="movie/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </BR>
  );
}
