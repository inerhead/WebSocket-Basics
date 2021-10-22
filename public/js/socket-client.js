const lblOffline = document.querySelector("#lblOffline");
const lblOnline = document.querySelector("#lblOnline");

const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');


const socket = io();

socket.on('connect', ()=> {
    console.log('Connected on Client');
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';

    const obj = {

    };
    socket.emit('message-API', "Hello Word from Client !!!", ( id ) => {
         console.log(id);
    });


    

});



socket.on('disconnect', ()=> {
    console.log('Disconnected on Client');
    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});


socket.on('serverMessaje', (m) => {
    console.log(m);
});




btnEnviar.addEventListener( 'click', () => {

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123ABC',
        fecha: new Date().getTime()
    }
    
    socket.emit( 'message-API', payload, ( id ) => {
        console.log('Desde el server', id );
    });

});