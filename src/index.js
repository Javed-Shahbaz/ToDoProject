import './style.css';

import { tList, addTodo, delItem, delCompleted, Chkbox, } from './Module/To-Do-List.js';

window.addEventListener('load', () => {
  tList();
  addTodo();
  tList(Chkbox);
  delCompleted();
});
tList(delItem);