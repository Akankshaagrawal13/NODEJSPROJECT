const fs = require('fs');
fs.readFile("Read.txt",(err,data) =>{ 
    if(err)
    {
        throw err;
    }
    console.log(data.toString());
});

fs.appendFile("Read1.txt", "appended Data", (err) =>{
    if(err){
        throw err;
    }
    console.log("Completed Appending")
})
fs.unlink("Read1.txt", (err) =>{
    if(err) throw err;
    console.log("completed Deleting")
}
)
