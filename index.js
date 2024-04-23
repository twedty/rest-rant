require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.send('404 page')
})

app.listen(process.env.PORT)




// 2. Make a new folder (named for the project)

// 3. Inside the folder create a file called ‘index.js’

// 4. Open my terminal and navigate to the project folder

// 5. Run the command “npm init -y”

// 6. Run the command “npm install express”

// 7. Open up ‘index.js’

// 8. Require express at the top of the file

// 9. Initialize the app variable

// 10. Create the home page route
//    a. Call app.get()
//    b. Set ‘/‘ as the path (first arg)
//    c. Write callback function with req, res
//    d. Call res.send(‘hello world’) 

// 11. Call app.listen(3000) to keep server open