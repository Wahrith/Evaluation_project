import './App.css';
import MainPage from './modules/bluetoothPage';
import HelpCenter from './modules/helpCenter';
import BluetoothConnector from './modules/bluetoothConnector';

function App() {
  return (
    <section className="App">
      <MainPage />
      <BluetoothConnector />
      <HelpCenter />
    </section>
  );
}

export default App;


