import React from 'react';
import styled from 'styled-components';

const CategoriasContainer = styled.div`
    padding: 20px;
    text-align: center;
`;

const Categoria = styled.div`
    margin: 10px 0;
    padding: 15px;
    background-color: #f8f9fa;
    border-radius: 8px;
`;

function Categorias() {
    const categorias = ['Programação', 'Design', 'Marketing', 'Negócios'];
    return (
        <CategoriasContainer>
            <h2>Categorias</h2>
            {categorias.map(categoria => (
                <Categoria key={categoria}>
                    {categoria}
                </Categoria>
            ))}
        </CategoriasContainer>
    );
}

export default Categorias;
