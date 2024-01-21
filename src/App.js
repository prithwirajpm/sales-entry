import './App.css';
import MainBody from './Component/MainBody';
import ContextShare from './ContextAPI/ContextShare';

function App() {
  return (
    <div className="App">
      <ContextShare>
      <MainBody />
      </ContextShare>
    </div>
  );
}

export default App;
