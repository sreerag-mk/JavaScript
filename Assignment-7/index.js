let id1 = document.getElementById("id1")
let id2 = document.getElementById("id2")
let id3 = document.getElementById("id3")
let id4 = document.getElementById("id4")
let id5 = document.getElementById("id5")
let id6 = document.getElementById("id6")
let id7 = document.getElementById("id7")
let id8 = document.getElementById("id8")
let id9 = document.getElementById("id9")
let gridId = document.getElementById("gridId")
let finalResult = document.getElementById("finalResult")
let clicks = 0
let X = []
let O = []
function playagain(){
    location.reload()
}
id1.addEventListener('click', (() => {
    if(id1.classList.contains('clicked') != true){
        clicks = clicks+1
        forArray = 1
        id1.classList.add("clicked")
        xoro(id1, forArray);
    }
}))
id2.addEventListener('click', (() => {
    if(id2.classList.contains('clicked') != true){
        clicks = clicks+1
        forArray = 2
        id2.classList.add("clicked")
        xoro(id2, forArray);
    }
}))
id3.addEventListener('click', (() => {
    if(id3.classList.contains('clicked') != true){
        clicks = clicks+1
        forArray = 3
        id3.classList.add("clicked")
        xoro(id3, forArray);
    }
}))
id4.addEventListener('click', (() => {
    if(id4.classList.contains('clicked') != true){
        clicks = clicks+1
        forArray = 4
        id4.classList.add("clicked")
        xoro(id4, forArray);     
    }
}))
id5.addEventListener('click', (() => {
    if(id5.classList.contains('clicked') != true){
        clicks = clicks+1
        forArray = 5
        id5.classList.add("clicked")
        xoro(id5, forArray);
    }
}))
id6.addEventListener('click', (() => {
    if(id6.classList.contains('clicked') != true){
        clicks = clicks+1
        forArray = 6
        id6.classList.add("clicked")
        xoro(id6, forArray);
    }
}))
id7.addEventListener('click', (() => {
    if(id7.classList.contains('clicked') != true){
        clicks = clicks+1
        forArray = 7
        id7.classList.add("clicked")
        xoro(id7, forArray);
    }
}))
id8.addEventListener('click', (() => {
    if(id8.classList.contains('clicked') != true){
        clicks = clicks+1
        forArray = 8
        id8.classList.add("clicked")
        xoro(id8, forArray);
    }
}))
id9.addEventListener('click', (() => {
    if(id9.classList.contains('clicked') != true){
        clicks = clicks+1
        forArray = 9
        id9.classList.add("clicked")
        xoro(id9, forArray);
    }
}))
function xoro(id, array){
    if (clicks%2 === 0){
        id.innerHTML = "o"
        O.unshift(array)
        console.log(`array O is ${O}`)
        winner(O, "O", id)
    }
    else{
        id.innerHTML = "x"
        X.unshift(array)
        console.log(`array X is ${X}`)
        winner(X, "X", id)
    }
}
function winner(array, winner, id){
    const condition1 = array.includes(1)&&array.includes(2)&&array.includes(3)
    const condition2 = array.includes(4)&&array.includes(5)&&array.includes(6)
    const condition3 = array.includes(7)&&array.includes(8)&&array.includes(9)
    const condition4 = array.includes(1)&&array.includes(4)&&array.includes(7)
    const condition5 = array.includes(2)&&array.includes(5)&&array.includes(8)
    const condition6 = array.includes(3)&&array.includes(6)&&array.includes(9)
    const condition7 = array.includes(1)&&array.includes(5)&&array.includes(9)
    const condition8 = array.includes(3)&&array.includes(5)&&array.includes(7)

    if (array.includes(1)&&array.includes(2)&&array.includes(3) || array.includes(4)&&array.includes(5)&&array.includes(6) || array.includes(7)&&array.includes(8)&&array.includes(9) || array.includes(1)&&array.includes(4)&&array.includes(7) || array.includes(2)&&array.includes(5)&&array.includes(8) || array.includes(3)&&array.includes(6)&&array.includes(9) || array.includes(3)&&array.includes(5)&&array.includes(7) || array.includes(1)&&array.includes(5)&&array.includes(9) ){
        if(condition1 === true){
            id1.style.backgroundColor = "gray"
            id2.style.backgroundColor = "gray"
            id3.style.backgroundColor = "gray"
        }
        if(condition2 === true){
            id4.style.backgroundColor = "gray"
            id5.style.backgroundColor = "gray"
            id6.style.backgroundColor = "gray"
        }
        if(condition3 === true){
            id7.style.backgroundColor = "gray"
            id8.style.backgroundColor = "gray"
            id9.style.backgroundColor = "gray"
        }
        if(condition4 === true){
            id1.style.backgroundColor = "gray"
            id4.style.backgroundColor = "gray"
            id7.style.backgroundColor = "gray"
        }
        if(condition5 === true){
            id2.style.backgroundColor = "gray"
            id5.style.backgroundColor = "gray"
            id8.style.backgroundColor = "gray"
        }
        if(condition6 === true){
            id3.style.backgroundColor = "gray"
            id6.style.backgroundColor = "gray"
            id9.style.backgroundColor = "gray"
        }
        if(condition7 === true){
            id1.style.backgroundColor = "gray"
            id5.style.backgroundColor = "gray"
            id9.style.backgroundColor = "gray"
        }
        if(condition8 === true){
            id3.style.backgroundColor = "gray"
            id5.style.backgroundColor = "gray"
            id7.style.backgroundColor = "gray"
        }
        gridId.style.pointerEvents = 'none'
        setTimeout(()=> {
            gridId.style.display = "none"
            finalResult.style.display = "block"
            finalResult.innerHTML = `The winner is ${winner}`
         }
         ,1000);
    }else if(clicks === 9){
        id1.style.backgroundColor = "gray"
        id2.style.backgroundColor = "gray"
        id3.style.backgroundColor = "gray"
        id4.style.backgroundColor = "gray"
        id5.style.backgroundColor = "gray"
        id6.style.backgroundColor = "gray"
        id7.style.backgroundColor = "gray"
        id8.style.backgroundColor = "gray"
        id9.style.backgroundColor = "gray"
    }
}



