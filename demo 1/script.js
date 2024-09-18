let homeDOM = document.getElementsByTagName('a')[0]
let aboutDOM = document.getElementsByTagName('a')[1]
let contactDOM = document.getElementsByTagName('a')[2]

let contentDOM = document.getElementById('content')

window.addEventListener('popstate', () => {
    //backåt knapp
    switch (history.state.page) {
        case 0:
            fetchPage('home.html')
            break
        case 1:
            fetchPage('about')
            break
        case 2:
            fetchPage('contact.txt')
            break
    }
})

homeDOM.addEventListener('click', (e) => {
    history.pushState({ page: 0 }, '', '/home')
    fetchPage('home.html')
})
aboutDOM.addEventListener('click', (e) => {
    history.pushState({ page: 1 }, '', '/about')
    fetchPage('about')
})
contactDOM.addEventListener('click', (e) => {
    history.pushState({ page: 2 }, '', '/contact')
    fetchPage('contact.txt')
})

function fetchPage(filename) {
    if (typeof filename != 'string') return //guard clause
    // sätt in progressbar animation
    fetch(filename)
        .then((resultat) => {
            //av aktivera progressbaren för den är klar med fetch
            return resultat.text()
        })
        .then((data) => (contentDOM.innerHTML = data))
        .catch((e) => {
            //av aktivera progressbaren för den är klar med fetch
            // visa error meddelanden
        })
}

let array = ['lägenhet', 'hus', 'bostad']

let height = 5

if (height > 150) console.log('average')
else if (height > 170) console.log('high')
else console.log('short')

document.getElementById('box')[0].value

console.log(x)
if (true) {
    var x = 5
    var x = 10
}

let text = 'Marco'
let text2 = ' Polo'

alert(text + ' Polo')
text += text2

text2 = text.concat(text2)

text = text + 'marco'

text.endsWith('polo')

showPopUp('hejsan')

function showPopUp(text) {
    return text
    alert(text)
}

for (let i = 0; i < 6; i += 2) {
    console.log('loop: ' + i)
    if (i == 4) break
}

let result = Math.floor(Math.random() * 3 + 1)
console.log(array['2'] !== array['02'])
let array = [1, 2]

function addition(tal1 = 1, tal2 = 1) {
    return tal1 + tal2
}

console.log(add(add('hej', 2), add(2)))

;('hej4')
;('hej6')
;('hej5')
;('hej221')
;('hej23')

if ('hej') {
    alert('hej')
}

if (0) {
    alert('0')
}

console.log()
var a = 1
array.pop()
alert()
document.getElementById('container').appendChild(element)
console.log(1 + '2' + '2')
console.log(1 + +'3' + '2')
console.log(1 + -'1' + '2')
console.log(+'1' + '1' + '2')

let footballPlayer1 = {
    namn: 'Benny',
    age: 32,
    kick: function (times) {
        console.log('kick!!! '.repeat(times))
    },
}

footballPlayer1.age //kommer visa 'kick!!! ' 2 gånger