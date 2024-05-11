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
              <option>a) Ele coloca uma armadura de metal em torno do servidor DNS.</option>
              <option>b) Ele transforma os servidores DNS em super-heróis para combater as ameaças.</option>
              <option>c) Ele adiciona uma camada de criptografia para garantir a autenticidade e integridade dos dados do DNS. </option>
              <option>d) Ele oferece conselhos valiosos sobre como os servidores DNS podem cuidar melhor de suas plantas.</option>
            </select>
          </label>
          <label className="block">
            <span className="block text-sm font-bold text-slate-500">2.	Qual é a importância de um Firewall de DNS para a segurança?</span>
            <select id="pricingType" name="pricingType"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
              <option>a) Ele impede que as consultas de DNS sejam interceptadas por aliens curiosos.</option>
              <option>b) Ele cria uma barreira impenetrável ao redor dos registros DNS.</option>
              <option>c) Ele monitora e filtra o tráfego de DNS para bloquear ameaças e ataques maliciosos.</option>
              <option>d) Ele oferece conselhos de vida para servidores DNS que estão passando por uma crise existencial.</option>
            </select>
          </label>
          <label className="block">
            <span className="block text-sm font-bold text-slate-500">3. O que é um ataque DDoS (Distributed Denial of Service)?</span>
            <select id="pricingType" name="pricingType"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
              <option>a) Um grupo de pombos corre livremente pelos servidores <b>DNS</b></option>
              <option>b) Um exército de hackers dança coreografias elaboradas para distrair os administradores de rede.</option>
              <option>c) É um ataque em que um grande número de dispositivos infectados sobrecarrega um servidor ou rede, causando indisponibilidade.</option>
              <option>d) É um concurso de quem pode gritar mais alto no servidor DNS, causando confusão e interrupções.</option>
            </select>
          </label>
          <label className="block">
            <span className="block text-sm font-bold text-slate-500">4. Onde o DHCP da sua empresa costuma se esconder ?</span>
            <select id="pricingType" name="pricingType"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
              <option>a) No porão, fazendo festas secretas com os cabos de rede.</option>
              <option>b) Em uma viagem surpresa para o Havaí, deixando todos os dispositivos sem endereços IP.</option>
              <option>c) Na sala de TI, perto da máquina de café, para ter fácil acesso a uma xícara.</option>
              <option>d) Em um servidor dedicado, responsável por atribuir os endereços IP aos dispositivos da rede.</option>
            </select>
          </label>
          <label className="block">
            <span className="block text-sm font-bold text-slate-500">5. Onde você deveria procurar se quiser encontrar o DHCP da sua empresa ?</span>
            <select id="pricingType" name="pricingType"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
              <option>a) No fundo do mar, em uma aventura digna de um filme de ação.</option>
              <option>b) Na sala do chefe, provavelmente jogando videogame em um momento de tédio.</option>
              <option>c) No jardim da empresa, curtindo o sol e tomando uma vitamina D.</option>
              <option>d) No servidor de rede, que é responsável por atribuir dinamicamente os endereços IP aos dispositivos.</option>
            </select>
          </label>
          <label className="block">
            <span className="block text-sm font-bold text-slate-500">6. Como a empresa mantém o controle dos endereçamentos IP ?</span>
            <select id="pricingType" name="pricingType"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
              <option>a) Usando um sistema ultrassecreto de envio de mensagens com pombo - correio treinados em TI.</option>
              <option>b) Anotando todos os endereços IP em post - its coloridos e distribuindo pela sala de TI.</option>
              <option>c) Deixando um estagiário contar e memorizar todos os endereços IP da empresa.</option>
              <option>d) Utilizando um sistema de IPAM(IP Address Management) que organiza e gerencia todos os endereços IP da rede com Discovery automático.</option>
            </select>
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

