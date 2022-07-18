var pickcolor = document.querySelector(".color1");
var nav=document.getElementById("navcontainer");
var signup=document.getElementById("signup");
var login=document.getElementById("login");
var random=document.getElementById("random");


pickcolor.addEventListener("input", ()=>{
    nav.style.background= pickcolor.value;
    signup.style.color= pickcolor.value;
    login.style.color= pickcolor.value;
    random.style.color= pickcolor.value;
})

random.addEventListener ("click", ()=> {
      var n = Math.random();
      n = n * 256;
      n = Math.floor(n);
      var a = Math.random();
      a = a * 256;
      a = Math.floor(a);
      var b = Math.random();
      b = b * 256;
      b = Math.floor(b);
      var color = "rgb(" + n + "," + a + "," + b + ")";
      function RGBToHex(rgb) {
        let sep = rgb.indexOf(",") > -1 ? "," : " ";
        rgb = rgb.substr(4).split(")")[0].split(sep);
        let r = (+rgb[0]).toString(16),
            g = (+rgb[1]).toString(16),
            b = (+rgb[2]).toString(16);
        if (r.length == 1)
          r = "0" + r;
        if (g.length == 1)
          g = "0" + g;
        if (b.length == 1)
          b = "0" + b;
        return "#" + r + g + b;
      }
      var valueinput= RGBToHex(color)
      nav.style.background= color;
      signup.style.color= color;
      login.style.color= color;
      random.style.color= color;
      pickcolor.value=valueinput;
    });

let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')
let box3 = document.querySelector('#box3')
let box4 = document.querySelector('#box4')
let container = document.querySelectorAll('.gridcontainer')
let showAnswer= document.querySelector('#answer')
let question=document.querySelector('#question')
let arraycities = ["/images/berlin.jpeg", "/images/bruges.jpeg", "/images/copenaghen.jpeg", "/images/london.jpeg", "/images/paris.jpeg", "/images/warsaw.jpeg", "/images/lisbon.jpeg",
    "/images/prague.jpeg", "/images/madrid.jpeg", "/images/rome.jpeg"]
let boxWrapper = [box1, box2, box3, box4]
let boxes = ['box1', 'box2', 'box3', 'box4'];
let answer='';

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    arr.splice(randomIndex, 1);
    return item;
}

window.addEventListener('load', (e) => {
    e.preventDefault();
    box1.src = getRandomItem(arraycities);
    box2.src = getRandomItem(arraycities);
    box3.src = getRandomItem(arraycities);
    box4.src = getRandomItem(arraycities);
    boxWrapper.forEach(x => {
            x.addEventListener('click', (e) => {
            e.preventDefault();
            let clicked = x.id;
            answer = x.src;
            answer = answer.slice(41,-5);
            if (arraycities.length>=3){
            boxes.forEach(b => {
                if (b != clicked) {
                    eval(b).src = getRandomItem(arraycities);
                }
            })
            console.log(arraycities);
        } else {
         question.innerHTML= 'YOU WANT TO GO TO '+ answer;
         showAnswer.innerHTML= 'Hope you will love it ! ';
          boxes.forEach(c => {
            if (c != clicked) {
                eval(c).remove();
                console.log(clicked)
            }
        })
        container[0].classList.toggle("gridContainerAnswer")
        boxes.forEach(d => {
          if (d === clicked) {
              eval(d).style.width="440px";
              eval(d).style.height="440px";
          }
      })
        }
           })} 
    )})


