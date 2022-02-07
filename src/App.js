import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [bill, setBill] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [tip, setTip] = useState('');

  const [selectButton, setSelectButton] = useState(0);
  
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [customTip, setCustomTip] = useState('');

  const [mensageNumPeoples, setMensageNumPeoples] = useState(false);
  const [mensageBill, setMensageBill] = useState(false);

  function handleTip(value, type='0') {
    if (type === '1'){
      setCustomTip(value);
      setTip(value);
    } else {
      setTip(value);
    }
    setSelectButton(value);
    
  }

  function handleNumPeople(value) {
    setNumPeople(value);
    setMensageNumPeoples(false);
  }

  function handleBill(value) {
    setBill(value);
    setMensageBill(false);
  }

  function reset(){
    setTipAmount(0);
    setTotal(0);
    setBill('');
    setNumPeople('');
    setTip('');
    setCustomTip('');
    setSelectButton(0);    
    setMensageNumPeoples(false);
    setMensageBill(false);
  }

  useEffect(() => {
    if(bill !== '' && numPeople !== '' && tip !== '') {
      if(Number(numPeople) < 1){
        setMensageNumPeoples(true);
      } else if(Number(bill) < 1) {
        setMensageBill(true);
      } else{
        console.log('teste')
        let discount = (Number(bill) * (Number(tip) / 100))
        setTipAmount( discount / Number(numPeople));
        setTotal(((discount + Number(bill)) / numPeople));
      }
      
    }
  }, [bill, numPeople, tip]);

  return (
    <div className="container">
      <header>
        <img src='./logo.svg' alt='Logo'/>
      </header>
      
      <main>

        <article className='main-left'>

          <div className='bill'>
            <div>
              <label>Bill</label>
              {mensageBill && (
                <span>Can't be zero</span>
              )}
            </div>
            <input 
              type='number'
              value={bill}
              onChange={(e) => handleBill(e.target.value)}
              className={`${mensageBill && 'errroInput'}`}
              placeholder='0'
            />
          </div>

          <div className='tip'>
            <label>Select Tip %</label>
            <div>
              <button onClick={() => handleTip(5)} className={`${selectButton === 5 ? 'selectButton' : 'tip-button'}`}>5%</button>
              <button onClick={() => handleTip(10)} className={`${selectButton === 10 ? 'selectButton' : 'tip-button'}`}>10%</button>
              <button onClick={() => handleTip(15)} className={`${selectButton === 15 ? 'selectButton' : 'tip-button'}`}>15%</button>
              <button onClick={() => handleTip(25)} className={`${selectButton === 25 ? 'selectButton' : 'tip-button'}`}>25%</button>
              <button onClick={() => handleTip(50)} className={`${selectButton === 50 ? 'selectButton' : 'tip-button'}`}>50%</button>
              <input 
                placeholder="Custom"
                onChange={(e) => handleTip(e.target.value, '1')}
                value={customTip}
                onClick={() => setSelectButton(0)}
              />
            </div>
          </div>

          <div className='num-people'>
            <div>
              <label>Number of People</label>
              {mensageNumPeoples && (
                <span>Can't be zero</span>
              )}
            </div>
            <input
              type='number' 
              value={numPeople}
              onChange={(e) => handleNumPeople(e.target.value)}
              className={`${mensageNumPeoples && 'errroInput'}`}
              placeholder='0'
            />
          </div>
        </article>

        <article className="main-right">

          <div className='main-right-type'>
            <div>
              <p>Tip Amount</p>
              <span>/ person</span>
            </div>
            <h1>${tipAmount.toFixed(2)}</h1>
          </div>

          <div className='main-right-type'>
            <div>
              <p>Total</p>
              <span>/ person</span>
            </div>
            <h1>${total.toFixed(2)}</h1>
          </div>

          <button onClick={reset} >RESET</button>
        </article>
      </main>

      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.linkedin.com/in/marcos-paulo-fontes-feitosa-894525182/">Marcos Paulo</a>.
      </footer>
    </div>
  );
}

export default App;
