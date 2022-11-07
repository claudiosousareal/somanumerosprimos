import { useState } from "react";
import './Style.css'

export default function App() {
  const [sumNumPrimos, setSumNumPrimos] = useState([]);
  const [form, setForm] = useState("");

  const handleChange = (event) => {
    /*  console.log('event 1', event.target.name)
     console.log('event 2', event.target.value) */
    setForm({ ...form, [event.target.name]: event.target.value });
    /* console.log("form", form); */
  };

  const handleSumPrimes = () => {
    const numerosPrimos = exibePrimos(form.inicial, form.final);
    setSumNumPrimos(numerosPrimos);
    console.log(numerosPrimos);
  };

  const isPrime = (numero) => {
    var divisores = 0;
    for (var i = 0; i <= numero; i++) {
      if (numero % i === 0) {
        divisores++;
      }
    }
    if (divisores === 2) {
      return true;
      /* console.log(`o numero ${numero} É primo!`); */
    }
  };

  const exibePrimos = (inicial, final) => {
    if (inicial >= final) {
      console.log("o número inicial precisa ser menor que o final");
    } else {
      var sumPrime = [];
      for (var i = inicial; i <= final; i++) {
        if (isPrime(i) === true) {
          /* console.log(i + " é " + isPrime(i)); */
          sumPrime.push(i);
        }
      }
      return (
        sumPrime
        /* "os números primos entre " + inicial + " e " + final + ": " + sumPrime */
      );
    }
  };

  /* console.log(exibePrimos(1, 1000)); */
  /*   isPrime(numero); */

  return (
    <div className="App">
      <div className="Form">
        <input
          type="text"
          name="inicial"
          placeholder="Valor inicial"
          onChange={handleChange}
        />
        <input
          type="text"
          name="final"
          placeholder="Valor final"
          onChange={handleChange}
        />
        <button onClick={handleSumPrimes} className="button">Imprimir Números Primos</button>
      </div>
      <div className="exibeNumeros">
        <div className="exibeTodosOsNumeros">
        { sumNumPrimos.length === 0 ? <span>{"Digite o valor inicial e final"}</span>: sumNumPrimos.map( numero => {
          return <span key={numero}> - { numero } - </span>
        }) }
        </div>
        <div className="exibeSomaPrimos">
          { sumNumPrimos.length === 0 ? <span>{""}</span> : <span>{ `Entre ${form.inicial} e ${form.final} tem ${sumNumPrimos.length} numeros primos` }</span>}
        </div>
      </div>
    </div>
  );
}
