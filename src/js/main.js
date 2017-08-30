import text from './hello.js'

let demo = document.querySelector("#demo");
demo.innerHTML = text;

if(module.hot) {
    module.hot.accept('./hello.js', function() {
        let c = require('./hello.js');
        demo.innerHTML = c.default;
    })
    module.hot.dispose(function() {
      
    })
}