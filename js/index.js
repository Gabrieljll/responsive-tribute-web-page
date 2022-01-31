function slider() {
  var counter = 1;
  setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
      counter = 1;
    }
  }, 3000);
}

function changeInformationSection(btnSelected) {
  let idBtnSelected = btnSelected.id
  let divBtn = btnSelected.parentNode
  let divInformation = divBtn.parentNode
  divBtn.style.display = 'none'
  divInformation.style.display = 'none'
    //Slice '4' chars beacase the first four chacaracters are 'btn-' and the rest is the id 's div we need
  let divToShow = document.getElementById(idBtnSelected.slice(4))
  divToShow.style.display = 'inline-grid'
  divToShow.style.justifyContent = 'center'
  divToShow.firstChild.style.display = 'flex !important'
}

window.onload = slider();