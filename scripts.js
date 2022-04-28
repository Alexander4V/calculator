let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let button4 = document.getElementById('button4')
let button5 = document.getElementById('button5')
let button6 = document.getElementById('button6')
let button7 = document.getElementById('button7')
let button8 = document.getElementById('button8')
let button9 = document.getElementById('button9')
let button0 = document.getElementById('button0')
let buttonAC = document.getElementById('buttonAC')
let buttonDecimal = document.getElementById('button_decimal')
let output = document.getElementById('output')

button1.addEventListener('click', e => {
let numb = e.target.dataset.value
let currentValue = output.innerHTML
if (currentValue == 0) {
  output.innerHTML = numb
 } else {
  output.innerHTML += numb
 }
 // output.innerHTML = output.innerHTML + numb //аналогично output.innerHTML += numb
})

button2.addEventListener('click', e => {
let numb = e.target.dataset.value
let currentValue = output.innerHTML
if (currentValue == 0) {
  output.innerHTML = numb
  } else {
  output.innerHTML += numb
  }
})

button3.addEventListener('click', e => {
 let numb = e.target.dataset.value
 let currentValue = output.innerHTML
 if (currentValue == 0) {
   output.innerHTML = numb
  } else {
   output.innerHTML += numb
  }
})

button4.addEventListener('click', e => {
let numb = e.target.dataset.value
let currentValue = output.innerHTML
if (currentValue == 0) {
  output.innerHTML = numb
  } else {
  output.innerHTML += numb
  }
})
 
button5.addEventListener('click', e => {
let numb = e.target.dataset.value
let currentValue = output.innerHTML
if (currentValue == 0) {
  output.innerHTML = numb
  } else {
  output.innerHTML += numb
  }
})

button6.addEventListener('click', e => {
let numb = e.target.dataset.value
let currentValue = output.innerHTML
if (currentValue == 0) {
  output.innerHTML = numb
  } else {
  output.innerHTML += numb
  }
})

button7.addEventListener('click', e => {
  let numb = e.target.dataset.value
  let currentValue = output.innerHTML
  if (currentValue == 0) {
    output.innerHTML = numb
    } else {
    output.innerHTML += numb
    }
})

button8.addEventListener('click', e => {
  let numb = e.target.dataset.value
  let currentValue = output.innerHTML
  if (currentValue == 0) {
    output.innerHTML = numb
    } else {
    output.innerHTML += numb
    }
})

button9.addEventListener('click', e => {
  let numb = e.target.dataset.value
  let currentValue = output.innerHTML
  if (currentValue == 0) {
    output.innerHTML = numb
    } else {
    output.innerHTML += numb
    }
})

button0.addEventListener('click', e => {
  let numb = e.target.dataset.value
  let currentValue = output.innerHTML
  if (currentValue == 0) {
    output.innerHTML = numb
    } else {
    output.innerHTML += numb
    }
})

buttonDecimal.addEventListener('click', e => {
  let numb = e.target.dataset.value
  let currentValue = output.innerHTML
  if (currentValue !== 0) {
    output.innerHTML += numb
    } else {
    output.innerHTML = 0 + numb
    }
  
})

buttonAC.addEventListener('click', e => {
  let numb = e.target.dataset.value
  let currentValue = output.innerHTML
  output.innerHTML = 0
})
// проба изменений