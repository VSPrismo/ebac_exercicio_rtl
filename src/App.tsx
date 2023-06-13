import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('insere dois comentários corretamente', () => {
    render(<App />);

    const comentarioInput = screen.getByTestId('comentario-input');
    const submitButton = screen.getByTestId('submit-button');

    fireEvent.change(comentarioInput, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(submitButton);

    fireEvent.change(comentarioInput, { target: { value: 'Segundo comentário' } });
    fireEvent.click(submitButton);

    const comentarios = screen.getAllByTestId('comentario');
    expect(comentarios).toHaveLength(2);
    expect(comentarios[0].textContent).toBe('Primeiro comentário');
    expect(comentarios[1].textContent).toBe('Segundo comentário');
  });
});

