import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoContext } from '../TodoContext';
import React from 'react';

function AppUI() {
  const {
    loading,
    error,
    searchTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
    return (
        <>
          <TodoCounter/>
          <TodoSearch />
          <CreateTodoButton 
            setOpenModal={setOpenModal}
          />
                        <TodoList>
                        {loading && (
                          <>
                          <TodosLoading/>
                          <TodosLoading/>
                          <TodosLoading/>
                          </>
                        )}
                        {error && <TodosError/>}
                        {(!loading && searchTodos.length === 0) && <EmptyTodos/>}
        
        
                        {searchTodos.map(todo => (
                        <TodoItem 
                        key={todo.text} 
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
            
                      />
                    ))}
                  </TodoList>

                          {openModal && (
                            <Modal>
                              <TodoForm/>
                            </Modal>
                          )}
        </>
      );
}

export { AppUI };