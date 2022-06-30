setInterval(function () {
  const show = document.querySelector("span[data-show]");
  if(show.nextElementSibling){
    var next = show.nextElementSibling;
  }else{
    var next = document.getElementById("primerTexto");
  }

  console.log(next);
  const up = document.querySelector("span[data-up]");

  if (up) {
    up.removeAttribute("data-up");
  }

  show.removeAttribute("data-show");
  show.setAttribute("data-up", "");

  next.setAttribute("data-show", "");
}, 2000);