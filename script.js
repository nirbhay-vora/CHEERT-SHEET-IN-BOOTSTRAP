const searchData = () => {
    let myInput = document.querySelector('#myInput').value.toLowerCase();
    let cards = document.querySelectorAll('.card');
  let heading = document.querySelector(".heading");
  console.log(heading)
  console.log(heading)
    cards.forEach((card) => {
        let button = card.querySelector('button');
        let buttonVal = button.innerText.toLowerCase();
  
      if (buttonVal.includes(myInput)) {
          card.style.display = 'block';
          heading.innerText = "This cheat sheet is for you"
      } else {
          card.style.display = 'none';
          heading.innerText = "No Data............."

      }
    });
  };
  