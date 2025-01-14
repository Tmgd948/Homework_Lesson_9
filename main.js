//Assignment 1

const changeColor = document.getElementById("Change Color");
const cancelButton = document.getElementById("cancelButton")


const color = () => {
    document.getElementById("divColor").style.backgroundColor = "lightblue";
};

const disableButton = () => {
    document.getElementById("Change Color").disabled = true
}

const enableButton = () => {
    document.getElementById("Change Color").disabled = false
}

let colorTime
let enableButtonTime

changeColor.addEventListener("click", function () {
    colorTime = setTimeout(color, 2000);
    disableButton()
    enableButtonTime = setTimeout(enableButton, 2000)
});

cancelButton.addEventListener("click", function () {
    clearTimeout(colorTime)
    enableButton()
    clearTimeout(enableButtonTime)
})

//Assignment 2

const newTimeDiv = document.createElement("div")
newTimeDiv.classList.add("timer")
document.body.appendChild(newTimeDiv)

newTimeDiv.style.border = "2px solid black"
newTimeDiv.style.width = "70px"
newTimeDiv.style.height = "30px"
newTimeDiv.style.textAlign = "center"


function countDown(x) {
    newTimeDiv.innerText = x
    if (x > 0) {
        setTimeout(() => {
            countDown(x - 1)
        }, 1000)
    } if (x === 0) { newTimeDiv.innerText = "הזמן נגמר" }
}

countDown(0)

//Assignment 3

const str = "Table";
const char = "b";

function customIndexOf(str, char) {

    if (typeof str !== "string") {
        return "First Paramater Must Be A String"
    } else if (char === "") {
        return 0
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i
        }
    }
    return -1
}

console.log(customIndexOf(str, char));


// Assignment 4

fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        return response.json();
    })
    .then(function (data) {

        const userList = document.createElement("ul");
        document.body.appendChild(userList);

        data.forEach(function (user) {
            const listItem = document.createElement("li");
            listItem.textContent = "Name: " + user.name + ", City: " + user.address.city;
            userList.appendChild(listItem);
        });
    })
    .catch(function (error) {
        console.error(error);
    });
