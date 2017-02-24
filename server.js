let express = require('express');
let app = express();
app.listen(3000, () => console.log('Server started'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/',(req, res) => res.render('home'));
