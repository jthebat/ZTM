const http = require('http');

const PORT = 3000;

/**#1
 * const server = http.createServer((req,res) => {  
    //req is a readable stream which we can listen to for data coming in through that stream by
    //using the .on function
    //res is a writable stream so we wanted to respond with a success message
    res.writeHead(200 , {
        // 'Content-Type': 'text/plain',
        'Content-Type': 'application/json'
    })
    res.end(JSON.stringify({
        id:1,
        name: 'Sir Issac Newton'
    }));

});
//localmachine doesn't have a domain but we do have an IP address 127.0.0.1 or default name => localhost
//we can access any server running on our machine by using this localhost
server.listen(PORT,() => {
    console.log(`Listening on port ${PORT} ...`)
}); 
 * 
 */

/** #2
 * const server = http.createServer();

server.on('request',(req,res) => {  
    if(req.url==='/friends') {
        // res.writeHead(200 , {        
        // 'Content-Type': 'application/json'
        // })
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json') 
        res.end(JSON.stringify({
            id:1,
            name: 'Sir Issac Newton'
        }));
    } else if (req.url ==='/messages') {
        res.setHeader('Content-Type','text/html')
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello Issac!</li>');
        res.write('<li>What are your thoughts on astronomy?</li>');
        res.write('</ul>');    
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {    
        res.statusCode = 404;
        res.end()
    }     
    

});
*/
/** #3
 * const server = http.createServer();

const friends = [
    {
        id:0,
        name: 'Sir Issac Newton'
    },
    {
        id:1,
        name: 'Albert Einstein'
    },
    {
        id:2,
        name: 'Nicola Tesla'
    }
]

server.on('request',(req,res) => {  
    const items = req.url.split('/');
    // /friends/2  => ['', 'friends', '2']
    if(items[1]==='friends') {        
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json') 
        if(items.length ===3 ) {
            const friendIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendIndex]));
        } else {
            res.end(JSON.stringify(friends));
        }
        
    } else if (items[1] ==='messages') {
        res.setHeader('Content-Type','text/html')
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello Issac!</li>');
        res.write('<li>What are your thoughts on astronomy?</li>');
        res.write('</ul>');    
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {    
        res.statusCode = 404;
        res.end()
    }     
});
 */
/** #4
 * const server = http.createServer();

const friends = [
    {
        id:0,
        name: 'Sir Issac Newton'
    },
    {
        id:1,
        name: 'Albert Einstein'
    },
    {
        id:2,
        name: 'Nicola Tesla'
    }
]

server.on('request',(req,res) => {  
    const items = req.url.split('/');
    // /friends/2  => ['', 'friends', '2']
    if ( req.method === 'POST' && items[1] === 'friends') {
        req.on('data', (data) => {
            const friend = data.toString();
            console.log('Request:' , data);            
            friends.push(JSON.parse(friend));
        })
        
    } else if( req.method === 'GET' && items[1]==='friends') {        
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json') 
        if(items.length ===3 ) {
            const friendIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendIndex]));
        } else {
            res.end(JSON.stringify(friends));
        }
        
    } else if ( req.method === 'GET' && items[1] ==='messages') {
        res.setHeader('Content-Type','text/html')
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello Issac!</li>');
        res.write('<li>What are your thoughts on astronomy?</li>');
        res.write('</ul>');    
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {    
        res.statusCode = 404;
        res.end()
    }     
});
 */
const server = http.createServer();

const friends = [
    {
        id:0,
        name: 'Sir Issac Newton'
    },
    {
        id:1,
        name: 'Albert Einstein'
    },
    {
        id:2,
        name: 'Nicola Tesla'
    }
]

server.on('request',(req,res) => {  
    const items = req.url.split('/');
    // /friends/2  => ['', 'friends', '2']
    // /friends/
    if ( req.method === 'POST' && items[1] === 'friends') {
        req.on('data', (data) => {
            const friend = data.toString();
            console.log('Request:' , data);            
            friends.push(JSON.parse(friend));
        })
        req.pipe(res)
    } else if( req.method === 'GET' && items[1]==='friends') {        
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json') 
        if(items.length ===3 ) {
            const friendIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendIndex]));
        } else {
            res.end(JSON.stringify(friends));
        }
        
    } else if ( req.method === 'GET' && items[1] ==='messages') {
        res.setHeader('Content-Type','text/html')
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello Issac!</li>');
        res.write('<li>What are your thoughts on astronomy?</li>');
        res.write('</ul>');    
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {    
        res.statusCode = 404;
        res.end()
    }     
});

//localmachine doesn't have a domain but we do have an IP address 127.0.0.1 or default name => localhost
//we can access any server running on our machine by using this localhost
server.listen(PORT,() => {
    console.log(`Listening on port ${PORT} ...`)
}); 

