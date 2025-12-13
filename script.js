const images =[
    "./img/tennis.jpg"
    ,"./img/RareTech.jpg"
    ,"./img/programing.jpeg"
]
const alts=[
    "テニスの画像"
    ,"RareTechの画像"
    ,"プログラミングの画像"
]
const img = document.querySelector("img")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const p = document.getElementById("page")
let index = 0
let timeid = null

function show(){
    img.src = images[index]
    img.alt = alts[index]
    p.textContent = `${index + 1} / ${images.length}`
}

function next_image(){
    index = (index + 1) % images.length
    show()
}

function prev_image(){
    index = (index - 1 + images.length) % images.length
    show()
}

function start_slide(){
    timeid = setInterval(() => {
        next_image()
    }, 3800);
}

function reset_slide(){
    clearInterval(timeid)
    start_slide()
}

//ロード時
window.addEventListener('DOMContentLoaded',(e)=>{
    start_slide()
    show()
})

//戻るボタン押下
prev.addEventListener("click",(e)=>{
    prev_image()
    reset_slide()
})

//次へボタン押下
next.addEventListener("click",(e)=>{
    next_image()
    reset_slide()
})
