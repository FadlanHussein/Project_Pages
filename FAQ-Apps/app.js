const accordianHeaders = document.querySelectorAll(".accordion-header")

accordianHeaders.forEach(header =>{
    header.addEventListener("click",()=>{
        const allItems=document.querySelectorAll(".accordian-item")
        allItems.forEach(item =>{
           if(item.contains(header)===false){
            item.classList.remove("active")
            const content = item.querySelector(".accordion-content")
            content.style.maxHeight = null
            content.style.padding="0 15px"
           }

        })

        const accordionItem=header.parentElement;
        const accordionContent= accordionItem.querySelector(".accordion-content")
        accordionItem.classList.toggle("active")
        if(accordionItem.classList.contains("active")){
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"
            accordionContent.style.padding="15px 15px"
        }
        else{
            accordionContent.style.maxHeight = null
            accordionContent.style.padding="0 15px"
        }


    })
})

