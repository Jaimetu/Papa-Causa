const caja = document.getElementById('text')
let write = str =>{
let array = str.split('')
let i = 0;
let print = setInterval(()=>{
if(array[i] ==' '){
caja.innerHTML+= array[i]
caja.innerHTML+= array[i + 1]
i+= 2
}else{
caja.innerHTML+= array[i]
i++
}
if(i == array.length)
clearInterval(print)
},160)
}
write('¡Bienvenido a Papa Causa!')