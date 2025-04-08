document.getElementById('main').addEventListener('click', function () {
    document.getElementById('my-modal').classList.add('open')
})
document.getElementById('close-my-modal-btn').addEventListener('click', function () {
    document.getElementById('my-modal').classList.remove('open')
})