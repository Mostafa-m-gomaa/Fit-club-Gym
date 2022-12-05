import './App.css';
import Footer from './component/footer/Footer';
import Hero from './component/hero/hero';
import Join from './component/join/Join';
import Plans from './component/plans/Plans';
import Programs from './component/programs/programs';
import Testi from './component/testi/Testi';
import WhyUs from './component/whyus/whyus';
function App() {
  return (
    <div className="App">
         
          <Hero />
          <Programs />
          <WhyUs />
          <Plans />
          <Testi />
          <Join />
          <Footer />
    </div>
  );
}

export default App;
