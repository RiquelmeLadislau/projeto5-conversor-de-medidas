let meter = prompt('Digite um valor em metros!')
let km = prompt(`Agora, selecione uma opção abaixo para converter, entre:
1 - milímetro (mm)
2 - centímetro (cm)
3 - decímetro (dm)
4 - decâmetro (dam)
5 - hectômetro (hm)
6 - quilômetro (km)`)
switch(km){
    case('mm'):
    alert(`seu valor em milímetro é: ${meter *1000}`)
    break
    case('cm'):
    alert(`seu valor em centímetro é: ${meter *100} `)
    break
    case('dm'):
    alert(`seu valor em decímetro é: ${meter *10} `)
    break
    case('dam'):
    alert(`seu valor em decâmetro é: ${meter /10}`)
    break
    case('hm'):
    alert(`seu valor em  hectômetro é: ${meter /100}`)
    break
    case('km'):
    alert(`seu valor em quilômetro é: ${meter /1000}`)
    break
    default:
        alert('medida inválida, tente novamente!')
}