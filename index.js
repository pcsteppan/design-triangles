const pug = require('pug');
const imageFolder = './images/';
const fs = require('fs');

let data = {"sections" : []}

fs.readdirSync(imageFolder).forEach(subfolder => {
  const subfolder_data = {"name" : subfolder, "images" : []}
  fs.readdirSync(`./images/${subfolder}`).forEach(file => {
    if (file == "info.txt"){
      const text = fs.readFileSync(`./images/${subfolder}/info.txt`, encoding="utf8")
      subfolder_data.text = text.split('\n')
      subfolder_data.has_text = true
    } else if (file == "links.txt") {
      const links = fs.readFileSync(`./images/${subfolder}/links.txt`, encoding="utf8")
      subfolder_data.links = links.split('\n')
      subfolder_data.has_links = true
    } else {
      //image
      subfolder_data.images.push(file)
    }
  })
  data.sections.push(subfolder_data)
})

// Compile template.pug, and render a set of data
console.log(pug.renderFile('template.pug', {
  "data": data.sections
}));
// "<p>Timothy's Pug source code!</p>"
