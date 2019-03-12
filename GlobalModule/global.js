function PrintSomething(){
  console.log("I am global !")
  console.log("I am here ->", __dirname+" and my file name is",__filename);
}

setTimeout(PrintSomething,1000);