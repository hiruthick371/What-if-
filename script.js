let openbtn=document.getElementById('openbtn');
let modalcontainer=document.getElementById('modal-container');
let closebtn=document.getElementById('closebtn');

//Event listeners

openbtn.addEventListener('click',function(){
  modalcontainer.style.display ='block';

});

closebtn.addEventListener('click',function(){
  modalcontainer.style.display='none';
});

window.addEventListener('click',function(e){

  if(e.target === modalcontainer){
    modalcontainer.style.display='none';
  }
});