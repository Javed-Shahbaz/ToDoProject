import './style.css';
import {
  tList, addTodo, delItem } from './Module/To-Do-List.js';
window.addEventListener('load', () => {
  tList();
  addTodo();});
tList(delItem);