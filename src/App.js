import logo from './logo.svg';
import './App.css';
import MapView from './MapView';

function App() {
  return (
    <div className="map-container">
      <div className='map-title'>
        Your current location
      </div>
      <MapView />
    </div>
  );
}

export default App;
