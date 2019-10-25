let arrProducts = []


function httpGet(theUrl) {

    let miPromesa = new Promise((resolve, reject) => {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                resolve(xmlHttp.responseText);
            } else { }
        }

        xmlHttp.open("GET", theUrl, false);
        xmlHttp.send(null);
    })
    return miPromesa;
}

function loadProducts (category_id) {
    let listaProductos = []
    listaProductos.slice(0,1000000000)
    let detalleProducto = `<div </div>`
    document.querySelector("#infoProducto").innerHTML = detalleProducto

    listaProductos = arrProducts[category_id]
    listaProductos.products.forEach((element) => {
         detalleProducto = `<div col-lg-4 col-md-6 col-sm-12"><div class="card" style="width: 18rem;"><img src="${element.imageURL}" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${element.name}</h5><p class="card-text">${element.descripcion}</p><p class="card-text">${element.price}</p><p class="card-text">${element.unit}</p><a href="#" class="btn btn-light">Add to cart</a></div></div></div>`
        document.querySelector("#infoProducto").innerHTML += detalleProducto
    {
    console.log(element.name)
    console.log(element.imageURL)
    console.log(element.price)
    console.log(element.unit)
    console.log(element.description)
    }
    });

}

function loadAll(params) {
    
httpGet("https://cors-anywhere.herokuapp.com/http://prana-solutions.com/neoland/ecommerce/?endpoint=categories")
.then(JSON.parse)
.then((categories) => {
    categories.categories.forEach((element) => {

        let listaCategorias = `<a id="idCategoria" onClick="loadProducts(${element.id})" class="dropdown-item" href="#">${element.name}</a>`
        document.querySelector("#infoCategorias").innerHTML += listaCategorias

        console.log(element.id, element.name)

        httpGet("https://cors-anywhere.herokuapp.com/http://prana-solutions.com/neoland/ecommerce/?endpoint=products&category_id=" + element.id)
        .then(JSON.parse)

                .then((listaProductos) => {
                    arrProducts[element.id] = listaProductos
                    })
    })
}) 
       

        
}





loadAll();