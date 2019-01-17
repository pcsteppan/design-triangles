const pug = require('pug');
const imageFolder = './images/';
const fs = require('fs');

let data = {"sections" : []}

fs.readdirSync(imageFolder).forEach(subfolder => {
  const subfolder_data = {"name" : subfolder, "images" : []}
  fs.readdirSync(`./images/${subfolder}`).forEach(file => {
    subfolder_data.images.push(file)
  })
  data.sections.push(subfolder_data)
})

// const data = {
//   "pages" : [
//     {
//       "name" : "architecture",
//       "images" : 13
//     },
//     {
//       "name" : "computer science",
//       "images" : 4
//     },
//     {
//       "name" : "color theory",
//       "images" : 0
//     },
//     {
//       "name" : "economic",
//       "images" : 0
//     },
//     {
//       "name" : "geometry",
//       "images" : 0
//     },
//     {
//       "name" : "psychology",
//       "images" : 0
//     },
//     {
//       "name" : "semiotics",
//       "images" : 0
//     },
//     {
//       "name" : "typography",
//       "images" : 0
//     }
//   ]
//}


// Compile template.pug, and render a set of data
console.log(pug.renderFile('template.pug', {
  "data": data.sections
}));
// "<p>Timothy's Pug source code!</p>"
