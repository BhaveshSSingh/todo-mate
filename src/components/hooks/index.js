import moment from "moment/moment";
import { useState, useEffect } from "react";
import firebase from "../firebase";

export function useTodos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("todos")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setTodos(data);
      });
    return () => unsubscribe();
  }, []);
  return todos;
}

export function useFilter(todos, selectedProject) {
  const [filterdTodos, setFilterdTodos] = useState([]);

  useEffect(() => {
    let data;
    const todayDateFormated = moment().format("MM/DD/YYYY");

    if (selectedProject === "today") {
      data = todos.filter((todo) => todo.date === todayDateFormated);
    } else if (selectedProject === "next 7 days") {
      data = todos.filter((todo) => {
        const todoDate = moment(todo.date, "MM/DD/YYYY");
        const todayDate = moment(todayDateFormated, "MM/DD/YYYY");
        const diffDate = todoDate.diff(todayDate, "days");
        return diffDate >= 0 && diffDate <= 7;
      });
    } else if (selectedProject === "all days") {
      data = todos;
    } else {
      data = todos.filter((todo) => todo.projectName === selectedProject);
    }
    setFilterdTodos(data);
  }, [todos, selectedProject]);

  return filterdTodos;
}

export function useProjects(todos) {
  const [projects, setProjects] = useState([]);

  function calculateNumOfTodos(todos, projectName) {
    return todos.filter((todo) => todo.projectName === projectName).length;
  }
  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("projects")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          const projectName = doc.data().name;
          return {
            id: doc.id,
            name: projectName,
            numOfTodos: calculateNumOfTodos(todos, projectName),
          };
        });
        setProjects(data);
      });
    return () => unsubscribe();
  }, [todos]);
  return projects;
}
