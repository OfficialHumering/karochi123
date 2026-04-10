    // const box = document.getElementById('box')
    // const input = document.getElementById('inputText')

    // // Append
    // appendBtn.onclick = () => {
    //   if (input.value !== '') {
    //     box.append(input.value)
    //   } else {
    //     alert('Matn yozing!')
    //   }
    // }

    // // Prepend
    // prependBtn.onclick = () => {
    //   if (input.value !== '') {
    //     box.prepend(input.value)
    //   } else {
    //     alert('Bo‘sh matn qo‘shilmaydi!')
    //   }
    // }

    // // Before
    // beforeBtn.onclick = () => {
    //   if (input.value !== '') {
    //     box.before(input.value)
    //   } else {
    //     alert('Matn yozing!')
    //   }
    // }

    // // After
    // afterBtn.onclick = () => {
    //   if (input.value !== '') {
    //     box.after(input.value)
    //   } else {
    //     alert('Matn yozing!')
    //   }
    // }


    const box = document.getElementById('box')
    const input = document.getElementById('inputText')

    document.getElementById('appendBtn').addEventListener('click', () => {
        if (input.value.trim() !== '') {
            let el = document.createElement('h3')
            el.textContent = input.value
            el.className = 'added'
            box.append(el)
        }
    })

    document.getElementById('prependBtn').addEventListener('click', () => {
        if (input.value.trim() !== '') {
            let el = document.createElement('h2')
            el.textContent = input.value
            el.className = 'added'
            box.prepend(el)
        }
    })

    document.getElementById('beforeBtn').addEventListener('click', () => {
        if (input.value.trim() !== '') {
            let el = document.createElement('div')
            el.textContent = input.value
            el.className = 'added'
            el.style.border = '2px solid red'
            box.before(el)
        }
    })

    document.getElementById('afterBtn').addEventListener('click', () => {
        if (input.value.trim() !== '') {
            let el = document.createElement('h4')
            el.textContent = input.value
            el.className = 'added'
            el.style.background = 'pink'
            box.after(el)
        }
    })


    //     - addEventListener — метод, который позволяет "подписаться" на событие у элемента.
    //         Пример:
    // const btn = document.querySelector("#myButton");
    // btn.addEventListener("click", 


    // btn.addEventListener("click", function(ev) {
    //   console.log(ev.target); // элемент, на котором произошло событие
    //   console.log(ev.type);   // тип события, например "click"
    // });