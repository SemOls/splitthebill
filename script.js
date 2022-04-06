const pictures = [
    { src: 'https://cdn.glitch.global/8a3da3df-d914-4192-a3bf-25addd037603/1.jpeg?v=1649236700326', delay: 1000 },
    { src: 'https://cdn.glitch.global/8a3da3df-d914-4192-a3bf-25addd037603/2.jpeg?v=1649236705171', delay: 2000 },
    { src: 'https://cdn.glitch.global/8a3da3df-d914-4192-a3bf-25addd037603/3.jpeg?v=1649236708620', delay: 3000 },
    { src: 'https://cdn.glitch.global/8a3da3df-d914-4192-a3bf-25addd037603/4.jpeg?v=1649236712497', delay: 4000 },
    { src: 'https://cdn.glitch.global/8a3da3df-d914-4192-a3bf-25addd037603/5.jpeg?v=1649236716845', delay: 5000 },
    { src: 'https://cdn.glitch.global/8a3da3df-d914-4192-a3bf-25addd037603/6.jpeg?v=1649236720952', delay: 6000 },
    { src: 'https://cdn.glitch.global/8a3da3df-d914-4192-a3bf-25addd037603/7.jpeg?v=1649236724869', delay: 6000 },
    { src: 'https://cdn.glitch.global/8a3da3df-d914-4192-a3bf-25addd037603/8.jpeg?v=1649236728308', delay: 6000 },
    { src: 'https://cdn.glitch.global/8a3da3df-d914-4192-a3bf-25addd037603/9.jpeg?v=1649236731591', delay: 6000 },
  ]
  
  let current  = 0;
  
  function nextImage () {
    let img = new Image;
    img.src = pictures[current].src;
    img.onload = function () {
      document.body.style.backgroundImage = 'url(' + pictures[current].src + ')';
  
      current++;
      if (current >= pictures.length) current = 0;
  
      setTimeout(nextImage, pictures[current].delay);
    }
  }
  
  nextImage();

  const buttonRoom=document.querySelector("#addRoom");
  buttonRoom.addEventListener("click", showRoom);
  function showRoom (e) {
    e.preventDefault();
    room.style.display="block";
}

const buttonEat=document.querySelector("#addEat");
buttonEat.addEventListener("click", showEat);
function showEat (e) {
  e.preventDefault();
  eat.style.display="block";
}


  const button =document.querySelector("#btn");
  button.addEventListener ("click", calculateAmount)

  function calculateAmount (e) {
      e.preventDefault ();

      const people = document.querySelector("#people").value;
      const night = document.querySelector("#night").value;
      const room = document.querySelector("#room").value;
      const eat = document.querySelector("#eat").value;

    if (people ==="" || people <1 || night === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please enter your information!',
                      });
            }
    if (people > 6) {
        Swal.fire({
            icon: 'error',
            title: 'Sorry...',
            text: 'We have rooms just for 6 person 🙏',
                      });
    }

        
let amountPerPerson = (room * night)/people;

let eatPerPerson = (eat * night )/people

 let totalSum = amountPerPerson+eatPerPerson;


document.querySelector("#divideBill").textContent=amountPerPerson.toFixed(2);

document.querySelector("#divideEat").textContent=eatPerPerson.toFixed(2);

document.querySelector("#billAndEat").textContent=totalSum.toFixed(2);

  }