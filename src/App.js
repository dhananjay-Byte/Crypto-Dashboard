
import Navbar from './components/navbar';
import TrendingCoins from './components/trending';
import SearchBar from './components/searchbar';
import './App.css';
import CoinDetails from './components/coinDetails';
import ChartData from './components/charts';
function App() {

  return (
    <>
      <Navbar/>
      <TrendingCoins/>
      <SearchBar/>
      <CoinDetails/>
      <ChartData/>
    </>
  );
}

export default App;
