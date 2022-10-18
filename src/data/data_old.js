// let data = [
//   {
//     id : 0,
//     title : "White and Black",
//     content : "Born in France",
//     price : 120000
//   },

//   {
//     id : 1,
//     title : "Red Knit",
//     content : "Born in Seoul",
//     price : 110000
//   },

//   {
//     id : 2,
//     title : "Grey Yordan",
//     content : "Born in the States",
//     price : 130000
//   }
// ] 


// function csvToJson(csv) {
//   let lines = csv.split("\n");

//   let result = [];
//   let headers;
//   headers = lines[0].split(",");

//   for (let i = 1; i < lines.length; i++) {
//     let obj = {};

//     if(lines[i] == undefined || lines[i].trim() == "") {
//       continue;
//     }

//     let words = lines[i].split(",");
//     for(let j = 0; j < words.length; j++) {
//       obj[headers[j].trim()] = words[j];
//     }

//     result.push(obj);
//   }

//   console.log(result);
// }

// let data = csvToJson('./dacp.csv');

// export default data;