const path = require('path');
const v8 = require('v8');

console.log(path.basename(__filename));
const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

console.log(dirUploads);
console.log(path.basename(__filename));

console.log(v8.getHeapStatistics());
