var express = require('express');
var app = express();
var QRCode = require('qrcode');

let qrRR;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const TODISPLAY = [];

app.get('/', function(req, res) {
  res.send(`<div><p>Say "hello" and ask politely to /qrcode, he likes <b>queries with parameters</b> !</p>
  <iframe src="https://giphy.com/embed/xT5LMrmNFmx9130Q5G" width="480" height="366" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/thesimpsons-the-simpsons-3x13-xT5LMrmNFmx9130Q5G">via GIPHY</a></p></div>`);
});

app.get('/qrcode-rick-rolled', async (req, res) => {
  const realQr = await QRCode.toDataURL(process.env.FLAG || 'AXALIFEJAPAN-WAS-HERE-2021', {
    color: {
      dark: '#00F',  // Blue dots
      light: '#0000' // Transparent background
    }
  });
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
  <style>
  </style>
  </head>
  <body>
  <div>
    <iframe src="https://giphy.com/embed/3o6fJ1BM7R2EBRDnxK" width="480" height="234" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/congratulations-congrats-3o6fJ1BM7R2EBRDnxK">via GIPHY</a></p>
    <img src="${realQr}" height="300" width="300" />
  </div>
  </body>
  </html>
  `);
});


app.get('/qrcode',async (req, res) => {
  console.log(req.query);
  // if(req.header('User-Agent'))
  if(!req.query.hello) {
    return res.send('<div><p>Who are you ? you can at least say "hello" and ask nicely with the magic word ("please")... get lost !<p/><iframe src="https://giphy.com/embed/TZFmvyDvr3WaQ" width="480" height="205" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/reactiongifs-TZFmvyDvr3WaQ">via GIPHY</a></p></div>');
  } else if(req.query.hello !== 'please' && req.query.hello !== 'PLEASE') {
    return res.send('<div><p>I said, "please" be nice</p><iframe src="https://giphy.com/embed/Ih7j3EzwCydUPTlOIZ" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/rickandmorty-season-1-adult-swim-rick-and-morty-Ih7j3EzwCydUPTlOIZ">via GIPHY</a></p></div>');
  } else if(req.query.hello == 'please') {
    return res.send('<div><p>Shout it out please, don\'t be afraid !</p><iframe src="https://giphy.com/embed/Z9gzEHTUEr1Nv4bIdr" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/supercarschampionship-Z9gzEHTUEr1Nv4bIdr">via GIPHY</a></p></div>');
  }

  const qrcode = '/qr2-dmg-steg.png';
  const page = `
  <!DOCTYPE html>
  <html>
  <head>
  <style>
  html, body {margin: 0; height: 100%; overflow: hidden}
  </style>
  </head>
  <body>
  <div>
    <p>Jeez ok, here it is:</p>
    <img src="${qrRR}" height="300" width="300" />
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <p>oops, not this one eheh :D, scroll down</p>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <p>a bit more ...</p>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <iframe src="https://giphy.com/embed/amxLHEPgGDCKs" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dancing-troll-amxLHEPgGDCKs">via GIPHY</a></p>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <p>almost there !</p>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <iframe src="https://giphy.com/embed/1oDWKghJp3M9yIOkEg" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mrw-track-theory-1oDWKghJp3M9yIOkEg">via GIPHY</a></p>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <p>here it is:</p>
    <br>
    <img src="${qrcode}" height="300" width="300" />
    <p>I hope it is not too damaged :)</p>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <a style="color: white;" href="https://stylesuxx.github.io/steganography/">could be useful ?</a>
  </div>
  </body>
  </html>
  `;
  res.send(page);
});

app.post('/mirror', function(req, res) {
  console.log('in mirror post', req.body);
  TODISPLAY.push(req.body);
  res.send(req.body);
});
app.get('/mirror', function(req, res) {
  console.log('in mirror get');
  res.send(JSON.stringify(TODISPLAY));
});

var server = app.listen(8080, async function() {
    qrRR = await QRCode.toDataURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})