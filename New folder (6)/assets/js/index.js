const fileBtn=document.querySelector(".btn");
const  fileInput=document.querySelector(".fileInput");
const auido=document.querySelector(".music");

const uploadArea=document.querySelector(".upload-area");

auido.addEventListener("dragover",()=>{
    console.log("a");
    uploadArea.classList.remove("dasshed")
    uploadArea.classList.add("solid")

})
auido.addEventListener("dragleave",()=>{
    console.log("a");
    uploadArea.classList.add("dasshed")
    uploadArea.classList.remove("solid")
})
auido.addEventListener("drop",(e)=>{
    console.log(e.dataTransfer.files[0]);
    let fileReader=new FileReader();

    fileReader.addEventListener("loadend",()=>{
        console.log("test");
        auido.setAttribute("src",fileReader.result);
         auido.play();
    })
    fileReader.readAsDataURL(e.dataTransfer.files[0]);
})




fileBtn.addEventListener("click",()=>{
    fileInput.click();
})
fileInput.addEventListener("change",(e)=>{

    let fileReader=new FileReader();

    fileReader.addEventListener("loadend",()=>{
        console.log("test");
        auido.setAttribute("src",fileReader.result);
         auido.play();
    })
    fileReader.readAsDataURL(e.target.files[0]);
})










// const submit=document.querySelector(".submit");
// const imageinput=document.querySelector(".image");
// const row= document.querySelector(".row");


// submit.addEventListener("click",(e)=>{
//   e.preventDefault();
//   FileUpload(imageinput.files[0]);
// })


// imageinput.addEventListener("drop",(e)=>{
//     FileUpload(e.dataTransfer.files[0])
// })

// function FileUpload(file) {
//     let fileReader=new FileReader();

//     fileReader.addEventListener("loadend",()=>{
//       row.innerHTML+=`  <div class="col-4">
//       <div class="image">
//        <img src="${fileReader.result}" alt="">
//       </div>
//    </div>`;
//     })
//      fileReader.readAsDataURL(file);
// }

