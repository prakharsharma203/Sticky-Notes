let btn = document.querySelector("button");
let box = document.querySelector(".box");

btn.addEventListener("click", () => {
  let textarea = document.querySelector("textarea").value;
  if (textarea === "") {
    alert("Input some text");
    return;
  }
  let inputColor = document.querySelector("input").value;
  let x = document.createElement("div");
  x.classList.add("notes");

  x.innerHTML = `<p>${textarea}</p><button class ="btn1">X</button>`;
  x.style.backgroundColor = inputColor;
  box.appendChild(x);
  document.querySelector("textarea").value ="";
  document.querySelector(".notesNotAdded").style.display = "none";
  let y = document.querySelector(".box");
  y.addEventListener("click" ,(e)=>{
    if(e.target.nodeName === "BUTTON"){
        e.target.parentElement.remove();
    }
  });
});