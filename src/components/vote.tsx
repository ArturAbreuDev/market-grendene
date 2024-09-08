import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_URL = 'https://dotnet-server-gi1x.onrender.com/api/voting/results';
const API_URL_POST = 'https://dotnet-server-gi1x.onrender.com/api/voting/vote';
const HEADERS = {
  'Content-Type': 'application/json',
};

const showError = (message: string) => toast.error(`${message}`);

const showSuccess = (message: string) => toast.success(message);

function Vote() {
  const [market, setMarket] = useState('');
  const [clientId, setClientId] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const handleVote = async () => {
    try {
      const body = JSON.stringify({ MarketId: market, ClientId: clientId });
      const response = await fetch(API_URL_POST, {
        method: 'POST',
        headers: HEADERS,
        body,
      });

      if (!response.ok) {
        const errorText = await response.text();
        return showError(errorText);
      }

      showSuccess('Voto registrado com sucesso!');
      fetchResults(); 
    } catch (error) {
      showError(String(error));
    }
  };

  const fetchResults = async () => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        const errorText = await response.text();
        return showError(errorText);
      }

      const data = await response.json();
      setResults(data);
    } catch (error) {
      showError(String(error));
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Vote no seu mercado favorito</h1>

      <input
        type="text"
        value={clientId}
        onChange={(e) => setClientId(e.target.value)}
        placeholder="Seu nome"
        className="border p-2 mb-4 w-full rounded-md text-black"
      />
      <input
        type="text"
        value={market}
        onChange={(e) => setMarket(e.target.value)}
        placeholder="Nome do mercado escolhido"
        className="border p-2 mb-4 w-full rounded-md text-black"
      />
      
      <button
        onClick={handleVote}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Votar
      </button>

      <ToastContainer />

      <div className="mt-4">
        <h2 className="text-xl font-bold">Resultados em tempo real:</h2>
        <ul>
          {results.map((result, index) => (
            <li key={index} className="mb-2">
              {result.marketId} - Votos: {result.votes}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Vote;
