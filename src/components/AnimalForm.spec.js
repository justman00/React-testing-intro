import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AnimalForm from './AnimalForm';

describe('<AnimalForm />', () => {
  test('renders without error', () => {
    render(<AnimalForm />);
  });

  it('should submit the form and add an element', () => {
    // AAA
    // arrange
    const { getByLabelText, getByText } = render(<AnimalForm />);

    // act
    const speciesInput = getByLabelText(/species/i);
    const ageInput = getByLabelText(/age/i);
    const notesInput = getByLabelText(/notes/i);

    fireEvent.change(speciesInput, { target: { value: 'Tiger' } });
    fireEvent.change(ageInput, { target: { value: '5' } });
    fireEvent.change(notesInput, { target: { value: 'It is a big tiger' } });

    fireEvent.click(getByText(/submit/i));

    // assert
    expect(getByText(/tiger/i)).toBeInTheDocument();
    expect(speciesInput.value).toBe('');
    expect(ageInput.value).toBe('');

    expect(notesInput.value).toBe('');
  });

  test('should show null after failed with error', () => {
    // AAA
    // arrange - act - assert
    const { container, rerender } = render(<AnimalForm />);

    expect(container.firstChild).not.toBeNull();

    rerender(<AnimalForm errors="am o eroare" />);

    expect(container.firstChild).toBeNull();
  });
});
