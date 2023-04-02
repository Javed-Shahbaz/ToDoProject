let List = JSON.parse(localStorage.getItem('tasks')) || [];

export function adtask() {
  localStorage.setItem('tasks', JSON.stringify(List));
}

export function delItem(listItem, index) {
  List.splice(index, 1);
  listItem.remove();

  //Rearrange indices
  for (let i = 0; i < List.length; i += 1) {
    List[i].index = i + 1;
  }
  adtask();
}

export function Chkbox(task, listItem) {
  const chBox = document.createElement('input');
  chBox.type = 'checkbox';
  chBox.classList.add('checkbox');
  chBox.checked = task.completed;
  chBox.addEventListener('change', () => {
    task.completed = chBox.checked;
    adtask();
  });
  listItem.appendChild(chBox);
}

export function tList() {
  const tListElement = document.getElementById('list');
  tListElement.innerHTML = '';

  List.forEach((task, index) => {
    const lisItem = document.createElement('li');
    lisItem.classList.add('listItem');

    Chkbox(task, lisItem);

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('taskDiv');
    taskDiv.innerText = task.description;

    const editDescription = () => {
      const inputTask = document.createElement('input');
      inputTask.classList.add('taskDiv');
      inputTask.value = task.description;
      taskDiv.replaceWith(inputTask);
      inputTask.focus();
      inputTask.addEventListener('blur', () => {
        task.description = inputTask.value;
        inputTask.replaceWith(taskDiv);
        taskDiv.innerText = task.description;
        adtask();
      });
    };
    taskDiv.addEventListener('dblclick', editDescription);
    lisItem.appendChild(taskDiv);

    const dotsDiv = document.createElement('div');
    dotsDiv.classList.add('dotsDiv');

    const dotsIcon = document.createElement('div');
    dotsIcon.innerHTML = '<i class="bi bi-three-dots-vertical"></i>';
    dotsDiv.appendChild(dotsIcon);
    dotsIcon.addEventListener('click', () => delItem(listItem, index));
    lisItem.appendChild(dotsDiv);
    tListElement.appendChild(lisItem);

    lisItem.addEventListener('mouseenter', () => {
      dotsIcon.innerHTML = '<i class="bi bi-trash3"></i>';
    });
    lisItem.addEventListener('mouseleave', () => {
      dotsIcon.innerHTML = '<i class="bi bi-three-dots-vertical"></i>';
    });
  });
}

export function addTodo() {
  const input = document.getElementById('taskItem');

  function newTask() {
    if (!input.value) return;
    const newTask = { description: input.value, completed: false, index: List.length + 1 };
    List.push(newTask);
    tList();
    input.value = '';
    adtask();
  }

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      newTask();
    }
  });
  document.getElementById('add').addEventListener('click', newTask);
}

export function delCompleted() {
  const delButton = document.getElementById('clsbtn');
  delButton.addEventListener('click', () => {
    List=List.filter((task) => !task.completed);
    tList();
    adtask();
  });
}

const demoInput = document.getElementById('title');

const demoInputValue = localStorage.getItem('demoInputValue');
if (demoInputValue) {
  demoInput.value = demoInputValue;
}
demoInput.addEventListener('change', () => {
  localStorage.setItem('demoInputValue', demoInput.value);
});