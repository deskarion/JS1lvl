class ProductList {
    constructor(container = '.content__products') {
        this.container = container;
        this.allProducts = [];
        this.renderAllProducts();
        this.renderProduct();
    }

    renderAllProducts(){
        this.allProducts = [
            {id: 1, title: 'VideoCard', price: 400, product: 'gigabyte', serial: 'RTX', img: 'public/img/RTX.jpg'},
            {id: 2, title: 'Motherboard', price: 420, product: 'asus', serial: 'gaming', img: 'public/img/MotherBoard.jpg'},
            {id: 3, title: 'Power', price: 563, product: 'gigabyte', serial: 'active', img: 'public/img/power.jpg'},
        ];
    }

    renderProduct() {
        const block = document.querySelector(this.container);
        for(let product of this.allProducts){
            const item = new ProductItem(product);
            
           // this.allProducts.push(item);
             block.insertAdjacentHTML("beforeend",item.render());
             //block.innerHTML += item.render();
        }
    }
}

class ProductItem{
    constructor(product){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
        this.serial = product.serial;
        this.manufacturer = product.product;
    }
    render(){
           return `<div class="product-item">
                <img src="${this.img}" alt="Some img" width=200 height=200>
                <h3>${this.title}</h3>
                <p> Производитель: ${this.manufacturer}</p>
                <p> Серия: ${this.serial}</p>
                <p> Цена в рублях: <span class="product_price">${this.price}</span></p>
                <button class="buy-btn" 
                data-id="${this.id}"
                data-title="${this.title}"
                data-price="${this.price}"
                data-img="${this.img}"
                data-serial="${this.serial}"
                data-manufacturer="${this.manufacturer}">
                Купить</button>
            </div>`
    }
}

let list = new ProductList();