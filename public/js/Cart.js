class CartList {
    constructor() {
        this.amount = 0;
        this.countProducts = 0;
        this.goods = [];
        this.allProducts = [];
        this.render();
        this.addGoods();
    }

    addGoods() {
        let buyButton = document.querySelectorAll('.buy-btn');
        const block = document.querySelector('.content__cart');
        const count = block.querySelector('.count');
        const amount = block.querySelector('.amount');
        let productDesc = block.querySelectorAll('.desc');

        buyButton.forEach((elem) => {
            elem.addEventListener('click', (event) => {
                if(this.goods.length != 0){
                    let find = this.allProducts.find(product => {
                        if (product.id === event.target.dataset['id']) {
                            return 1;
                        }
                        
                    })
                    if(!find) {
                        let item = {
                            title: event.target.dataset['title'],
                            id: event.target.dataset['id'],
                            price: event.target.dataset['price'],
                            img: event.target.dataset['img'],
                            serial: event.target.dataset['serial'],
                            manufacturer: event.target.dataset['manufacturer'],
                        }
                        let price = parseInt(elem.previousElementSibling.firstElementChild.textContent);
                        block.querySelector('.amount').textContent = `Итого: ${this.amount += price}`;
                        block.querySelector('.count').textContent = `Всего товаров: ${this.countProducts += 1}`;
                        this.goods.push(item);
                        let productItem = document.querySelectorAll('.product-item-cart');
                        productItem.forEach((elem) => {
                            elem.outerHTML = "";
                        });

                        for (let product of this.goods){
                            const productObj = new CartItem(product);
                            this.allProducts.push(productObj);
                            block.insertAdjacentHTML('afterbegin', productObj.render());
                        }
                    } else {
                        let price = parseInt(elem.previousElementSibling.firstElementChild.textContent);
                        block.querySelector('.amount').textContent = `Итого: ${this.amount += price}`;
                        block.querySelector('.count').textContent = `Всего товаров: ${this.countProducts += 1}`;
                        let targetItem = document.querySelector(`.product-item-cart[data-id="${find.id}"]`);
                        targetItem.querySelector('.productCount').textContent = `Количество: ${find.productCount += 1}`;
                        targetItem.querySelector('.productAmount').textContent = `На сумму: ${find.productAmount += price}`;

                    }

                } else {
                    let item = {
                        title: event.target.dataset['title'],
                        id: event.target.dataset['id'],
                        price: event.target.dataset['price'],
                        img: event.target.dataset['img'],
                        serial: event.target.dataset['serial'],
                        manufacturer: event.target.dataset['manufacturer'],
                    }
                    let price = parseInt(elem.previousElementSibling.firstElementChild.textContent);
                    block.querySelector('.amount').textContent = `Итого: ${this.amount += price}`;
                    block.querySelector('.count').textContent = `Всего товаров: ${this.countProducts += 1}`;
                    this.goods.push(item);
                    for (let product of this.goods){
                        const productObj = new CartItem(product);
                        this.allProducts.push(productObj);
                        block.insertAdjacentHTML('afterbegin', productObj.render());
                    }
                }
            });
        });
    }

    render(){
        const block = document.querySelector('.content__cart');
        
        block.insertAdjacentHTML('beforeend', `<h2 class="amount">Итого: ${this.amount}</h2>`);
        block.insertAdjacentHTML('beforeend', `<p class="count">Всего товаров: ${this.countProducts}</p>`);
    }
}

class CartItem {
    constructor(product){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
        this.serial = product.serial;
        this.manufacturer = product.manufacturer;
        this.productAmount = +this.price;
        this.productCount = 1;
    }
    render(){
        return `<div class="product-item-cart" data-id="${this.id}">
                <img src="${this.img}" alt="Some img" width=200 height=200>
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p class="price">${this.price} $</p>
                    <p> Производитель: ${this.manufacturer}</p>
                    <p> Серия: ${this.serial}</p>
                    <p> Цена в рублях: ${this.price}</p>
                    <p class="productCount"> Количество: ${this.productCount}</p>
                    <p class="productAmount"> На сумму: ${this.productAmount*this.productCount}</p>   
                </div>
            </div>`
    }
}

let basketValue = new CartList();