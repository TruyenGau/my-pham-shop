const adressbtn = document.querySelector('#adress-form')
//console.log(adressbtn)
const adressclose = document.querySelector('#adress-close')
 //console.log(adressclose)
adressbtn.addEventListener("click", function (){
    document.querySelector('.adress-form').style.display = "flex"
})
adressclose.addEventListener("click", function (){
    document.querySelector('.adress-form').style.display = "none"
})
//slider.......................................................................
const rightbtn = document.querySelector('.fa-angle-right')
//console.log(rightbtn)
const leftbtn = document.querySelector('.fa-angle-left')
// đạt giới hạn cho biến
const imgNumber = document.querySelectorAll('.slider-content-left-top img')
//console.log(imgNumber.length)
let index = 0
rightbtn.addEventListener("click", function (){
    index = index + 1
    //set số thứ tụ vdcos 5 phần tử thì 0 -> 4 quay về vị trí đầu
    if(index>imgNumber.length-1){
        index=0
    }
//    console.log("oke")
//    dịch chuyển sang bên trái 100%
    document.querySelector('.slider-content-left-top').style.right = index * 100 + "%"
})
leftbtn.addEventListener("click", function (){
    index = index - 1
    //bằng với cái thằng lớn nhất
    if(index<=0){
        index=imgNumber.length-1
    }
//    console.log("oke")
    document.querySelector('.slider-content-left-top').style.right =  index * 100 + "%"
})
//slider.................................2
const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li')

//console.log(imgactive)
//console.log(imgNumberLi)
imgNumberLi.forEach(function (image,index){
   // console.log(image,index)
    image.addEventListener("click", function (){
        removeactive()
        //cứ ấn là tăng lên 100%
        document.querySelector('.slider-content-left-top').style.right =  index * 100 + "%"
        //nhấp chuột thẻ li li sẽ add cho mình
        image.classList.add("active")
    })
})
// tạo hàm để thanh vàng chạy
    function removeactive(){
        let imgactive = document.querySelector('.active')
        imgactive.classList.remove("active")
}
//slider................3
//cho nó chạy cứ mỗi 5s
function imgAuto(){
    index = index + 1
    if(index>imgNumber.length-1){
        index=0
    }
    //để cái màu vàng chạy theo
    removeactive()
    document.querySelector('.slider-content-left-top').style.right =  index * 100 + "%"
    //console.log(index)
    imgNumberLi[index].classList.add("active")
}
//set time để chạy
setInterval(imgAuto,5000)
//......................................slider-product--btn
const rightbtntwo = document.querySelector('.fa-angle-right-two')
const leftbtntwo = document.querySelector('.fa-angle-left-two')
const imgNumbertwo = document.querySelectorAll('.slider-product-one-content-items')
rightbtntwo.addEventListener("click", function (){
    index = index + 1
    if(index>imgNumbertwo.length-1){
        index=0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%"
})
leftbtntwo.addEventListener("click", function (){
    index = index - 1
    if(index<=0){
        index=imgNumbertwo.length-1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right =  index * 100 + "%"
})
//......................................................................................................................
const adressbtn1 = document.querySelector('#adress-form1')
//console.log(adressbtn)
const adressclose1 = document.querySelector('#adress-close1')
//console.log(adressclose)
adressbtn1.addEventListener("click", function (){
    document.querySelector('.adress-form1').style.display = "flex"
})
adressclose1.addEventListener("click", function (){
    document.querySelector('.adress-form1').style.display = "none"
})