const  form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput= form.querySelectorAll(".first input");

nextBtn.addEventListener("click", () =>{ 
    allInput.forEach(input =>{
        if(input.value != ''){
            form.classList.add()
        }
    })

})
        
