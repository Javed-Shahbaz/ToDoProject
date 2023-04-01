import './style.css';

document.querySelector('#add').onclick = function () {
  if(document.querySelector('#task input').value.length === 0){
    alert("Enter Task");
  }
  else{
      document.querySelector('#list').innerHTML += `
            <div class="tak">
            <input type="checkbox" id="chkBox">
                <span id="taskname">
                    ${document.querySelector('#task input').value}
                </span>
                <button class="edit">Edit</button>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button><hr><br>
            </div>
        `;
        const current_tasks = document.querySelectorAll(".delete");
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        let tasks = document.querySelectorAll(".tak");
        for(let i=0; i<list.length; i++){
            list[i].onclick = () => {
                this.list.toggle('completed');
            }
        }

        document.querySelector("#task input").value = "";
    }
  }