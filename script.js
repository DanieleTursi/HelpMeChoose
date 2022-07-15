let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')
let box3 = document.querySelector('#box3')
let box4 = document.querySelector('#box4')
let cointainer = document.querySelector('#gridcontainer')
let showAnswer= document.querySelector('#answer')
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
            answer = answer.slice(29,-5);
            if (arraycities.length>=3){
            boxes.forEach(b => {
                if (b != clicked) {
                    eval(b).src = getRandomItem(arraycities);
                }
            })
            console.log(arraycities);
        } else {showAnswer.innerHTML= 'YOU WANT TO GO TO '+ answer;}
           })} 
    )})


