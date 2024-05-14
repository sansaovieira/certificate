'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import Confetti from 'react-confetti';

const WebDesignPage = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [selectedDnssec, setSelectedDnssec] = useState("");
  const [selectedFirewall, setSelectedFirewall] = useState("");
  const [dDoS, setDDoS] = useState("");
  const router = useRouter();

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      router.push('./imagem-certificado');
    }, 5000);
  };

  return (
    <>
      <div className="w-[22rem] text-center md:w-[26rem] md:m-auto 0 md:text-left lg:w-[40rem] lg:m-auto 0">
        <span className="font-bold text-xl">{submitted ? "Parabéns!!!👏" : "OBTENHA O SEU CERTIFICADO"}</span>
        <form
          onSubmit={handleOnSubmit}
          className="border rounded-3xl bg-white px-8 py-8 m-auto 0 text-left mt-4">
          <label className="block">
            <span className="block text-sm font-bold text-slate-700">Nome</span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Nome"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500
"/>
          </label>
          <label className="block">
            <span className="block text-sm font-bold text-slate-700">Email</span>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500
"/>
          </label>
          <label className="block">
            <span className="block text-sm font-bold text-slate-700">Telefone</span>
            <input
              required
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              type="tel"
              placeholder="(11) 949430-2345"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500
"/>
          </label>
          <label className="block">
            <span className="block text-sm font-bold text-slate-700 mt-2">PERGUNTAS: </span>
            <span className="block text-sm font-bold text-slate-500 py-2">1. O que é o DNSSEC (Domain Name System Security Extensions) faz para proteger o DNS?</span>

            <input
              type="radio"
              name="topping"
              value="V,V,F,F,V"
              id="V,V,F,F,V"
              onChange={e => setSelectedDnssec(e.target.value)}
            />
            <label htmlFor="V,V,F,F,V">V,V,F,F,V</label>
            <br />
            <input
              type="radio"
              name="topping"
              value="F,V,F,V,F"
              id="F,V,F,V,F"
              onChange={e => setSelectedDnssec (e.target.value)}
            />
            <label htmlFor="F,V,F,V,F">F,V,F,V,F</label>
            
            <br />

            <input
              type="radio"
              name="topping"
              value="V,V,V,V,V"
              id="V,V,V,V,V"
              onChange={e => setSelectedDnssec(e.target.value)}
            />
            <label htmlFor="V,V,V,V,V">V,V,V,V,V</label>
            <br />

            <input
              type="radio"
              name="topping"
              value="F,F,V,V,F"
              id="F,F,V,V,F"
              onChange={e => setSelectedDnssec(e.target.value)}
            />
            <label htmlFor="F,F,V,V,F">F,F,V,V,F</label>
            <br />         
          </label>
          
          <label className="block">
            <span className="block text-sm font-bold text-slate-500">2.	Qual é a importância de um Firewall de DNS para a segurança?</span>
            <input
              type="radio"
              name="topping"
              value="F,F,F,V,V"
              id="F,F,F,V,V"
              onChange={e => setSelectedFirewall(e.target.value)}
            />
            <label htmlFor="F,F,F,V,V">F,F,F,V,V</label>
            <br />
            <input
              type="radio"
              name="topping"
              value="V,V,V,F,F"
              id="V,V,V,F,F"
              onChange={e => setSelectedFirewall(e.target.value)}
            />
            <label htmlFor="V,V,V,F,F">V,V,V,F,F</label>
            
            <br />

            <input
              type="radio"
              name="topping"
              value="F,F,F,F,F"
              id="F,F,F,F,F"
              onChange={e => setSelectedFirewall(e.target.value)}
            />
            <label htmlFor="F,F,F,F,F">F,F,F,F,F</label>
            <br />

            <input
              type="radio"
              name="topping"
              value="V,V,V,V,F"
              id="V,V,V,V,F"
              onChange={e => setSelectedFirewall(e.target.value)}
            />
            <label htmlFor="V,V,V,V,F">V,V,V,V,F</label>
            <br />

          </label>
          <label className="block">
            <span className="block text-sm font-bold text-slate-500">3. O que é um ataque DDoS (Distributed Denial of Service)?</span>
            <input
              type="radio"
              name="topping"
              value="F,F,F,F,F"
              id="F,F,F,F,F"
              onChange={e => setSelectedFirewall(e.target.value)}
            />
            <label htmlFor="F,F,F,F,F">F,F,F,F,F</label>
            <br />
            <input
              type="radio"
              name="topping"
              value="V,V,V,F,F"
              id="V,V,V,F,F"
              onChange={e => setSelectedFirewall(e.target.value)}
            />
            <label htmlFor="V,V,V,F,F">V,V,V,F,F</label>
            
            <br />

            <input
              type="radio"
              name="topping"
              value="F,F,F,F,F"
              id="F,F,F,F,F"
              onChange={e => setSelectedFirewall(e.target.value)}
            />
            <label htmlFor="F,F,F,F,F">F,F,F,F,F</label>
            <br />

            <input
              type="radio"
              name="topping"
              value="V,V,V,V,F"
              id="V,V,V,V,F"
              onChange={e => setSelectedFirewall(e.target.value)}
            />
            <label htmlFor="V,V,V,V,F">V,V,V,V,F</label>
            <br />

          </label>
          <label className="block">
            <span className="block text-sm font-bold text-slate-500">4. Onde o DHCP da sua empresa costuma se esconder ?</span>
            <input
              type="radio"
              name="topping"
              value="V,V,F,F,V"
              id="V,V,F,F,V"
              onChange={e => setSelectedDnssec(e.target.value)}
            />
            <label htmlFor="V,V,F,F,V">V,V,F,F,V</label>
            <br />
            <input
              type="radio"
              name="topping"
              value="F,V,F,V,F"
              id="F,V,F,V,F"
              onChange={e => setSelectedDnssec(e.target.value)}
            />
            <label htmlFor="F,V,F,V,F">F,V,F,V,F</label>
            
            <br />

            <input
              type="radio"
              name="topping"
              value="V,V,V,V,V"
              id="V,V,V,V,V"
              onChange={e => setSelectedDnssec(e.target.value)}
            />
            <label htmlFor="V,V,V,V,V">V,V,V,V,V</label>
            <br />

            <input
              type="radio"
              name="topping"
              value="F,F,V,V,F"
              id="F,F,V,V,F"
              onChange={e => setSelectedDnssec(e.target.value)}
            />
            <label htmlFor="F,F,V,V,F">F,F,V,V,F</label>
            <br />

          </label>
          <label className="block">
            <span className="block text-sm font-bold text-slate-500">5. Onde você deveria procurar se quiser encontrar o DHCP da sua empresa ?</span>
            <input
              type="radio"
              name="topping"
              value="V,V,F,F,V"
              id="V,V,F,F,V"
              onChange={e => setSelectedDnssec(e.target.value)}
            />
            <label htmlFor="V,V,F,F,V">V,V,F,F,V</label>
            <br />
            <input
              type="radio"
              name="topping"
              value="F,V,F,V,F"
              id="F,V,F,V,F"
              onChange={e => setSelectedDnssec(e.target.value)}
            />
            <label htmlFor="F,V,F,V,F">F,V,F,V,F</label>
            
            <br />

            <input
              type="radio"
              name="topping"
              value="V,V,V,V,V"
              id="V,V,V,V,V"
              onChange={e => setSelectedDnssec(e.target.value)}
            />
            <label htmlFor="V,V,V,V,V">V,V,V,V,V</label>
            <br />

            <input
              type="radio"
              name="topping"
              value="F,F,V,V,F"
              id="F,F,V,V,F"
              onChange={e => setSelectedDnssec(e.target.value)}
            />
            <label htmlFor="F,F,V,V,F">F,F,V,V,F</label>
            <br />
            
          </label>
          <label className="block">
            <span className="block text-sm font-bold text-slate-500">6. Como a empresa mantém o controle dos endereçamentos IP ?</span>
            
            <input
              type="radio"
              name="topping"
              value="V,V,F,F,V"
              id="V,V,F,F,V"
              onChange={e => setSelectedDnssec(e.target.value)}
            />
            <label htmlFor="V,V,F,F,V">V,V,F,F,V</label>
            <br />
            <input
              type="radio"
              name="topping"
              value="F,V,F,V,F"
              id="F,V,F,V,F"
              onChange={e => setSelectedDnssec(e.target.value)}
            />
            <label htmlFor="F,V,F,V,F">F,V,F,V,F</label>
            
            <br />

            <input
              type="radio"
              name="topping"
              value="V,V,V,V,V"
              id="V,V,V,V,V"
              onChange={e => setSelectedDnssec(e.target.value)}
            />
            <label htmlFor="V,V,V,V,V">V,V,V,V,V</label>
            <br />

            <input
              type="radio"
              name="topping"
              value="F,F,V,V,F"
              id="F,F,V,V,F"
              onChange={e => setSelectedDnssec(e.target.value)}
            />
            <label htmlFor="F,F,V,V,F">F,F,V,V,F</label>
            <br />
            
          </label>
          <button className=" bg-[#89c2c1]  hover:bg-[#2c5756] text-white mt-4 p-1 rounded-md text-center w-full">
            Enviar
          </button>
        </form>
      </div>
      {submitted && (
        <div>
          <h1 className="text-center font-semibold text-3xl"></h1>
          <Confetti />
        </div>
      )}
    </>
  );
};

export default WebDesignPage;

