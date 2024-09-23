// exercise 1.1

// // function printfullname(e){
// // e.preventDefault()
// // console.log("test");

// // }
// // document.querySelector("#submitOne").addEventListener("click", function() {
    
// //     let fname = document.querySelector("#firstName").value;

    
// //     document.getElementById("resultFormOne").innerHTML = `
// //         <ul>
// //             <li>First Name: ${fname}</li>
// //             <li>Last Name: </li>
// //             <li>Age: </li>
// //         </ul>
// //         `;
// // })

// // document.querySelector("#submitOne").addEventListener("click", printfullname)

// function fillResultFormOne(wholeForm) {
//     wholeForm.preventDefault();     // !!!<form> reloads page by default after submitting!!!

//     let divResultFormOne = document.getElementById("resultFormOne");
//     let fname = document.querySelector("#firstName").value;
//     let lname = document.querySelector("#lastName").value;
//     let a = document.querySelector("#age").value;

   

//     divResultFormOne.innerHTML = `
//         <ul>
//             <li id="firstFirstLi">First Name: ${fname}</li>
//             <li>Last Name: ${lname}</li>
//             <li>Age: ${a}</li>
//         </ul>
//     `;

//     if (fname.length > 5) {
//         document.getElementById("firstFirstLi").setAttribute("color", "green");
//     } else {
//         document.getElementById("firstFirstLi").style.color = "red";
//     }
// }

// document.querySelector("#submitOne").addEventListener("click", fillResultFormOne)

// exercise 2.1

let gridWrapper = document.querySelectorAll("#wrapper");

function removeItem(itemToRemove) {
    console.log("clicked" + itemToRemove);
    // itemToRemove.getElementByClassName("img").src = "";
    itemToRemove.removeChild(itemToRemove.children[0]);
}

for (const item of gridWrapper) {
    addEventListener("click", removeItem(item));
}
