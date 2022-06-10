//import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
          <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <Card type="FREE" charge="0" user="Single" storage="5" />
          <Card type="PLUS" charge="9" user="5" storage="50" />
          <Card type="PRO" charge="49" user="Unlimited" storage="150" />
        </div>
      </div>
    </section>
    </div>
  );
}

export default App;
