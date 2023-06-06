// Task 1
// Напишите функцию, которая вернет текст внутри первого тэга - a.
// const getText = (arr) => {
//     return arr[0].innerText
// }
// console.dir(getText(Array.from(document.getElementsByClassName("zero"))))
// Task 2
// Напишите функцию, которая вернет массив с текстами внутри тэгов - a.
// const getText = (arr) => {
//     return arr.reduce((acc, rec) => {
//         acc = [...acc, rec.innerText]
//         return acc
//     }, [])

// }
// console.dir(getText(Array.from(document.getElementsByTagName("a"))))
// Task 3
// Напишите функцию, которая вернет массив с текстами внутри тэгов элементов с классом nav__link__item
// const getText = (arr) => {
//     return arr.reduce((acc, rec) => {
//     acc = [...acc, rec.innerText]
//     return acc
//  }, [])
// }

// console.dir(getText(Array.from(document.getElementsByClassName("nav__link__item"))))

// Task 4
// Напишите функцию, которая вернет массив со значениями атрибута class внутри тэгов элементов с классом nav__link__item
// const getClass = (arr) => {
//     return arr.reduce((acc, rec) => {
//     acc = [...acc, rec.className]
//     return acc
//  }, [])
// }
// console.dir(getClass(Array.from(document.getElementsByClassName("nav__link__item"))))

// Task 5
// Напишите функцию, которая вернет массив со значениями атрибута data-link внутри тэгов элементов с классом nav__link .
// let a = document.getElementsByClassName("zero")
// console.dir(a[0].innerText)

// const getDaata = (arr) => {
//     return arr.map((el) => {
//         return el.dataset.link
//     })
// }

// console.dir(getDaata(Array.from(document.getElementsByClassName("nav__link"))))

