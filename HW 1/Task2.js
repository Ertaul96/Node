const http = require('http'); //подключение модуля
http.createServer((req, res) => {  //вызов метода создания сервера http
    console.log("HTTP not found!");
    res.writeHead(404, {'Content-Type':'text/html'});
    res.write('<img src="http://handsandlegs.ru/Vsiakoe/404.jpg" alt="Sorry! Page not found!">');
    res.end();
}).listen(8080);