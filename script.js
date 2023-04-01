let myleads = []
let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
let deleteBtn = document.getElementById("delete-btn")
let ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myleads.push(inputEl.value)
    inputEl.value = ""
    render()
 })

 deleteBtn.addEventListener("click", function(){
    myleads = []
    render()
 })


function render(){ 
    let listIteam = ""
    for (let i=0; i<myleads.length;i++){
        listIteam += `<li>
        <a href ='${myleads[i]}' target='_blank'>  ${myleads[i]} </a></li>`
    }
    ulEl.innerHTML = listIteam
}
