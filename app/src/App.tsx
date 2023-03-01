import React from 'react';
import './App.css';
// TODO: Change prime numbers to UseState

let primeNumbers: number[] = [];
const numberOfPrimes: number = primeNumbers.length;
let maxNumber: number;

function isPrime(n: number) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  primeNumbers.push(n);
  return true;
};

function findPrimeNumbers(n: number) {
  for (let i = 0; i < n; i++) {
    isPrime(i);
  }
  console.log(primeNumbers);
  console.log(maxNumber);
  return primeNumbers;
};

function App() {
  return (
    <div className="App">
      <input type="number" value={maxNumber} onChange={e => maxNumber = parseInt(e.target.value)} />
      <button onClick={() => findPrimeNumbers(maxNumber)}>Find Prime Numbers</button>
      <p>Number of Prime Numbers: {numberOfPrimes}</p>
      <div className="primeNumbers">
        {primeNumbers.map((number) => {
          return <p>{number}</p>
        })}
        </div>
    </div>
  );
}

export default App;
