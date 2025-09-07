let box = document.querySelectorAll(".box2")
let ans = document.querySelectorAll(".ans")


box.forEach((box,i)=>{
    let btn = box.querySelector(".btn-img")
    let ans = box.querySelector(".ans")
    box.addEventListener('click', () => {
    if(btn.getAttribute('src') === 'plus.png'){
      btn.src = 'cross.png' 
      ans.style.display = "flex "
    }else{
      btn.src="plus.png"
      ans.style.display="none"
    }
  });
})

// box1.addEventListener("click", () => {
//     if (btn1.getAttribute("src") === "plus.png") {
//         btn1.src = "cross.png"
//         console.log("cross.png")
//         ansA.style.display = "flex"
//     } else {
//         btn1.src = "plus.png"
//         ansA.style.display = "none"
//         console.log("plus.png")
//     }
// })

// let box2 = document.querySelector(".box2")
// let btn2 = document.querySelector(".btn2")
// let ansB = document.querySelector(".ansB")
// box2.addEventListener("click", () => {
//     if (btn2.getAttribute("src") === "plus.png") {
//         btn2.src = "cross.png"
//         console.log("cross.png")
//         ansB.style.display = "flex"
//     } else {
//         btn2.src = "plus.png"
//         ansB.style.display = "none"
//         console.log("plus.png")
//     }
// })
// let box3 = document.querySelector(".box3")
// let btn3 = document.querySelector(".btn3")
// let ansC = document.querySelector(".ansC")

// function toggle(box, btn, ans) {
//     box.addEventListener("click", () => {
//         if (btn.getAttribute("src") === "plus.png") {
//             btn.src = "cross.png"
//             console.log("cross.png")
//             ans.style.display = "flex"
//         } else {
//             btn.src = "plus.png"
//             ans.style.display = "none"
//             console.log("plus.png")
//         }
//     })
// }
// toggle(box3,btn3,ansC)