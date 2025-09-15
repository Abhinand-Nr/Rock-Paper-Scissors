let arr = [];

function renderTodoList(){
  let nameList = '';
  for(let i =0; i < arr.length; i++){
    let item = arr[i];
    nameList += `
        <div class="deets">${item.name}</div>
        <div class="deets">${item.date}</div>
         
        <button class = "delete-button" onclick ="

          arr.splice(${i}, 1)
          renderTodoList();
          
          "
        >Delete</button>

      `;

    
  }
  document.querySelector('.name-list-div').innerHTML = nameList;


}


 

function addToList(){

  const inputElement = document.querySelector('.input-name');
  const dateElement = document.querySelector('.input-date');

  const name = inputElement.value;
  const date = dateElement.value;

  arr.push({name,date});
  inputElement.value = '';

  renderTodoList();

}