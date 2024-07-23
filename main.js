import { initializeApp } from "../functions.js"
import { getDatabase, ref} from "https://fir-cartapp-68a45-default-rtdb.europe-west1.firebasedatabase.app/"


const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    let inputvalue = inputFieldEl.value 


    console.log(inputvalue)
})