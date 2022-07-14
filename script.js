let box1=document.querySelector('#box1')
let box2=document.querySelector('#box2')
let box3=document.querySelector('#box3')
let box4=document.querySelector('#box4')
let cointainer=document.querySelector('#gridcontainer')
let arraycities=["/images/berlin.jpeg", "/images/bruges.jpeg", "/images/copenaghen.jpeg", "/images/london.jpeg", "/images/paris.jpeg", "/images/warsaw.jpeg", "/images/lisbon.jpeg", 
"/images/prague.jpeg", "/images/madrid.jpeg", "/images/rome.jpeg"  ]




function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    arr.splice(randomIndex,1);
    return item;
}



window.addEventListener('load', (e)=>{
    e.preventDefault();
    box1.src= getRandomItem(arraycities);
    box2.src= getRandomItem(arraycities);
    box3.src= getRandomItem(arraycities);
    box4.src= getRandomItem(arraycities);
    let counter=0;
    if (counter<=2){
    box1.addEventListener('click', (e)=>{
        e.preventDefault();
        box2.src= getRandomItem(arraycities);
        box3.src= getRandomItem(arraycities);
        box4.src= getRandomItem(arraycities);
        console.log(arraycities) 
        counter++
        console.log(counter)
    })

    // box1.addEventListener('click', (e)=>{
    //    console.log(box1)
    // })

    box2.addEventListener('click', (e)=>{
        e.preventDefault();
        box1.src= getRandomItem(arraycities);
        box3.src= getRandomItem(arraycities);
        box4.src= getRandomItem(arraycities);
        console.log(arraycities) 
        counter++
        console.log(counter)
    })

    // box2.addEventListener('click', (e)=>{
    //    console.log(box2)
    // })

    box3.addEventListener('click', (e)=>{
        e.preventDefault();
        box1.src= getRandomItem(arraycities);
        box2.src= getRandomItem(arraycities);
        box4.src= getRandomItem(arraycities);
        console.log(arraycities) 
        counter++
        console.log(counter)
    })

    // box3.addEventListener('click', (e)=>{
    //    console.log(box3)
    // })

    box4.addEventListener('click', (e)=>{
        e.preventDefault();
        box1.src= getRandomItem(arraycities);
        box3.src= getRandomItem(arraycities);
        box3.src= getRandomItem(arraycities);
        console.log(arraycities) 
        counter++
        console.log(counter)
    })

    // box4.addEventListener('click', (e)=>{
    //    console.log(box4)
    // })
      } else {
    console.log("picked")
      }
})
