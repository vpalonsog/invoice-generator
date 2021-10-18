
const inputProduct = document.getElementById('input-product');

const inputQuantity = document.getElementById('input-quantity');

const inputPrice = document.getElementById('input-price');

const invoiceData = document.getElementById('table');

const total = document.getElementById('total-price');

const productData = document.getElementById('product-data');

const message = document.getElementById('message');


productData.addEventListener('submit', addToInvoice);


function addToInvoice(e){
    e.preventDefault();
    
    let error = [];
    message.innerText = '';

    const valueProduct = inputProduct.value;
    const valueQuantity = inputQuantity.value;
    const valuePrice = inputPrice.value;
    
    if(valueProduct !== '' && valueQuantity > 0 && valuePrice > 0){
        
        const totalProduct = valueQuantity * valuePrice;
        
        invoiceData.innerHTML += `<tr>
        <td>${valueQuantity}</td>
        <td>${valueProduct}</td>
        <td>${valuePrice}</td>
        <td class="total-product">${totalProduct}</td>
        </tr>
        `
        
        const totalValue = document.querySelectorAll('.total-product');
        
        const totalValueArray = Array.from(totalValue);
        
    
        const totalValueI = totalValueArray.map(product =>{
            return parseInt(product.innerHTML)
        });
    
        
        const sumTotalValue = totalValueI.reduce((accumulator, item)=> accumulator + item,0);
        
        total.innerHTML = `Total: ${sumTotalValue}`;
        
    } else {
        
        if(valueProduct == ''){
            error.push('required name field');
            
        }
        
        if(valueQuantity <= 0){
            error.push('required quantity field');  
        } 

        if(valuePrice <= 0){
            error.push('required price field'); 
        } 

        message.innerHTML = error.join('<br/>')
    }
} 






