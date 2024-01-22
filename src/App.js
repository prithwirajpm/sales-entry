import './App.css';
import MainBody from './Component/MainBody';
import ContextShare from './ContextAPI/ContextShare';

function App() {
  return (
    <ContextShare>
    <div className="App">
      <MainBody />
    </div>
    </ContextShare>
  );
}

export default App;
