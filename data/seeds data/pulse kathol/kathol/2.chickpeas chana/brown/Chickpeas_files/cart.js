var cartCountQuery = ".cart-products-count";
var cartPriceQuery = "#price-full";

//Update cart
function UpdateCart() {    
    $.post("/cart/info", {}, CallbackUpdateCatr);
}

function CallbackUpdateCatr(info) {
    $(cartCountQuery).text(info.Count);
    $(cartPriceQuery).text(info.FullPrice);
}

// Add to cart
function AddToCart(id, count) {
    $.post("/cart/add", { productID: id, count: count }, CallbackAddToCart);    
}

function CallbackAddToCart(res) {
    if (res) {
        alert("Продукт успешно добавлен.");
        UpdateCart();
    }
    else {
        alert("Во время добавления товара в корзину произошла ошибка.");
    }
}

// Delete from cart
function DeleteFromCart(id) {
    if (confirm("Вы уверены, что хотите удалить товар из корзины?")) {
        $.post("/cart/delete", { orderDataId: id }, CallbackDeleteFromCart);
    }
}

function CallbackDeleteFromCart(res) {
    if (res) {
        $("#Grid tr[id=" + res + "]").remove();
        UpdateCart();
    } 
    else {
        alert("Во время удаления товара из корзины произошла ошибка.");
    }
}

// Update cart from client
function UpdateProductCountFromClient(id, count) {
    $.post("cart/update-count-from-client", { productId: id, count: count }, function (productInfo) { UpdateCart(); UpdateProductFullPrice(productInfo) });
}

function UpdateProductFullPrice(productInfo) {
    if (productInfo) {
        $("#Grid tr[id=" + productInfo.ID + "] .price-item-full").text(productInfo.FullPrice);
    }
}