const bill = document.getElementById("bill")
const fivePercent = document.getElementById("per")
const tenPercent = document.getElementById("10%")
const fifteenPercent = document.getElementById("15%")
const twentyPercent = document.getElementById("25%")
const fiftyPercent = document.getElementById("50%")
const customPercent = document.getElementById("custom")
const numPeople = document.getElementById("numPeople")
const calculate = document.getElementById("calculate")
const tipAmount = document.getElementById("tipAmount")
const total = document.getElementById("total")
const reset = document.getElementById("reset")
const errorPeople = document.getElementById("errorpeople")
const errorBill = document.getElementById("errorbill")
let clicked = "0"
let totaltip = 0
let tip = 0
let percent = 0

fivePercent.addEventListener("click", ()=>{
    fivePercent.style.backgroundColor = "hsl(183, 100%, 15%)"
    fivePercent.style.color = "white"
    clicked = "1"
})
tenPercent.addEventListener("click", ()=>{
    tenPercent.style.backgroundColor = "hsl(183, 100%, 15%)"
    tenPercent.style.color = "white"
    clicked = "2"
})
fifteenPercent.addEventListener("click", ()=>{
    fifteenPercent.style.backgroundColor = "hsl(183, 100%, 15%)"
    fifteenPercent.style.color = "white"
    clicked = "3"
})
twentyPercent.addEventListener("click", ()=>{
    twentyPercent.style.backgroundColor = "hsl(183, 100%, 15%)"
    twentyPercent.style.color = "white"
    clicked = "4"
})
fiftyPercent.addEventListener("click", ()=>{
    fiftyPercent.style.backgroundColor = "hsl(183, 100%, 15%)"
    fiftyPercent.style.color = "white"
    clicked = "5"
})
customPercent.addEventListener("keypress", ()=>{
    clicked = "6"
})

calculate.addEventListener("click",()=>{
    if(bill.value == ""){
        bill.style.borderBlockColor = "red"
        errorBill.style.display = "block"
    }
    else{
        bill.style.borderBlockColor = "hsl(183, 100%, 15%)"
        errorBill.style.display = "none"
        if (clicked == "1"){
            totaltip = bill.value * 0.05
            total.innerText = totaltip
            tip = totaltip / numPeople.value
            tipAmount.innerText = tip
        }
        if (clicked == "2"){
            totaltip = bill.value * 0.1
            total.innerText = totaltip
            tip = totaltip / numPeople.value
            tipAmount.innerText = tip 
        }
        if (clicked == "3"){
            totaltip = bill.value * 0.15
            total.innerText = totaltip
            tip = totaltip / numPeople.value
            tipAmount.innerText = tip 
        }
        if (clicked == "4"){
            totaltip = bill.value * 0.25
            total.innerText = totaltip
            tip = totaltip / numPeople.value
            tipAmount.innerText = tip 
        }
        if (clicked == "5"){
            totaltip = bill.value * 0.5
            total.innerText = totaltip
            tip = totaltip / numPeople.value
            tipAmount.innerText = tip 
        }
        if (clicked == "6"){
            if(customPercent.value > 9){
                var newpercent = customPercent.value
                percent = "0." + newpercent
                totaltip = bill.value * percent
                total.innerText = totaltip
                tip = totaltip / numPeople.value
                tipAmount.innerText = tip
            }else{
                var newpercent = customPercent.value
                percent = "0.0" + newpercent
                totaltip = bill.value * percent
                total.innerText = totaltip
                tip = totaltip / numPeople.value
                tipAmount.innerText = tip
            }
        }
        if (clicked == "0"){
            alert("Please choose a percent value")
        }
    }
    if (numPeople.value == ""){
        numPeople.style.borderBlockColor = "red"
        errorPeople.style.display = "block"

    }
    else{
        numPeople.style.borderBlockColor = "hsl(183, 100%, 15%)"
        errorPeople.style.display = "none"
        if (clicked == "1"){
            totaltip = bill.value * 0.05
            total.innerText = totaltip
            tip = totaltip / numPeople.value
            tipAmount.innerText = tip
        }
        if (clicked == "2"){
            totaltip = bill.value * 0.1
            total.innerText = totaltip
            tip = totaltip / numPeople.value
            tipAmount.innerText = tip 
        }
        if (clicked == "3"){
            totaltip = bill.value * 0.15
            total.innerText = totaltip
            tip = totaltip / numPeople.value
            tipAmount.innerText = tip 
        }
        if (clicked == "4"){
            totaltip = bill.value * 0.25
            total.innerText = totaltip
            tip = totaltip / numPeople.value
            tipAmount.innerText = tip 
        }
        if (clicked == "5"){
            totaltip = bill.value * 0.5
            total.innerText = totaltip
            tip = totaltip / numPeople.value
            tipAmount.innerText = tip 
        }
        if (clicked == "6"){
            if(customPercent.value > 9){
                var newpercent = customPercent.value
                percent = "0." + newpercent
                totaltip = bill.value * percent
                total.innerText = totaltip
                tip = totaltip / numPeople.value
                tipAmount.innerText = tip
            }else{
                var newpercent = customPercent.value
                percent = "0.0" + newpercent
                totaltip = bill.value * percent
                total.innerText = totaltip
                tip = totaltip / numPeople.value
                tipAmount.innerText = tip
    }
}}})
reset.addEventListener("click",()=>{
    bill.value = 0
    bill.style.borderBlockColor = "hsl(183, 100%, 15%)"
    errorBill.style.display = "none"
    numPeople.value = 0
    numPeople.style.borderBlockColor = "hsl(183, 100%, 15%)"
    errorPeople.style.display = "none"
    clicked = 0
    percent = 0
    total.innerText = "0.00"
    tipAmount.innerText = "0.00"
    fivePercent.style.backgroundColor = "hsl(172, 67%, 45%)"
    fivePercent.style.color = "black"
    tenPercent.style.backgroundColor = "hsl(172, 67%, 45%)"
    tenPercent.style.color = "black"
    fifteenPercent.style.backgroundColor = "hsl(172, 67%, 45%)"
    fifteenPercent.style.color = "black"
    twentyPercent.style.backgroundColor = "hsl(172, 67%, 45%)"
    twentyPercent.style.color = "black"
    fiftyPercent.style.backgroundColor = "hsl(172, 67%, 45%)"
    fiftyPercent.style.color = "black" 

})
