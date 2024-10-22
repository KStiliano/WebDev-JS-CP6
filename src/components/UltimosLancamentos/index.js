import { useState, useEffect } from 'react';
import styled from 'styled-components';

const LivroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const UltimosLancamentos = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json')
      .then(response => response.json())
      .then(data => {
        // Ordena os livros pela data de lançamento (assumindo que existe um campo "dataLancamento")
        const livrosOrdenados = data.sort((a, b) => new Date(b.dataLancamento) - new Date(a.dataLancamento));
        // Seleciona os 5 últimos lançamentos
        setLivros(livrosOrdenados.slice(0, 5));
      });
  }, []);

  return (
    <div>
      <h2>Últimos Lançamentos</h2>
      <div>
        {livros.length > 0 ? (
          livros.map((livro, index) => (
            <LivroContainer key={index}>
              <h3>{livro.nome}</h3>
              <p>{livro.descricao}</p>
              <img src={livro.imagem} alt={livro.nome} width="150" />
            </LivroContainer>
          ))
        ) : (
          <p>Carregando últimos lançamentos...</p>
        )}
      </div>
    </div>
  );
}

export default UltimosLancamentos;
