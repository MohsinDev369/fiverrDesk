let btn = document.getElementById('btn');


btn.onclick = ("click", () => {
  let root = document.getElementById("root");
  let inpt = document.getElementById("inpt").value;
  let inpt2 = document.getElementById("inpt2").value;

  //35-(35*20%)
  root.innerText = inpt - (inpt*(20/100));
});