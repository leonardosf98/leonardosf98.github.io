let presentation = document.querySelector(".main-content");
let presentationText = "Sou desenvolvedor web e nutricionista!"
let i = 0;
function typewrite(){
        if (i < presentationText.length) {
          presentation.innerHTML += presentationText.charAt(i);
          i++;
          setTimeout(typewrite, 50);
        }
      }
    typewrite();