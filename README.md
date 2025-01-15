# Projects
## 1. Color Changer
```HTML```
``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Changer</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <h1>This is my first project</h1>
    <div class="main">
        <div class="button" id="pink"></div>
        <div class="button" id="grey"></div>
        <div class="button" id="red"></div>
        <div class="button" id="yellow"></div>
        <div class="button" id="borderButton">Create Border</div>
    </div>

    <p class="para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam labore quas! Praesentium recusandae odit fugiat. Placeat animi veritatis, cumque repudiandae voluptate non quo, soluta blanditiis ex velit, molestiae repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic quod nulla non nostrum cupiditate neque nemo eius quam saepe perferendis totam sit cum ea, dignissimos tenetur. Reiciendis, ipsa repellendus.
    </p>

    <script src="script.js"></script>
</body>

</html>
```
``` CSS ```
```CSS
body {
    background-color: rgb(37, 37, 37);
    padding-left: 30px;
    padding-top: 50px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
    color: antiquewhite;
}

.button {
    width: 40px;
    height: 40px;
    border: 2px solid #ffffff;
    margin: 10px;
    border-radius: 5px;
    display: flex;
}

.main {
    display: flex;
}

#pink {
    background-color: rgb(228, 12, 109);
}

#grey {
    background-color: rgb(114, 114, 114);
}

#red {
    background-color: rgb(255, 0, 0);
}

#yellow {
    background-color: rgb(242, 255, 3);
}

.para {
    color: antiquewhite;
}

#borderButton {
    background-color: rgb(37, 37, 37);
    border: 2px solid rgb(255, 255, 255);
    border-radius: 5px;
    width: 150px;
    color: antiquewhite;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: large;
    font-weight: 900;
}
```
```javaScript```
```javascript
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
                body.style.backgroundColor = "rgb(250, 255, 146)"
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
```
---
## 2. BMI Calculator
```HTML```
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <h1 class="heading">BMI Calculator</h1>

    <form class="form">

        <label for="height" class="label">Write Your height</label>
        <input type="text" id="height" class="input-field" name="height">
        <br>
        <label for="weight" class="label">Write Your weight in Kilo-Gram</label>
        <input type="text" id="weight" class="input-field" name="weight">
        <br>
        <button type="submit" id="btn">Calculate</button>
        <div id="result"></div>
        <div id="advice"></div>
    </form>

    <script src="script.js"></script>
</body>

</html>
```
```CSS```
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-top: 80px;
    margin-left: 50px;
    background-color: rgb(33, 33, 33);
}

.heading {
    color: rgb(240, 116, 0);
    font-size: 40px;
    text-decoration: underline;
    text-decoration-color: rgb(205, 205, 205);
    text-decoration-thickness: 4px;
}

.input-field {
    width: 200px;
    height: 25px;
    border-radius: 5px;
    border: 2px solid #ffffff;
    background-color: rgb(37, 37, 37);
    color: antiquewhite;
    margin-left: 20px;
    margin-bottom: 20px;
}

.label {
    color: antiquewhite;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
}

#btn {
    width: 100px;
    height: 40px;
    border-radius: 9px;
    border: 4px solid #ffffff;
    background-color: rgb(90, 90, 90);
    color: antiquewhite;
    margin-left: 0px;
    margin-bottom: 20px;
    cursor: pointer;
    font-size: 17px;
}

#result {
    color: antiquewhite;
    font-size: 20px;
}

#advice {
    color: rgb(255, 208, 150);
    margin-top: 10px;
    font-style: normal;
}
```
```JavaScript```
```JavaScript
let form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // let userName = document.querySelector("#userName").value;
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);

    if (height == " " || height < 1 || isNaN(height)) {
        document.querySelector("#result").innerHTML = `Please! Write a valid height`
    }

    if (weight == " " || weight < 1 || isNaN(weight)) {
        document.querySelector("#result").innerHTML = `Please! Write a valid weight`
    }

    if (height > 0 && weight > 0) {
        let heightInM = height / 100;
        let heightSquare = heightInM * heightInM;
        let bmi = weight / heightSquare;
        let bmiFixed = bmi.toFixed(4);
        console.log(`Your BMI is ${bmiFixed}`);
        document.querySelector("#result").innerHTML = `Your BMI is ${bmiFixed}`;
        if (bmiFixed < 18.5) {
            document.querySelector("#advice").innerHTML = `You Should increase Your BMI`
        } else if (bmiFixed > 25) {
            document.querySelector("#advice").innerHTML = `You Should decrease Your BMI`
        } else {
            document.querySelector("#advice").innerHTML = `You have a normal BMI`
        }
    }

})
```
## 3. Digital Clock
```HTML```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Clock</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="mainBox">
        <div id="timeLab">Hello! <span>Mohammad Kaif</span>, it's</div>
        <div id="timeText">Hello</div>
    </div>

<script src="script.js"></script>
</body>
</html>
```
```CSS```
```css
body {
    display: flex;
    background-color: rgb(44, 44, 44);
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family:'Courier New', Courier, monospace;
}

.mainBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#timeLab {
    color: antiquewhite;
    font-size: 20px;
    margin-bottom: 10px;
}

#timeText {
    font-family:cursive;
    font-size: 35px;
    border-radius: 5px;
    background-color: rgb(255, 156, 34);
    padding: 5px 15px;
    font-weight: 700;
}

span:hover{
    text-shadow: 0px 0px 10px rgb(255, 255, 255);
    cursor: pointer;
    font-style: italic;
}
```
```JavaScript```
```javascript
setInterval(function(){
    let today = new Date()
    let time = today.toLocaleTimeString();
    document.querySelector("#timeText").innerHTML = time;
}, 1000)
```
