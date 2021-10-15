const lblOffline = document.querySelector("#lblOffline");
const lblOnline = document.querySelector("#lblOnline");
const socket = io();

socket.on('connect', ()=> {
    console.log('Connected on Client');
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';

});

socket.on('disconnect', ()=> {
    console.log('Disconnected on Client');
    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});

