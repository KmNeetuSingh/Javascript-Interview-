let promise = new Promise((resolve, rejecet) => {
    let success = false
    if (success){
        resolve("Promise resolved")
    }
    else {
        rejecet("promise reject")
    }
})
 
// promise 
// .then((res) => console.log(res))
// .catch((err) => console.log(err))
async function handle() {
    try{
        let res = await promise;
        console.log( res) 
    }
    catch(err){
        console.log(err)
    }
    
}
handle()