import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TodoList } from '..';
import { MOCK_TODOS } from '@/shared/mocks/data';
import { StoreProvider } from '@/app/providers';

describe('TodoList', () => {
  it('renders the TodoList component with todos', () => {
    render(
      <StoreProvider>
        <TodoList todos={MOCK_TODOS} />
      </StoreProvider>
    );
    const todoItems = screen.getAllByTestId('todo-item');

    expect(todoItems.length).toBe(MOCK_TODOS.length);
  });

  it('renders the TodoList component without todos', () => {
    render(
      <StoreProvider>
        <TodoList todos={[]} />
      </StoreProvider>
    );
    const todoItems = screen.queryAllByTestId('todo-item');

    expect(todoItems.length).toBe(0);
  });
});
