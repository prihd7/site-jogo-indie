ult function ContatoGris() {
  const [status, setStatus] = useState('');

  const enviarMensagem = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    // Pega os dados que o usuário digitou
    const dados = {
      nome: e.target.nome.value,
      email: e.target.email.value,
      mensagem: e.target.mensagem.value,
    };

    // Manda os dados para a "Pasta API" que vai conversar com o Firebase
    const resposta = await fetch('/api/contato', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados),
    });

    if (resposta.ok) {
      setStatus('Mensagem enviada com sucesso! A jornada continua.');
      e.target.reset();
    } else {
      setStatus('Erro ao enviar. Tente novamente.');
    }
  };

  return (
    // MUDANÇA: Fundo agora é u'use client';
import { useState } from 'react';

export defam rosa/vermelho bem pálido (bg-red-50)
    <div className="min-h-screen bg-red-50 flex flex-col items-center justify-center p-4">
      
      {/* MUDANÇA: Borda superior vermelha (border-red-400) */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full border-t-4 border-red-400">
        
        {/* MUDANÇA: Título "Gris" em vermelho escuro (text-red-700) */}
        <h1 className="text-3xl font-light text-red-700 mb-2 text-center">Gris</h1>
        <p className="text-gray-500 text-sm text-center mb-6">Entre em contato para saber mais sobre o projeto.</p>
        
        <form onSubmit={enviarMensagem} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Nome</label>
            {/* MUDANÇA: Foco da borda em vermelho (focus:border-red-400) */}
            <input type="text" name="nome" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-400" placeholder="Seu nome" />
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">E-mail</label>
            {/* MUDAN
