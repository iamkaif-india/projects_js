let body = document.querySelector("body");
let boxes = document.querySelectorAll(".button");

boxes.forEach(function (buttom) {
    console.log(buttom),
        buttom.addEventListener("click", function (e) {
            console.log(e)
            console.log(e.target.id)
            if (e.target.id === "pink") {
                body.style.backgroundColor = "rgb(228, 12, 109)"
                document.querySelector("h1").style.color = "rgb(255, 233, 198)"
                document.querySelector(".para").style.color = "rgb(255, 233, 198)"
            }
            if (e.target.id === "grey") {
                body.style.backgroundColor = "rgb(52, 52, 52)"
                document.querySelector("h1").style.color = "rgb(255, 233, 198)"
                document.querySelector(".para").style.color = "rgb(255, 233, 198)"
            }
            if (e.target.id === "red") {
                body.style.backgroundColor = "rgb(255, 0, 0)"
                document.querySelector("h1").style.color = "rgb(255, 233, 198)"
                document.querySelector(".para").style.color = "rgb(255, 233, 198)"
            }

            if (e.target.id === "yellow") {
                body.style.backgroundColor = "rgb(245, 239, 66)"
                document.querySelector("h1").style.color = "rgb(255, 0, 0)"
                document.querySelector(".para").style.color = "rgb(78, 48, 0)"
            }
            if (e.target.id === "borderButton") {
                document.querySelector(".para").style.border = "2px solid rgb(255, 233, 198)"
                document.querySelector(".para").style.borderRadius = "10px"
                document.querySelector(".para").style.padding = "10px"
            }
        })
})

