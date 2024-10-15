let h1 = document.querySelector('h1');
let p = document.querySelectorAll('p')
let input = document.getElementById('text');

input.addEventListener('input', ()=>{
    h1.innerHTML = input.value;
    p.forEach(item=>{
        item.innerHTML = input.value;
    })
})