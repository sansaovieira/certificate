'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import Confetti from 'react-confetti';

const WebDesignPage = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [quiz, setQuiz] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      router.push('./image'); 
    }, 5000); 
  };

  return (
    <>
      <span className="font-bold text-4xl">Certificate</span>

      <form
        onSubmit={handleOnSubmit}
        className="border rounded-3xl bg-white px-8 py-8 leading-8 
     w-[26rem] h-4/5 m-auto 0">
        <label className="block">
          <span className="block text-sm font-bold text-slate-700">Nome</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
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
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            type="tel"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
        </label>
        <label className="block">
          <span className="block text-sm font-bold text-slate-700 py-2">1. O que o DNSSEC (Domain Name System Security Extensions) faz para proteger o DNS?</span>
          <select
            value={quiz}
            onChange={(e) => setQuiz(e.target.value)}
            id="pricingType"
            name="pricingType"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
            <option value="Freemium">Ele coloca uma armadura de metal em torno do servidor DNS.</option>
            <option>Ele transforma os servidores DNS em super-heróis para combater as ameaças.</option>
            <option>Ele adiciona uma camada de criptografia para garantir a autenticidade e integridade dos dados do DNS. </option>
            <option>Ele oferece conselhos valiosos sobre como os servidores DNS podem cuidar melhor de suas plantas.</option>
          </select>
        </label>
        <label className="block">
          <span className="block text-sm font-bold text-slate-700 py-2">2.	Qual é a importância de um Firewall de DNS para a segurança?</span>
          <select id="pricingType" name="pricingType"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
            <option>Ele impede que as consultas de DNS sejam interceptadas por aliens curiosos.</option>
            <option>Ele cria uma barreira impenetrável ao redor dos registros DNS.</option>
            <option>Ele monitora e filtra o tráfego de DNS para bloquear ameaças e ataques maliciosos.</option>
            <option>Ele oferece conselhos de vida para servidores DNS que estão passando por uma crise existencial.</option>
          </select>
        </label>
        <button className="bg-[#677583] 
        hover:bg-[#6b7b8b] text-white mt-4 p-1 rounded-md text-center w-full">
          Send
        </button>
      </form>
      {submitted && (
        <div>
          <h1 className="text-center font-semibold text-3xl">Thank you for filling out the form</h1>
          <Confetti />
        </div>
      )}
    </>
  );
};

export default WebDesignPage;