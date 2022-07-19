// import { GoogleAuthProvider } from "firebase/auth";

// const provider = new GoogleAuthProvider();

// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// const auth = getAuth();
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

//   import { getAuth, signOut } from "firebase/auth";

//   const auth = getAuth();
//     signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseApp = initializeApp({
//   apiKey: "AIzaSyBwOGJ3pp3KzmOruvrYdthdVEn_v2FfUmU",
//   authDomain: "helpmechoose-356410.firebaseapp.com",
//   projectId: "helpmechoose-356410",
//   storageBucket: "helpmechoose-356410.appspot.com",
//   messagingSenderId: "433098135490",
//   appId: "1:433098135490:web:e3a97fde018f4fd930685b",
//   measurementId: "G-DW025QM0ZL"
// });

// const auth= getAuth(firebaseApp)

// // Initialize Firebase
// onAuthStateChanged(auth, user => {
//   if(user= null){
//     console.log('logged in');
//   } else {
//     console.log('no user');
//   }
// });

// var openQuestList=document.querySelector('#openquestlist');
// var questList=document.querySelectorAll('.questionslist');

// openQuestList.addEventListener("click", (e)=>{
//   e.preventDefault();
//   questList[0].classList.toggle('questionslistdisplay');
// })

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
let clicked='';

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
            clicked = x.id;
            answer = x.src;
            answer = answer.slice(41,-5);
            if (arraycities.length>=3){
            boxes.forEach(b => {
                if (b != clicked) {
                    eval(b).src = getRandomItem(arraycities);
                }
            })
        } else {
         question.innerHTML= 'YOU WANT TO GO TO '+ answer;
         showAnswer.innerHTML= 'Hope you will love it ! ';
          boxes.forEach(c => {
            if (c != clicked) {
                eval(c).remove();
            }
        })
        container[0].classList.toggle("gridContainerAnswer")
        boxes.forEach(d => {
          if (d === clicked) {
              eval(d).style.width="340px";
              eval(d).style.height="340px";  
              eval(d).style.pointerEvents="none";
          }   
      })
        }
           })}      
    )})

let box5 = document.querySelector('#box5')
let box6 = document.querySelector('#box6')
let box7 = document.querySelector('#box7')
let box8 = document.querySelector('#box8')
let container2 = document.querySelectorAll('.gridcontainer')
let showAnswer2= document.querySelector('#answer')
let question2=document.querySelector('#question')
let arraydishes = ["/images/italian.jpeg", "/images/spanish.jpeg", "/images/hungarian.jpeg", "/images/english.jpeg", "/images/jamaican.jpeg", "/images/greek.jpeg", "/images/moroccan.jpeg",
    "/images/malaysian.jpeg", "/images/russian.jpeg", "/images/thai.jpeg"]
let boxWrapper2 = [box5, box6, box7, box8]
let boxes2 = ['box5', 'box6', 'box7', 'box8'];
let answer2='';
let clicked2='';

window.addEventListener('load', (e) => {
    e.preventDefault();
    box5.src = getRandomItem(arraydishes);
    box6.src = getRandomItem(arraydishes);
    box7.src = getRandomItem(arraydishes);
    box8.src = getRandomItem(arraydishes);
    boxWrapper2.forEach(x => {
            x.addEventListener('click', (e) => {
            e.preventDefault();
            clicked2 = x.id;
            answer2 = x.src;
            answer2 = answer2.slice(41,-5);
            if (arraydishes.length>=3){
            boxes2.forEach(b => {
                if (b != clicked2) {
                    eval(b).src = getRandomItem(arraydishes);
                }
            })
        } else {
         question2.innerHTML= 'YOU ARE CRAVING '+ answer2 +' CUISINE.';
         showAnswer2.innerHTML= 'Hope you will love it ! ';
          boxes2.forEach(c => {
            if (c != clicked2) {
                eval(c).remove();
            }
        })
        container2[0].classList.toggle("gridContainerAnswer")
        boxes2.forEach(d => {
          if (d === clicked2) {
              eval(d).style.width="340px";
              eval(d).style.height="340px";  
              eval(d).style.pointerEvents="none";
          }   
      })
        }
           })}      
    )})

