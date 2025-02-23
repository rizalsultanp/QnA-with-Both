const pertanyaan = document.getElementById('pertanyaan')
const jawaban = document.getElementById('jawaban')
const loadders = document.getElementById('loadders')
const container = document.getElementById('container')
let btnSend = document.getElementById('btn-send')

let init = 0;
let userData = [];



const botSay = (data) => {
    return ['Hallo, perkenalkan nama saya Ribot. Siapa nama kamu?',
        `Hallo ${data?.nama}, berapa usia kamu?`,
        `Ohh ${data?.usia}, Hobby kamu apa?`,
        `WEW sama dong aku juga hobby nya ${data?.hobby}, punya pacar belum?`,
        `ohh ${data?.pacar}, oke!`
    ]
}

pertanyaan.innerHTML = botSay()[0]

btnSend.addEventListener('click', function botStart() {
    if (jawaban.value.length <= 1) return alert('jawaban Nya Mana :(');

    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value })
        userData.push(jawaban.value)
    } else if (init === 2) {
        botDelay({ usia: jawaban.value })
    } else if (init === 3) {
        botDelay({ hobby: jawaban.value })
    } else if (init === 4) {
        botDelay({ pacar: jawaban.value })
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
});

function botDelay(jawabanUser) {
    loadders.style.display = 'block';
    container.style.filter = 'blur(1px)'
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loadders.style.display = 'none'
        container.style.filter = 'none'
    }, 800);
    userData.push(jawaban.value)
    jawaban.value = '';
};

function finishing() {
    pertanyaan.innerHTML = `Thanks ${userData[0]} Sudah Mau Mengobrol Dengan Ribot :P`
    jawaban.value = 'oke sipp';
};

function botEnd() {
    alert(`Terima Kasih ${userData[0]} Mau Menjawab :D`)
    window.location.reload()
};
