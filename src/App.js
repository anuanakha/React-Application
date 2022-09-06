import Layout from './components/Layout'
import FormView from "./components/FormView"
import ViewPro from"./components/ViewPro";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/form" element={<FormView/>}/>
        <Route path="/view" element={<ViewPro/>}/>
         {/* <Route path="/form" element={<Form/>}/> */}
    </Routes>

</Router>
  );
}

export default App;
