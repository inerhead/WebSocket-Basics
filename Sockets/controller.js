

const socketController = ( socket ) => { 
    console.log('socket', socket.id);
    socket.send("Hello! From BAck End");
    socket.on('disconnect', (s) => {
        console.log(`Disconnect from ${s}`);
    });

    socket.on('message-API', ( message, call ) => {
        console.log('Message: ', message);

        // al guardar en BD retornar un ID
        const id = "13456";
        
        if (call) {
            call({ id, name: 'createBD', date: new Date().getTime() }); 
        }
        //console.log(typeof call);

      //  this.io.emit('serverMessaje', "Hello Word from SERVER !!!");
      socket.broadcast.emit('serverMessaje', "Hello Word from SERVER !!!");
    });

};


module.exports = {
    socketController
};


