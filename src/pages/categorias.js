import { useState, useEffect } from 'react';
import Header from '../components/Header';
import AppContainer from '../components/AppContainer';
import styled from 'styled-components';

const CategoriaItem = styled.div`
  margin: 10px;
  padding: 15px;
  background-color: #f4f4f4;
  border-radius: 8px;
  text-align: center;
`;

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json')
      .then(response => response.json())
      .then(data => {
        // Extrai as categorias únicas a partir dos dados dos livros
        const categoriasExtraidas = [...new Set(data.map(livro => livro.categoria))];
        setCategorias(categoriasExtraidas);
      });
  }, []);

  return (
    <AppContainer>
      <Header />
      <h1>Categorias</h1>
      {categorias.length > 0 ? (
        categorias.map((categoria, index) => (
          <CategoriaItem key={index}>
            {categoria}
          </CategoriaItem>
        ))
      ) : (
        <p>Carregando categorias...</p>
      )}
    </AppContainer>
  );
}

export default Categorias;
