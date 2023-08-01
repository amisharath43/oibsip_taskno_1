document.addEventListener("DOMContentLoaded", function () {
    
    const input = document.querySelector(".input");
  
   
    function handleButtonClick(event) {
      const clickedButton = event.target;
      const buttonText = clickedButton.textContent;
  
      if (buttonText === "=") {
        try {
        
          const result = eval(input.value);
          input.value = result;
        } catch (error) {
       
          input.value = "Error";
        }
      } else if (buttonText === "AC") {
       
        input.value = "";
      } else {
        
        input.value += buttonText;
      }
    }
  
    
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
      button.addEventListener("click", handleButtonClick);
    });
  });
  