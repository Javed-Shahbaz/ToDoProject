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
        document.querySelector("#task input").value = "";
    }
  }