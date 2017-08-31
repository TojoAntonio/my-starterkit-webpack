import print from './hello.js'

let demo = document.querySelector("#demo");
//demo.innerHTML = text;
print();

if(module.hot) {
    console.log('Accept hot module replacement');
    module.hot.accept('./hello.js', function() {
        let c = require('./hello.js');
        console.log('Accept hot module replacement');
        print();
        /*let c = require('./hello.js');
        demo.innerHTML = c.default;*/
    })
}