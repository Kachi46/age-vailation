const txtInput = decument.querySelector(".inputs input"),
checkBtn = decument.querySelector(".inputs input"),
 consttxtInput.addEventListener("keyup", () => {
    let filterInput = txtInput.value.replace(/[A-Z0-9/]/ig, "").replace
if(filterInput){
   return checkBtn.classlist.add("active");
}
checkBtn.classlist.remove("active")
});
