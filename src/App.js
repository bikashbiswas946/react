import logo from './logo.svg';
import './App.css';
import Order from './order';
const h = [1, 2, 3, 4, 5, 6]

const Card = val => {
  return (
    <div>
      <h1>{val}</h1>
      <Order />
    </div>
  )
}

function App() {
  const name = 'bikash biswas';
  const style = {
    textTransform: 'capitalize',
    color: 'red',
    fontSize: '40px'
  }
  return (
    <>
     <div className='App-header'>
     <h1> my name is <span style={style}> {name}</span></h1>
      <img src={logo} className="App-logo" alt="logo" />
     </div>
      {h.map((val) => {
        return (
          <h1>{val}</h1>,
          <div className='App-child'>
            {h.map(Card) }
          </div>
        )
      })}
    </>
  );
}

export default App;