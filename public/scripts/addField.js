    //search the button
    document.querySelector('#add-time')
    //quando clicar no botao
    .addEventListener('click',cloneField)

    //run the action
function cloneField(){
        //duplicate the fields
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

   //catchingthe fields 
   const fields = newFieldContainer.querySelectorAll('input')

   // para cada campo, limpar 
   fields.forEach(function(field){
        console.log(field) 
        //pegar o field do momento e limpa ele
        field.value = ""
   })
   //put duplication
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
    }