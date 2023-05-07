const btn = document.querySelectorAll("#btn")
let format = "";
let addElement = document.querySelector(".container")
let add = ""
fetch("https://fakestoreapi.com/products")
.then(res=> res.json())
.then(data=>{
    const myFilter = (value)=>{
        return value.category == format
    }

    data.filter(myFilter).map(item=>{
        console.log(item);
       add += `<img src="${item.image}" alt="">` 
    })
})
.catch(err=>{
    console.log(err);
})
addElement.innerHTML = add


btn[0].onclick = ()=>{
    format = "men's clothing"
}
btn[1].onclick = ()=>{
    format = "jewelery"
}
btn[2].onclick = ()=>{
    format = "electronics"
}
btn[3].onclick = ()=>{
    format = "women's clothing"
}
