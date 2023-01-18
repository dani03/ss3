
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

const loginForm = document.getElementById("newletter-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  //alert("ici");
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  console.log(formProps.email)

  // axios.post('http://localhost:3000/emails', {

  //   email: formProps.email
  // })
  //   .then(function (response) {
  //     console.log(response, 'response axios');
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // let email = document.getElementById('email_form');
  // email.value = "";
  // alert(' Brainstasy vous remercie pour votre inscription vous serez parmis les premiers informer des nouveautés.');
}