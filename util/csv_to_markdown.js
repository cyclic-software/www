const csv = require('csv-parser')
const fs = require('fs')
const {render} = require('mustache')
var TurndownService = require('turndown')

var td = new TurndownService()

const template = fs.readFileSync('./util/posts.mustache').toString()

const results = [];

(async ()=>{

  fs.createReadStream('./util/posts.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {

    results.forEach((doc) => {

      doc.markdown = td.turndown(doc['Post Body'])

      let md = render(template, doc)
      if (doc.Slug === 'why-i-started-cyclic') {
        console.log(md)
      }

      fs.writeFileSync(`./content/posts/${doc.Slug}.md`,md)
    })
  });

})()
