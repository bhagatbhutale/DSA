
let count = 0;
function abc() {
   count++;
   console.log(count);

   if(count > 5) {
    return;
   }
   abc()
   
}
abc()