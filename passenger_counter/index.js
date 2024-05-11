// let count = 5

// count = count +1


let count =0
// console.log(count)
function increament(){
    console.log('clicked')
    count = count + 1
    document.getElementById("count").innerHTML= count;
}
 
function decreament(){
    console.log('clicked')
    count = count - 1
    document.getElementById("count").innerHTML= count;
}
function save(){
        let counter = count + " - "
        document.getElementById("save-el").textContent += counter
        document.getElementById("count").textContent = 0
        count = 0
}

