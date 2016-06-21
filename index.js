var gm = require('gm');
var source = '<path to source file>';

var versions = [
  '310x310',
  '196x196',
  '192x192',
  '152x152',
  '150x150',
  '144x144',
  '128x128',
  '120x120',
  '114x114',
  '96x96',
  '76x76',
  '72x72',
  '70x70',
  '60x60',
  '57x57',
  '32x32',
  '16x16'
];

versions.forEach(function(item){
  var sizes = item.split('x');
  gm(source)
  .resize(sizes[0],sizes[1])
  .write('./icons/'+item+'.png', function(err){
    if(!err)
      console.log('Writing ' + item);
    else
      console.log(err);
  });
});

