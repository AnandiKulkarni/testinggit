export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
    showAlert("i am called")
	},
	async myFun2 () {
  fetch("https://mock-api.appsmith.com/users").then(s=>s.json()).then((a)=>{
		console.log(a)
	})
	},
myfunc3(){
		return	fetch('https://api.github.com/users').then(
			(res)=>{
				console.log(res.status)
				console.log(res.ok)
				for (let [key, value] of res.headers) {
					console.log(`${key} = ${value}`);}
				return res.json()
			}) .then((res2)=>{
			console.log(res2)
				return(res2)
		}
							)
}	
	
}