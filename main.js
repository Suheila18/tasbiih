const footer = document.querySelector("#df")
const footer2 = document.querySelector("#pp")
const btn = document.querySelector("#kl")
const count = document.querySelector("#coun")
let value =count
let calcult = 600.72;
let calcult1 = 1201.44*2;
// let calcult = 600.72*2;
// let calcult = 600.72*2;
// let calcult = 600.72*2;
// let calcult = 600.72*2;
   
// let bmiRounded = calcult.toFixed(1); 
let startValue =1;

 btn.addEventListener("click", () => {
     calcult **2
     count.innerHTML = calcult
    })

btn.addEventListener("click", () => {
     startValue ++
     footer2.innerHTML = startValue
//    if(startValue >1){
//    count.innerHTML =calcult

//    } else {
//      count.innerHTML =calcult1
//    }

})
footer.addEventListener("click", () => {
     if(startValue > 0){
        startValue --
     footer2.innerHTML = startValue
     }
})