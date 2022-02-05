import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [bill, setBill] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [tip, setTip] = useState('');
  
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  function handleTip(value) {
    setTip(value);
  }

  function reset(){
    setTipAmount(0);
    setTotal(0);
    setBill('');
    setNumPeople('');
    setTip('');
    
  }

  useEffect(() => {
    if(bill !== ''){
      console.log('teste')
      let discount = (Number(bill) * Number(tip))
      setTipAmount( discount / Number(numPeople));
      setTotal(((discount + Number(bill)) / 5.0));
    }
  }, [bill && numPeople && tip]);

  return (
    <div className="container">
      <h1>S P L I<br/>T T E R</h1>
      
      <main>

        <article className='main-left'>

          <div className='bill'>
            <h2>Bill</h2>
            <div>
              <img src="./icon-dollar.svg" alt='Icon Dollar' />
              <input 
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                placeholder='0'
              />
            </div>
          </div>

          <div className='tip'>
            <h2>Select Tip %</h2>
            <div>
              <button onClick={() => handleTip(0.05)}>5%</button>
              <button onClick={() => handleTip(0.10)}>10%</button>
              <button onClick={() => handleTip(0.15)}>15%</button>
              <button onClick={() => handleTip(0.25)}>25%</button>
              <button onClick={() => handleTip(0.50)}>50%</button>
              <input 
                placeholder="Custom"
                onChange={(e) => handleTip(e.target.value)}

              />
            </div>
          </div>

          <div className='num-people'>
            <h2>Number of People</h2>
            <div>
              <img src='./icon-person.svg' alt='Icon Person'/>
              <input 
                value={numPeople}
                onChange={(e) => setNumPeople(e.target.value)}
                placeholder='0'
              />

            </div>
          </div>
        </article>

        <article className="main-right">

          <div className='main-right-type'>
            <div>
              <h3>Tip Amount</h3>
              <span>/ person</span>
            </div>
            <h2>${tipAmount.toFixed(2)}</h2>
          </div>

          <div className='main-right-type'>
            <div>
              <h3>Total</h3>
              <span>/ person</span>
            </div>
            <h2>${total.toFixed(2)}</h2>
          </div>

          <button onClick={reset}>RESET</button>
        </article>
      </main>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.linkedin.com/in/marcos-paulo-fontes-feitosa-894525182/">Marcos Paulo</a>.
      </div>
    </div>
  );
}

export default App;
