window.onload = loading;

function loading() {
    let button1 = document.getElementById("add");
    button1.addEventListener("click", newGrade);
    let button2 = document.getElementById("average1");
    button2.addEventListener("click", countAverage);
    let button3 = document.getElementById("remove");
    button3.addEventListener("click", removeGrade);
}



function newGrade() {
    count++;
    let grade = document.createElement("label");
    grade.setAttribute("id", "name");
    grade.innerText = "Grade #" + count;
    let label1 = document.createElement("label");
    label1.setAttribute("for", "grade" + count);
    label1.innerText = "Grade:"
    let input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("id", "grade" + count);
    input1.className = "newGrade";

    let label2 = document.createElement("label");
    label2.setAttribute("for", "weight" + count);
    label2.innerText = "Weight:"
    label2.className = "yourWeight"
    let input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("id", "weight" + count);
    input2.className = "newWeight";
    let div = document.createElement("div");
    div.className = "divCount";
    div.setAttribute("id", "div" + count);
    div.appendChild(grade)
    let secondDiv = document.createElement("div");
    secondDiv.setAttribute("id", "inside")
    secondDiv.appendChild(label1);
    secondDiv.appendChild(input1);
    secondDiv.appendChild(label2);
    secondDiv.appendChild(input2);
    div.appendChild(secondDiv);

    let grades = document.getElementById("grades");
    grades.appendChild(div);
}

function countAverage() {
    console.log(count)
    let total = 0;
    let totalWeight = 0;
    let enter = 0;
    for (let i = 1; i <= count; i++) {
        let grade = parseInt(document.getElementById("grade" + i).value);
        let weight = parseInt(document.getElementById("weight" + i).value);
        total += grade * weight;
        totalWeight += weight;


    }
    enter = total / totalWeight;
    enter *= 10;
    enter = Math.round(enter)
    enter /= 10;
    let output = 0;
    if (!isNaN(enter)) {
        output = enter + "%";
    } else {
        output = "Enter grades";
    }
    document.getElementById("average").innerText = output;
    if (total / totalWeight <= 40) {
        document.getElementById("amIFailing").innerText = "yes";
        document.getElementById("amIFailing").className = "yes";
    } else {
        document.getElementById("amIFailing").innerText = "no";
        document.getElementById("amIFailing").className = "no";
    }
}

function removeGrade() {
    document.getElementById("div" + count).remove();
    count--;
}