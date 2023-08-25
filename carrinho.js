//VERIFICANDO SE A PÁGINA JÁ FOI CARREGADA POIS O JAVASCRIPT ESTÁ SENDO CARREGADO EM BACKGROUND, PELO ASYNC
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
}else{
    ready()
}

var totalAmount = "0,00"


//REMOVER PRODUTOS DO CARRINHO
function ready() {
    const removeProductButtons = document.getElementsByClassName("remove-product-button")
    for (var i = 0; i < removeProductButtons.length; i++) {
        removeProductButtons[i].addEventListener("click", removeProduct)
    }

//DETECTAR ALTERAÇÃO NA QUANTIDADE
    const quantityInputs = document.getElementsByClassName("product-qtd-input")
    for (var i = 0; i < quantityInputs.length; i++) {
        quantityInputs[i].addEventListener("change", updateTotal)
    }

//FUNCIONALIDADE DO BOTAO DE COMPRA
    const purchaseButton = document.getElementsByClassName("purchase-button")[0];
    purchaseButton.addEventListener("click", makePurchase)
}


function makePurchase() {
    if(totalAmount == "0,00") {
        alert("O seu carrinho de compras está vazio!")
    } else{
        alert(
            `
            Obrigado pela sua compra!
            Valor do pedido: R$${totalAmount}
            Volte sempre :)
            `
        )
    }
}

//FUNÇAO DE REMOVER PRODUTO
function removeProduct(event) {
    event.target.parentElement.parentElement.remove()
    updateTotal()
}

/*FUNÇÃO DE ATUALIZAR PREÇO DO CARRINHO*/
function updateTotal() {
    totalAmount = 0
    const cartProducts = document.getElementsByClassName("cart-product")
    for (var i = 0; i < cartProducts.length; i++) {
        const productPrice = cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")
        const productQuantity = cartProducts[i].getElementsByClassName("product-qtd-input")[0].value
    
        totalAmount += (productPrice * productQuantity)
    }
    totalAmount = totalAmount.toFixed(2)
    totalAmount = totalAmount.replace("." , ",")
    document.querySelector(".cart-total-container span").innerText = "R$" + totalAmount
}






