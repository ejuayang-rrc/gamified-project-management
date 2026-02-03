import Footer from "./components/common/footer/Footer";
import Nav from "./components/common/nav/Nav";
import './App.css'
import Header from "./components/common/header/Header";
import DepartmentDashboard from "./components/pages/layout/DepartmentDashboard/DepartmentDashboard";

function App() {

  return (
    <>
      <Header />
      <Nav />
      <DepartmentDashboard/>
      <Footer />
    </>
  )
}

export default App
