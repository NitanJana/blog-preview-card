import './App.css';
import Attribution from './components/Attribution';
import Card from './components/Card';

function App() {
  return (
    <div className="bg-custom-yellow font-primary flex h-screen w-screen items-center justify-center">
      <Card />
      <Attribution />
    </div>
  );
}

export default App;
