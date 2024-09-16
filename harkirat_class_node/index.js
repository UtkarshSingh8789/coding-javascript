const path=require("path")
console.log("hii")
// for using chalk library we have to form a new file index.mjs
console.log(__dirname)//ye print krega abhi hum jis directory
// output-/workspaces/coding-javascript/harkirat_class_node
console.log(path.join(__dirname,"index.js"))//joints multiple path together
//output-/workspaces/coding-javascript/harkirat_class_node/index.js
// the good thing about path librayr is lets uh join multiple directoories ffuture diirectories etc..
