// crear un test que falle (red)
// crear lo mínimo necesario para que el test pase (green)
// aplicar refactorización (clean code)

import React from 'react';
import {screen, render} from '@testing-library/react';
import Login from '../views/Login';


beforeEach(() => render(<Login />));

describe('LoginPage', () => {
    it('must display a title', () => {
        expect(screen.queryByText(/inicia sesión/i)).toBeInTheDocument();
    });

    it('must display a title', () => {
        expect(screen.queryByText(/Nombre/i)).toBeInTheDocument();
    });

});