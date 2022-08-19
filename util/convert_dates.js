// cd content/posts
// ls | xargs -I{} -n1 sh -c 'node ../../util/convert_dates.js "$1" > "$1".out' -- {}
// rm *.md

const readLine = require('readline');
const fs = require('fs');
const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc)
dayjs.extend(timezone)


function format(str) {
  return dayjs(str).tz("America/New_York", true).format()
}

var file =  process.argv[2]//'./content/posts/angellist-roll-up-vehicle-why-what-and-how.md';
var rl = readLine.createInterface({
    input : fs.createReadStream(file),
    output : process.stdout,
    terminal: false
});


const datesKeys = /^((createdAt|updatedAt|publishedOn|public):\s?)\'?(.+)\'?/
rl.on('line', function (text) {

  let match = datesKeys.exec(text)
  if (match) {
    // console.log(JSON.stringify(match,null,2))
    // console.log('######################################################')
    console.log(`${match[1]}"${format(match[3].toString())}"`)
  } else {
   console.log(text);
  }

// createdAt: 'Wed Jul 28 2021 17:03:25 GMT+0000 (Coordinated Universal Time)'
// updatedAt: 'Wed Feb 23 2022 16:16:04 GMT+0000 (Coordinated Universal Time)'
// publishedOn: 'Wed Feb 23 2022 16:18:06 GMT+0000 (Coordinated Universal Time)'
// author: kam-lasater
// category: Company
// hidden: false
// featured: false
// public: Wed Jul 28 2021 00:00:00 GMT+0000 (Coordinated Universal Time)



});
