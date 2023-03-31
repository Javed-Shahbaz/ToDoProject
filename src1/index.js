import './style.css';

const todos = [
  {
    index: 0,
    completed: false,
    description: 'Watch Movie',
  },
  {
    index: 1,
    completed: true,
    description: 'Read a Book',
  },
];

const addList = () => {
  const tcontainer = document.querySelector('#list');
  todos.forEach((list) => {
    tcontainer.innerHTML += `
    <div class="tak">
      <input type="checkbox" id="chkBox"/>
      <span id="taskname">
        ${list.description}
      </span>
      <button class="delete">
        <i class="far fa-trash-alt"></i>
      </button><hr><br>
    </div>
`;
  });
};
addList();
