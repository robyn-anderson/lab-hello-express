const Express = require("express") // Call Express
const app = Express() // Invoke Express

const PORT = process.env.PORT || 5000


let staticServer = Express.static('public')
app.use( staticServer )

/*  Original setup before rearranging per the lab requirements

app.get('/', (req, res) => {
    res.send('Hello, home!')
})

app.get('/tea-time', (rq, res) => {
    res.send('<h5>I say,<h5><h4>don\'t you think</h4><h3>it\'s time</h3><h2>for a cup of</h2><h1>tea?</h1>')
})

app.get('/walkies', (rq, res) => {
    res.send('<h1>Time for walkies.</h1><h2><em>Definitely</em> time for walkies.</h2>')
})

app.get('/cake', (req, res) => {
    res.send('<h1>Is there <span style="color: magenta;">cake</span> here?</h1>')
}) 
*/

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/teatime', (req, res) => {
    res.sendFile(__dirname + "/public/teatime.html")
})

app.get('/timeforwalkies', (req, res) => {
    res.sendFile(__dirname + "/timeforwalkies.html")
})

app.get('/form', (req, res) => {
    res.send(`
    <form action="/welcome">
    <input type="text" placeholder="your name" name="name">
    <input type="submit">
    </form>`) 
    res.send(`Welcome ${res.query.welcome.name}`)
})



app.get('/:page', (req, res) => {
    //res.send(`You are on the ${req.params.page} page`)
    if (req.params.page === 'cake') {
        res.send('<h1>Is there <span style="color: magenta;">cake</span> here?</h1>')
    }
    if (req.params.page === 'walkies') {
        res.send('<h1>Time for walkies.</h1><h2><em>Definitely</em> time for walkies.</h2>')
    }
    if (req.params.page === 'tea-time') {
        res.send('<h5>I say,<h5><h4>don\'t you think</h4><h3>it\'s time</h3><h2>for a cup of</h2><h1>tea?</h1>')
    }
    else {
        res.send(`You are on the ${req.params.page} page`)
    }
})
 

app.listen(PORT, () =>{
    console.log(`Listening on ${PORT}`)
})