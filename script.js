let images = document.querySelector('img');

images.addEventListener('click', (event) => {
  console.log(event.target);
  let element = event.target;
  element.classList.add('scale-150')
})

let elements = document.querySelectorAll('.clothes');
// console.log(elements);


elements.forEach(element => {
  element.addEventListener('click', (event) => {
    let el = event.target;
    let parent = el.parentElement;
    let img = parent.getElementsByTagName('img')[0];
    let imageSource = img.src;
    let modal = document.getElementById("exampleModal")
    //dans ce modal on cherche la balise img 
    let imageInModal = modal.getElementsByTagName('img')[0];

    //on remplace la source 
    imageInModal.src = imageSource;


  })

});