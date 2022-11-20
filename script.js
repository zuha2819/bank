let bank = prompt('Tilni tanlang / Выберите язык uz||ru')

if (bank === 'uz') {

  let num = prompt('Balans / Puli yechib oling / Kartami qaytarib ber')

  if (num == 1) {
    alert('Balansingiz :  ')

  }
  else if (num == 2) {
    alert('Puli yechib oling')

  }
  else if (num == 3) {

    alert('Kartami qaytarib ber')
  }

}else if (bank === 'ru'){
  let num2 = prompt('Баланс / Вывести наличным / Отдай мою карту ')
  if( num2 == 1){
    alert('Баланс : ')
  }
  else if (num2 == 2) {
    alert('Вывести наличным')
  }
  else if (num2 == 3){
    alert('Отдай мою карту')
  }
}else{
  alert('xato / ошибка')
}