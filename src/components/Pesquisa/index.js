import { useState, useEffect } from 'react';

const Pesquisa = () => {
  const [livros, setLivros] = useState([]);
  const [termoPesquisa, setTermoPesquisa] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json')
      .then(response => response.json())
      .then(data => {
        setLivros(data);
      });
  }, []);

  const handlePesquisa = (event) => {
    setTermoPesquisa(event.target.value);
  };

  const livrosFiltrados = livros.filter(livro =>
    livro.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text"
        placeholder="Pesquise por um livro"
        value={termoPesquisa}
        onChange={handlePesquisa}
      />
      <div>
        {livrosFiltrados.length > 0 ? (
          livrosFiltrados.map((livro, index) => (
            <div key={index}>
              <h3>{livro.nome}</h3>
              <p>{livro.descricao}</p>
              <img src={livro.imagem} alt={livro.nome} />
            </div>
          ))
        ) : (
          <p>Nenhum livro encontrado</p>
        )}
      </div>
    </div>
  );
}

export default Pesquisa;
