var products=[
    {name:"Burger", 
     heading:"Classic American Hamburger",
     price:"$4",
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_4wmXirYrbq9GbjLf_zhQgZFdhcD7yD8sg&s"
    },
    {name:"Pizza", 
     heading:"Authentic Italian Pizza",
     price:"$7",
     image:"https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {name:"Coffee", 
     heading:"Gets you out of lazziness",
     price:"$3.5",
     image:"https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {name:"Sandwich", 
     heading:"Fresh Veggie treat between bread",
     price:"$4.5",
     image:"https://images.unsplash.com/photo-1553909489-cd47e0907980?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {name:"Summer punch", 
     heading:"Juice mix of summer fruits",
     price:"$6",
     image:"https://images.unsplash.com/photo-1560526860-1f0e56046c85?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

var popular =[
    {name:"Falaf3l Roll", 
     heading:"Arabian dish",
     price:"$2.5",
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzFsn0SdGVIeRhcO0Fa1R7uLPm8imj4fz0A&s"
    },
    {name:"Chicken Wings", 
     heading:"Spicy chicken wings",
     price:"$8",
     image:"https://kalejunkie.com/wp-content/uploads/2023/09/KJ_Sticky-Honey-Garlic-Chicken-Wings-6.jpg"
    },
    {name:"Smoothie", 
     heading:"Fruity and Milky",
     price:"$6.5",
     image:"https://www.fannetasticfood.com/wp-content/uploads/2021/09/Berry-Yogurt-Smoothie-FF-featured-image-735x735.jpg"
    }
]

var cart=[];

function addProduct(){
    var clutter="";
    products.forEach(function(product,index){
        clutter+=`<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl"><img src="${product.image}" alt="${product.name}" class ="w-full h-full object-cover rounded-xl"/></div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.heading}</h3>
                            <h4 class="font-semibold mt-2">${product.price}</h4>
                        </div>
                        <button data-index="${index}"class="add w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400"><i data-index="${index}" class=" add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
})
    document.querySelector('.products').innerHTML=clutter;
}
function addPopular(){
    var clutter=" ";
    products.forEach(function(product){
        clutter+=`<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${product.image}"
                            alt="${product.name}">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.heading}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${product.price}</h4>
                    </div>
                </div>`;
    })
    document.querySelector('.populars').innerHTML=clutter;
}
function addToCart(){
    document.querySelector('.products').addEventListener('click',function(details){
        if(details.target.classList.contains('add')){
            cart.push(products[details.target.dataset.index]) 
        }

    })
}

function showCart(){
    document.querySelector(".carticon").addEventListener('click',function(){
        console.log("cart icon clicked");
        const cartElement = document.querySelector(".cartexpnd");
        if(cartElement.style.display==='block'){
            cartElement.style.display='none';
        }else{
            cartElement.style.display='block';
        }
        var clutter="";
        cart.forEach(function(prod,index){
        clutter+=`<div class="flex gap-2 bg-white p-2 rounded-lg">
        <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
            <img class="w-full h-full object-cover" src='${prod.image}'>
        </div>
        <div>
            <h3 class="font-semibold">${prod.name}</h3>
            <h5 class='text-sm font-semibold opacity-80'>${prod.price}</h5>
        </div>
        </div>`;
        })
        document.querySelector(".cartexpnd").innerHTML=clutter;
   });
}
addProduct();
addPopular();
addToCart();
showCart();