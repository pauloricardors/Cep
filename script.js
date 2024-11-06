let input = document.getElementById('input')
let btn = document.getElementById('buscar')
let cidade = document.getElementById('cidade')
let estado = document.getElementById('estado')
let regiao = document.getElementById('regiao')
let information = document.getElementById('information')
// #1660a5 => color

btn.addEventListener('click', function (e) {
    e.preventDefault()

    let newInput = input.value

    fetch(`https://viacep.com.br/ws/${newInput}/json/`)
        .then((resolve) => resolve.json())
        .then((data) => {

            if (data.erro) {
                Toastify({
                    text: "CEP INVÁLIDO!",
                    duration: 3000,
                    close: true,
                    gravity: "top",
                    position: "right",
                    stopOnFocus: true,
                    style: {
                        background: "#1660a5",
                    },
                    onClick: function () { }
                }).showToast();
                return
            }

            information.style.display = 'block'
            cidade.textContent = data.localidade
            estado.textContent = data.uf
            regiao.textContent = data.regiao
            input.value = ''
        })
        .catch((error) => {
            Toastify({
                text: "CEP não encontrado!",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                    background: "#1660a5",
                },
                onClick: function () { }
            }).showToast();
            return
        })
})