let config = {
    ip: '127.0.0.1',
    port: '80',
    blocked: true,
}


let ip = '192.168.0.114';
let port = '8000';

({ ip, port } = config)

console.log(ip, port);
