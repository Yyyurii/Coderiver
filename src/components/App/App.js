import './App.scss';
import Sidebar from "../Sidebar";
import Main from '../Main';

const App = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
