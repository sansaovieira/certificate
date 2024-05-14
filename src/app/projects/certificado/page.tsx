'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import Confetti from 'react-confetti';

const WebDesignPage = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [quiz, setQuiz] = useState('');
  const [selectedTopping, setSelectedTopping] = useState('Medium');
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
            <input
              type="radio"
              name="topping"
              value=" Ele coloca uma armadura de metal em torno do servidor DNS."
              id=" Ele coloca uma armadura de metal em torno do servidor DNS."
              checked={selectedTopping === ' Ele coloca uma armadura de metal em torno do servidor DNS.'}
              onChange={e => setSelectedTopping(e.target.value)}
            />
            <label htmlFor=" Ele coloca uma armadura de metal em torno do servidor DNS."> Ele coloca uma armadura de metal em torno do servidor DNS.</label>
            <br />

            <input
              type="radio"
              name="topping"
              value=" Ele transforma os servidores DNS em super-heróis para combater as ameaças."
              id=" Ele transforma os servidores DNS em super-heróis para combater as ameaças."
              checked={selectedTopping === ' Ele transforma os servidores DNS em super-heróis para combater as ameaças.'}
              onChange={e => setSelectedTopping(e.target.value)}
            />
            <label htmlFor=" Ele transforma os servidores DNS em super-heróis para combater as ameaças."> Ele transforma os servidores DNS em super-heróis para combater as ameaças.</label>
            <br />

            <input
              type="radio"
              name="topping"
              value=" Ele adiciona uma camada de criptografia para garantir a autenticidade e integridade dos dados do DNS."
              id=" Ele adiciona uma camada de criptografia para garantir a autenticidade e integridade dos dados do DNS."
              checked={selectedTopping === ' Ele adiciona uma camada de criptografia para garantir a autenticidade e integridade dos dados do DNS.'}
              onChange={e => setSelectedTopping(e.target.value)}
            />
            <label htmlFor=" Ele adiciona uma camada de criptografia para garantir a autenticidade e integridade dos dados do DNS."> Ele adiciona uma camada de criptografia para garantir a autenticidade e integridade dos dados do DNS.</label>
            <br />

            <input
              type="radio"
              name="topping"
              value="	Ele oferece conselhos valiosos sobre como os servidores DNS podem cuidar melhor de suas plantas."
              id=" Ele oferece conselhos valiosos sobre como os servidores DNS podem cuidar melhor de suas plantas."
              checked={selectedTopping === '	Ele oferece conselhos valiosos sobre como os servidores DNS podem cuidar melhor de suas plantas.'}
              onChange={e => setSelectedTopping(e.target.value)}
            />
            <label htmlFor="	Ele oferece conselhos valiosos sobre como os servidores DNS podem cuidar melhor de suas plantas.">	Ele oferece conselhos valiosos sobre como os servidores DNS podem cuidar melhor de suas plantas.</label>
            <br />

          </label>
          <label className="block">
            <span className="block text-sm font-bold text-slate-500">2.	Qual é a importância de um Firewall de DNS para a segurança?</span>

            <input
              type="radio"
              name="topping"
              value=" Ele impede que as consultas de DNS sejam interceptadas por aliens curiosos."
              id=" Ele impede que as consultas de DNS sejam interceptadas por aliens curiosos."
              checked={selectedTopping === ' Ele impede que as consultas de DNS sejam interceptadas por aliens curiosos.'}
              onChange={e => setSelectedTopping(e.target.value)}
            />
            <label htmlFor=" Ele impede que as consultas de DNS sejam interceptadas por aliens curiosos."> Ele impede que as consultas de DNS sejam interceptadas por aliens curiosos.</label>
            <br />

            <input
              type="radio"
              name="topping"
              value=" Ele cria uma barreira impenetrável ao redor dos registros DNS."
              id=" Ele cria uma barreira impenetrável ao redor dos registros DNS."
              checked={selectedTopping === ' Ele cria uma barreira impenetrável ao redor dos registros DNS.'}
              onChange={e => setSelectedTopping(e.target.value)}
            />
            <label htmlFor=" Ele cria uma barreira impenetrável ao redor dos registros DNS."> Ele cria uma barreira impenetrável ao redor dos registros DNS.</label>
            <br />

            <input
              type="radio"
              name="topping"
              value=" Ele monitora e filtra o tráfego de DNS para bloquear ameaças e ataques maliciosos. "
              id=" Ele monitora e filtra o tráfego de DNS para bloquear ameaças e ataques maliciosos. "
              checked={selectedTopping === ' Ele monitora e filtra o tráfego de DNS para bloquear ameaças e ataques maliciosos. '}
              onChange={e => setSelectedTopping(e.target.value)}
            />
            <label htmlFor=" Ele monitora e filtra o tráfego de DNS para bloquear ameaças e ataques maliciosos. "> Ele monitora e filtra o tráfego de DNS para bloquear ameaças e ataques maliciosos. </label>
            <br />

            <input
              type="radio"
              name="topping"
              value=" Ele oferece conselhos de vida para servidores DNS que estão passando por uma crise existencial."
              id=" Ele oferece conselhos de vida para servidores DNS que estão passando por uma crise existencial."
              checked={selectedTopping === '	Ele oferece conselhos de vida para servidores DNS que estão passando por uma crise existencial.'}
              onChange={e => setSelectedTopping(e.target.value)}
            />
            <label htmlFor=" d)	Ele oferece conselhos de vida para servidores DNS que estão passando por uma crise existencial."> Ele oferece conselhos de vida para servidores DNS que estão passando por uma crise existencial.</label>
            <br />

          </label>
          <label className="block">
            <span className="block text-sm font-bold text-slate-500">3. O que é um ataque DDoS (Distributed Denial of Service)?</span>

            <input
              type="radio"
              name="topping"
              value=" Um grupo de pombos corre livremente pelos servidores"
              id=" Um grupo de pombos corre livremente pelos servidores"
              checked={selectedTopping === ' Um grupo de pombos corre livremente pelos servidores'}
              onChange={e => setSelectedTopping(e.target.value)}
            />
            <label htmlFor=" Um grupo de pombos corre livremente pelos servidores"> Um grupo de pombos corre livremente pelos servidores</label>
            <br />

            <input
              type="radio"
              name="topping"
              value=" Um exército de hackers dança coreografias elaboradas para distrair os administradores de rede."
              id=" Um exército de hackers dança coreografias elaboradas para distrair os administradores de rede."
              checked={selectedTopping === ' Um exército de hackers dança coreografias elaboradas para distrair os administradores de rede.'}
              onChange={e => setSelectedTopping(e.target.value)}
            />
            <label htmlFor=" Um exército de hackers dança coreografias elaboradas para distrair os administradores de rede."> Um exército de hackers dança coreografias elaboradas para distrair os administradores de rede.</label>
            <br />

            <input
              type="radio"
              name="topping"
              value=" É um ataque em que um grande número de dispositivos infectados sobrecarrega um servidor ou rede, causando indisponibilidade."
              id=" É um ataque em que um grande número de dispositivos infectados sobrecarrega um servidor ou rede, causando indisponibilidade."
              checked={selectedTopping === ' É um ataque em que um grande número de dispositivos infectados sobrecarrega um servidor ou rede, causando indisponibilidade.'}
              onChange={e => setSelectedTopping(e.target.value)}
            />
            <label htmlFor=" É um ataque em que um grande número de dispositivos infectados sobrecarrega um servidor ou rede, causando indisponibilidade."> É um ataque em que um grande número de dispositivos infectados sobrecarrega um servidor ou rede, causando indisponibilidade.</label>
            <br />

            <input
              type="radio"
              name="topping"
              value=" É um concurso de quem pode gritar mais alto no servidor DNS, causando confusão e interrupções."
              id=" É um concurso de quem pode gritar mais alto no servidor DNS, causando confusão e interrupções."
              checked={selectedTopping === 'É um concurso de quem pode gritar mais alto no servidor DNS, causando confusão e interrupções.'}
              onChange={e => setSelectedTopping(e.target.value)}
            />
            <label htmlFor=" É um concurso de quem pode gritar mais alto no servidor DNS, causando confusão e interrupções."> É um concurso de quem pode gritar mais alto no servidor DNS, causando confusão e interrupções.</label>
            <br />

  
          </label>
          <label className="block">
            <span className="block text-sm font-bold text-slate-500">4. Onde o DHCP da sua empresa costuma se esconder ?</span>
            
            <input
              type="radio"
              name="topping"
              value=" No porão, fazendo festas secretas com os cabos de rede."
              id=" No porão, fazendo festas secretas com os cabos de rede."
              checked={selectedTopping === ' No porão, fazendo festas secretas com os cabos de rede.'}
              onChange={e => setSelectedTopping(e.target.value)}
            />
            <label htmlFor=" No porão, fazendo festas secretas com os cabos de rede."> No porão, fazendo festas secretas com os cabos de rede.</label>
            <br />

            <input
              type="radio"
              name="topping"
              value=" Em uma viagem surpresa para o Havaí, deixando todos os dispositivos sem endereços IP."
              id=" Em uma viagem surpresa para o Havaí, deixando todos os dispositivos sem endereços IP."
              checked={selectedTopping === ' Em uma viagem surpresa para o Havaí, deixando todos os dispositivos sem endereços IP.'}
              onChange={e => setSelectedTopping(e.target.value)}
            />
            <label htmlFor=" Em uma viagem surpresa para o Havaí, deixando todos os dispositivos sem endereços IP."> Em uma viagem surpresa para o Havaí, deixando todos os dispositivos sem endereços IP.</label>
            <br />

            <input
              type="radio"
              name="topping"
              value=" Na sala de TI, perto da máquina de café, para ter fácil acesso a uma xícara."
              id=" Na sala de TI, perto da máquina de café, para ter fácil acesso a uma xícara."
              checked={selectedTopping === ' Na sala de TI, perto da máquina de café, para ter fácil acesso a uma xícara.'}
              onChange={e => setSelectedTopping(e.target.value)}
            />
            <label htmlFor=" Na sala de TI, perto da máquina de café, para ter fácil acesso a uma xícara."> Na sala de TI, perto da máquina de café, para ter fácil acesso a uma xícara.</label>
            <br />

            <input
              type="radio"
              name="topping"
              value=" Em um servidor dedicado, responsável por atribuir os endereços IP aos dispositivos da rede."
              id=" Em um servidor dedicado, responsável por atribuir os endereços IP aos dispositivos da rede."
              checked={selectedTopping === 'Em um servidor dedicado, responsável por atribuir os endereços IP aos dispositivos da rede.'}
              onChange={e => setSelectedTopping(e.target.value)}
            />
            <label htmlFor=" Em um servidor dedicado, responsável por atribuir os endereços IP aos dispositivos da rede."> Em um servidor dedicado, responsável por atribuir os endereços IP aos dispositivos da rede.</label>
            <br />
            
  
          </label>
          <label className="block">
            <span className="block text-sm font-bold text-slate-500">5. Onde você deveria procurar se quiser encontrar o DHCP da sua empresa ?</span>
            
            <input
              type="radio"
              name="topping"
              value=" No fundo do mar, em uma aventura digna de um filme de ação."
              id=" No fundo do mar, em uma aventura digna de um filme de ação."
              checked={selectedTopping === ' No fundo do mar, em uma aventura digna de um filme de ação.'}
              onChange={e => setSelectedTopping(e.target.value)}
            />
            <label htmlFor=" No fundo do mar, em uma aventura digna de um filme de ação."> No fundo do mar, em uma aventura digna de um filme de ação.</label>
            <br />

            <input
              type="radio"
              name="topping"
              value=" Na sala do chefe, provavelmente jogando videogame em um momento de tédio."
              id=" Na sala do chefe, provavelmente jogando videogame em um momento de tédio."
              checked={selectedTopping === ' Na sala do chefe, provavelmente jogando videogame em um momento de tédio.'}
              onChange={e => setSelectedTopping(e.target.value)}
            />
            <label htmlFor=" Na sala do chefe, provavelmente jogando videogame em um momento de tédio."> Na sala do chefe, provavelmente jogando videogame em um momento de tédio.</label>
            <br />

            <input
              type="radio"
              name="topping"
              value=" No jardim da empresa, curtindo o sol e tomando uma vitamina D."
              id=" No jardim da empresa, curtindo o sol e tomando uma vitamina D."
              checked={selectedTopping === ' No jardim da empresa, curtindo o sol e tomando uma vitamina D.'}
              onChange={e => setSelectedTopping(e.target.value)}
            />
            <label htmlFor=" No jardim da empresa, curtindo o sol e tomando uma vitamina D."> No jardim da empresa, curtindo o sol e tomando uma vitamina D.</label>
            <br />

            <input
              type="radio"
              name="topping"
              value=" No servidor de rede, que é responsável por atribuir dinamicamente os endereços IP aos dispositivos."
              id=" No servidor de rede, que é responsável por atribuir dinamicamente os endereços IP aos dispositivos."
              checked={selectedTopping === 'No servidor de rede, que é responsável por atribuir dinamicamente os endereços IP aos dispositivos.'}
              onChange={e => setSelectedTopping(e.target.value)}
            />
            <label htmlFor=" No servidor de rede, que é responsável por atribuir dinamicamente os endereços IP aos dispositivos."> No servidor de rede, que é responsável por atribuir dinamicamente os endereços IP aos dispositivos.</label>
            <br />
            
            
          </label>
          <label className="block">
            <span className="block text-sm font-bold text-slate-500">6. Como a empresa mantém o controle dos endereçamentos IP ?</span>
           
            <input
              type="radio"
              name="topping"
              value=" Usando um sistema ultrassecreto de envio de mensagens com pombo - correio treinados em TI."
              id=" Usando um sistema ultrassecreto de envio de mensagens com pombo - correio treinados em TI."
              checked={selectedTopping === ' Usando um sistema ultrassecreto de envio de mensagens com pombo - correio treinados em TI.'}
              onChange={e => setSelectedTopping(e.target.value)}
            />
            <label htmlFor=" Usando um sistema ultrassecreto de envio de mensagens com pombo - correio treinados em TI."> Usando um sistema ultrassecreto de envio de mensagens com pombo - correio treinados em TI.</label>
            <br />

            <input
              type="radio"
              name="topping"
              value=" Anotando todos os endereços IP em post - its coloridos e distribuindo pela sala de TI."
              id=" Anotando todos os endereços IP em post - its coloridos e distribuindo pela sala de TI."
              checked={selectedTopping === ' Anotando todos os endereços IP em post - its coloridos e distribuindo pela sala de TI.'}
              onChange={e => setSelectedTopping(e.target.value)}
            />
            <label htmlFor=" Anotando todos os endereços IP em post - its coloridos e distribuindo pela sala de TI."> Anotando todos os endereços IP em post - its coloridos e distribuindo pela sala de TI.</label>
            <br />

            <input
              type="radio"
              name="topping"
              value=" Deixando um estagiário contar e memorizar todos os endereços IP da empresa."
              id=" Deixando um estagiário contar e memorizar todos os endereços IP da empresa."
              checked={selectedTopping === ' Deixando um estagiário contar e memorizar todos os endereços IP da empresa.'}
              onChange={e => setSelectedTopping(e.target.value)}
            />
            <label htmlFor=" Deixando um estagiário contar e memorizar todos os endereços IP da empresa."> Deixando um estagiário contar e memorizar todos os endereços IP da empresa.</label>
            <br />

            <input
              type="radio"
              name="topping"
              value=" Utilizando um sistema de IPAM(IP Address Management) que organiza e gerencia todos os endereços IP da rede com Discovery automático."
              id=" Utilizando um sistema de IPAM(IP Address Management) que organiza e gerencia todos os endereços IP da rede com Discovery automático."
              checked={selectedTopping === 'Utilizando um sistema de IPAM(IP Address Management) que organiza e gerencia todos os endereços IP da rede com Discovery automático.'}
              onChange={e => setSelectedTopping(e.target.value)}
            />
            <label htmlFor=" Utilizando um sistema de IPAM(IP Address Management) que organiza e gerencia todos os endereços IP da rede com Discovery automático."> Utilizando um sistema de IPAM(IP Address Management) que organiza e gerencia todos os endereços IP da rede com Discovery automático.</label>
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

