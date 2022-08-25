function dropDown (elementId){
  let element = document.getElementById(elementId);
  let droppingElement = element.nextElementSibling;
  let obs;
  if(droppingElement.style.maxHeight){
    droppingElement.removeAttribute('style');
  }
  else{
    droppingElement.style.maxHeight = droppingElement.scrollHeight + 'px';
    droppingElement.style.marginTop = '15px';
    droppingElement.style.marginBottom = '15px';

  }
}
