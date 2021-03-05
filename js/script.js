



fetch('https://fakestoreapi.com/products?sort=desc')
.then(res=>res.json())
.then(weeklyProduct=> {
    let weeklyProductWrap = document.querySelector('.weekly-list')
    for (var i = 0; i < 4; i++) {
        
        weeklyProductWrap.innerHTML += `
        <div class="product" data-id="${weeklyProduct[i].id}">
            <img src="${weeklyProduct[i].image}" alt="nome do produto">
            <h1 class="product-name">${weeklyProduct[i].title}</h1>
            <p class="product-price">R$ ${weeklyProduct[i].price}</p>
            
        </div>
        `
    }
})



fetch('https://fakestoreapi.com/products?limit=8')
.then(res=>res.json())
.then(forYouProduct=> {
    let forYouWrap = document.querySelector('.product-list')
    for (var i = 0; i < forYouProduct.length; i++) {
        let parceledPrice = (forYouProduct[i].price / 4).toFixed(2)
        forYouWrap.innerHTML += `
        <div class="product" data-id="${forYouProduct[i].id}">
            <img src="${forYouProduct[i].image}" alt="nome do produto">
            <h1 class="product-name">${forYouProduct[i].title}</h1>
            <p class="product-price">R$ ${forYouProduct[i].price}</p>
            <small>Ou 4x de R$ ${parceledPrice}</small>
        </div>
        `
    }
})

fetch('https://fakestoreapi.com/products/categories')
.then(res=>res.json())
.then(productCategory=> {
    let productCategoryWrap = document.querySelector('.categories-list')
    for (var i = 0; i < 4; i++) {
        
        productCategoryWrap.innerHTML += `
        <div class="category-item">
            <h1>${productCategory[i]}</h1>
        </div>
        `
    }
})


            