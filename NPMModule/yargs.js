var argv = require('yargs').argv;
const fs = require('fs');
const readline = require('readline');

// fOR rEADING A FILE THROUGH YARGS
if(argv._[0] == 'read' && argv.fileName!= undefined){
   fs.readFile(argv.fileName,(err,data)=>{
       if(err){
           return console.log('ERROR IN READING file', argv.fileName);
       }
       console.log(data.toString());

   }) 
} else if(argv._[0] == 'delete' && argv.fileName!= undefined){
   const rl = readline.createInterface(
       {
          input: process.stdin,
          output: process.stdout
       });

    rl.question('Are you sure you wanna delete:' +argv.fileName+'?',(answer)=>{
        var deleted = true;
        if(answer == 'Y' || answer == 'y')
        {
            fs.unlink(argv.fileName, (err)=>
            {
                if(err){
                    console.log('error deleting file',argv.fileName)
                    rl.close();
                    deleted= false;
                }
                if(deleted == true)
                {
                    console.log('completed Deleting File',argv.fileName);
                }
                rl.close();
            });
        }
        else{
            rl.close();
        }
    });
}
else{
    console.log("Incorrect Command");
}

//console.log(argv);