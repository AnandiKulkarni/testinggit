export default {
	myVar1: [true,false,true,false],
	myVar2: {},
	myFun1 () {
		appsmith.geolocation.watchPosition()
		appsmith.user.email.includes("anandi")?
		Button1.setVisibility(true):Button1.setVisibility()
	},
	async myFun2 (value1) {
  	console.log(value1)
    Action4.setVisibility(true).then(showAlert("hi"))// where is the lint error
	
	},
	
	fun3 (){
	return new Promise((resolve,reject)=>{
			resolve(Button1.setVisibility(false))
		})
	},
	
	func4(){
		Api1.run(()=>{Button1.setVisibility(true)},()=>{Button1.setVisibility(false)}).then(()=>{
			setInterval(()=>{
			var var1 = 	fetch("https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new").then((s)=>s.json()).then((s)=> s[0])
			})
		})
	},
		func5(){
		setTimeout(()=>{Button1.isVisible?Button1.setVisibility(false):Button1.setVisibility(true)},2000)
	},
			func6(){
return 	fetch("https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new").then((s)=>s.json())
				
	},
func7(){
	try{
		 Api1.run().then(()=>{
			Button1.setVisibility(true)	
		})
	}
	catch(e){
	showAlert(e.message)}
},
	
	async func8(){
		for (let i =0; i<=this.myVar1.length;i++){
		  Button1.setVisibility(this.myVar1)
		}
	}
}