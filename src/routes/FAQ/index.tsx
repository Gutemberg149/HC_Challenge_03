import React, { useState } from 'react';

export default  function FAQ () {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "1. O que é o Hospital das Clínicas?",
      answer: "O Hospital das Clinicas é um hospital universitário que oferece atendimento em diversas especialidades médicas.",
      link: null
    },
    {
      question: "2. Como cadastrar senha?",
      answer: "No primeiro acesso clica no botão cadastra senha e siga o passo a passo...",
      link: { text: "Click aqui para mais informações", href: "../index.html#ancora-cadastrar-senha" }
    },
    {
      question: "3. Como criar conta?",
      answer: "Na parte criar conta preencha suas informações e siga o passo a passo...",
      link: { text: "Click aqui para mais informações", href: "../index.html#ancora-criar-conta" }
    },
    {
      question: "4. Como acessar a conta?",
      answer: "Após ter realizado o cadastro, para acessar a conta do paciente, digite o cpf e senha e clique em acessar...",
      link: { text: "Click aqui para mais informações", href: "../index.html#ancora-acessar-conta" }
    },
    {
      question: "5. Como começar teleconsulta?",
      answer: "Após ter realizado o cadastro, para acessar a conta do paciente, digite o cpf e senha e clique em acessar...",
      link: { text: "Click aqui para mais informações", href: "../index.html#ancora-abrir-teleconsulta" }
    },
    {
      question: "6. Como entrar na teleconsulta?",
      answer: "A agenda será aberta na tela. Clique no botão azul entrar na teleconsulta...",
      link: { text: "Click aqui para mais informações", href: "../index.html#ancora-entrando-teleconsulta" }
    },
    {
      question: "7. Como habilitar o microfone?",
      answer: "Clique na opção microfone. Na sequência, um teste de áudio é exibido...",
      link: { text: "Click aqui para mais informações", href: "../index.html#ancora-habilitar-microfone" }
    },
    {
      question: "8. Como habilitar a camera?",
      answer: "Ao entrar na sala de teleconsulta você precisa habilitar a câmera...",
      link: { text: "Click aqui para mais informações", href: "../index.html#ancora-habilitar-camera" }
    }
  ];

  return (
    <div className="w-[100vw] mx-auto p-6 flex flex-col justify-between items-center bg-blue-50" >

      <div className="mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-blue-950">Hospital Das Clínicas - FAQ</h1>
      </div>

      <div className='w-[80vw] flex flex-col md:flex-col lg:flex-row justify-between items-center'>
      
      <h2 className='w-30% sm:text-1xl md:text-2xl  lg:text-4xl font-bold text-blue-950 mb-3 '> Perguntas Mais Frequentes</h2>

      <div className="space-y-4 w-[80%]">
        {faqItems.map((item, index) => (
          <div 
            key={index}
            className=" overflow-hidden transition-all duration-300 bg-blue-500"
          >
            <button
              className="flex justify-between items-center w-full p-4 text-left font-medium text-foreground bg-muted hover:bg-accent transition-colors"
              onClick={() => toggleItem(index)}
              aria-expanded={openIndex === index}
            >
              <span className="pr-4">{item.question}</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div 
              className={`bg-white overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="p-4 text-foreground">
                <p className="mb-3">{item.answer}</p>
                {item.link && (
                  <a 
                    href={item.link.href} 
                    className="text-primary hover:text-primary/80 transition-colors flex items-center font-medium"
                  >
                    <span className="mr-1">{item.link.text}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      </div>
    </div>
  );
};
