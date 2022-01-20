const cripto = document.getElementById("cripto");
const descript = document.getElementById('descript');
const textarea = document.getElementById('story')

cripto.addEventListener("click", function criptografar() {
    let text = story.value
    let testando = text.split('')
    console.log(testando);
    for (let i =0; i<=testando.length; i++) {
        if(testando[i] === 'a') {
            testando[i] = 'ai'
        }
        else if(testando[i] === 'e') {
            testando[i] = 'enter'
        }
        else if(testando[i] === 'i') {
            testando[i] = 'imes'
        }
        else if(testando[i] === 'o') {
            testando[i] = 'ober'
        }
        else if(testando[i] === 'u') {
            testando[i] = 'ufat'
        }
    }
    
    var c = testando.join('')
    textarea.value = c    
})


descript.addEventListener("click", function descriptografar() {
    let text = story.value
    let ai = /ai/gi
    let enter = /enter/gi   
    let imes = /imes/gi
    let ober = /ober/gi
    let ufat = /ufat/gi    
    text = text.replace(ai, "a").replace(enter, 'e').replace(imes, 'i').replace(ober, "o").replace(ufat, 'u')
    
    textarea.value = text
    })


const copy = document.getElementById('copy')
copy.addEventListener("click", function copy(){
    navigator.clipboard.writeText(textarea.value);
})