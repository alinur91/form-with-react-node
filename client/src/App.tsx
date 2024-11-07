import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import TransactionList from "./components/TransactionList ";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<TransactionList />} />
          <Route path="/submit" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
