import { beforeEach, describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Main from './Main';
import { StoreProvider } from '@/app/providers';

describe('Main', () => {
  beforeEach(() => {
    render(
      <StoreProvider>
        <Main />
      </StoreProvider>
    );
  });

  it('adds a new todo when the "Add" button is clicked', async () => {
    const input = await screen.findByTestId('create-input');
    fireEvent.change(input, { target: { value: 'New Todo' } });
    const addButton = await screen.findByTestId('create-button');
    const initialNumberOfTodos = screen.queryAllByTestId('todo-item').length;
    fireEvent.click(addButton);

    const updatedNumberOfTodos = screen.queryAllByTestId('todo-item').length;
    expect(updatedNumberOfTodos).toBe(initialNumberOfTodos + 1);
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  it('does not add a new todo when the input is empty', async () => {
    const addButton = await screen.findByTestId('create-button');
    const initialNumberOfTodos = screen.queryAllByTestId('todo-item').length;
    fireEvent.click(addButton);

    const updatedNumberOfTodos = screen.queryAllByTestId('todo-item').length;
    expect(updatedNumberOfTodos).toBe(initialNumberOfTodos);
  });

  it('clears the input field after adding a new todo', async () => {
    const input: HTMLInputElement = await screen.findByTestId('create-input');
    fireEvent.change(input, { target: { value: 'New Todo' } });
    const addButton = await screen.findByTestId('create-button');
    fireEvent.click(addButton);

    expect(input.value).toBe('');
  });

  it('does not create a todo for a single space input', async () => {
    const input = await screen.findByTestId('create-input');
    fireEvent.change(input, { target: { value: ' ' } });
    const addButton = await screen.findByTestId('create-button');
    const initialNumberOfTodos = screen.queryAllByTestId('todo-item').length;
    fireEvent.click(addButton);

    const updatedNumberOfTodos = screen.queryAllByTestId('todo-item').length;
    expect(updatedNumberOfTodos).toBe(initialNumberOfTodos);
  });

  it('replaces TodoView with EditTodoForm when clicking edit button', async () => {
    const editButtons = await screen.findAllByTestId('edit-todo-button');
    const initialTodoViewCount = screen.getAllByTestId('todo-view').length;
    fireEvent.click(editButtons[0]);
    const updatedTodoViewCount = screen.getAllByTestId('todo-view').length;

    expect(initialTodoViewCount - 1).toBe(updatedTodoViewCount);
  });

  it('reduces TodoView count by 2 when deleting two todos', async () => {
    const deleteTodo = await screen.findAllByTestId('delete-todo');
    const initialTodoViewCount = screen.getAllByTestId('todo-view').length;
    fireEvent.click(deleteTodo[0]);
    fireEvent.click(deleteTodo[1]);
    const updatedTodoViewCount = screen.getAllByTestId('todo-view').length;

    expect(initialTodoViewCount - 2).toBe(updatedTodoViewCount);
  });
});
