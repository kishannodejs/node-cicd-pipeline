// new Promise((resolve, reject) => {

    
//     (resolve){
//         console.log("aaaaaaaa");
//     }
//     throw new Error('error')
//     }).then(console.log)


let p = new Promise((resolve,reject) =>{
	let a= 1+1;
	if(a==2){
	resolve("Success");
} else {
	reject("Failed");
}
})

console.log(p);

p.then((message)=>{
	console.log('This is in the then '+message);
}).then((message)=>{
	console.log('This is in the then '+message);
}).catch((message)=>{
	console.log('This is in the catch '+message);
})