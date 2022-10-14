import { createContext, useState } from "react";
import { useTodos, useProjects, useFilter } from "../hooks";

const TodoContext = createContext();

function TodoContextProvider({ children }) {
  const defaultProject = "today";
  const [selectedProject, setSelectedProject] = useState(defaultProject);
  const [selectedTodo, setSelectedTodo] = useState(undefined);
  //
  const todos = useTodos();
  const projects = useProjects(todos);
  const filteredTodos = useFilter(todos, selectedProject);
  return (
    <TodoContext.Provider
      value={{
        selectedProject,
        defaultProject,
        setSelectedProject,
        todos: filteredTodos,
        projects,
        selectedTodo,
        setSelectedTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContextProvider, TodoContext };
