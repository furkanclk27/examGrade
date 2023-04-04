let examGrade = prompt("What is your Exam Grade: ")
let info = document.querySelector("#info")//I accessed the <h2> tag which contains "info" ID.
examGrade = parseFloat(examGrade)//This line may look weird. =D But my point here is if the user enter one more keyword (for example a string expression), this line parses the number part.
//I defined the smile icon under this.
const SMILE = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`
//I defined the frown icon under this.
const FROWN = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`

//First if asks: "Is this a useless grade?".
if(examGrade>=0 && examGrade<=100){
    info.classList.add("text-primary")//My point here is that everything is fine if the user doesn't get FF grades! As you see there is no code like this in any statement except FF.
    //Second if says the grade.
    if(examGrade>=90){
        info.innerHTML = `${SMILE}-AA`
    }
    else if(examGrade>=85){
        info.innerHTML = `${SMILE}-BA`
    }
    else if(examGrade>=80){
        info.innerHTML = `${SMILE}-BB`
    }
    else if(examGrade>=75){
        info.innerHTML = `${SMILE}-CB`
    }
    else if(examGrade>=70){
        info.innerHTML = `${SMILE}-CC`
    }
    else if(examGrade>=65){
        info.innerHTML = `${SMILE}-DC`
    }
    else if(examGrade>=60){
        info.innerHTML = `${SMILE}-DD`
    }
    else if(examGrade>=50){
        info.innerHTML = `${SMILE}-FD`
    }
    else if(examGrade<=49){
        info.classList.remove("text-primary")
        info.classList.add("text-danger")
        info.innerHTML = `${FROWN}-FF`
    }
}

else{
    info.innerHTML = "It is not a grade!"
}
