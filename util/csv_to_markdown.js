const csv = require('csv-parser')
const fs = require('fs')
const {render} = require('mustache')
var TurndownService = require('turndown')

var td = new TurndownService({
  preformattedCode: true,
  codeBlockStyle: 'fenced',
})

const template = fs.readFileSync('./util/posts.mustache').toString()

const results = [];

(async ()=>{


  console.log(fs.readFileSync('./util/posts.csv').toString())

  fs.createReadStream('./util/posts.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('error', (error) => console.log(error))
  .on('end', () => {

    results.forEach((doc) => {

      console.log(doc.Name)

      doc.markdown = td.turndown(doc['Post Body'])
        .split('\\`').join('`')

      let md = render(template, doc)
      // if (doc.Slug === '6-command-line-tools-all-experts-know') {
      //   console.log(doc.markdown)
      //   console.log('#########################################')
      //   console.log('#########################################')
      //   console.log(md)
      // }
      console.log(`./content/posts/${doc.Slug}.md`)
      fs.writeFileSync(`./content/posts/${doc.Slug}.md`,md)
    })
  });

})()
