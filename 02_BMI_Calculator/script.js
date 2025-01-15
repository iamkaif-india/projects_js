let form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let userNameIs = document.querySelector("#userName").value;
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
        let bmiFixed = bmi.toFixed(2);
        console.log(`Your BMI is ${bmiFixed}`);
        document.querySelector("#result").innerHTML = `${userNameIs}, Your BMI is ${bmiFixed}`;
        if (bmiFixed < 18.5) {
            document.querySelector("#advice").innerHTML = `You Should increase Your BMI`
        } else if (bmiFixed > 25) {
            document.querySelector("#advice").innerHTML = `You Should decrease Your BMI`
        } else {
            document.querySelector("#advice").innerHTML = `You have a normal BMI`
        }
    }

})

