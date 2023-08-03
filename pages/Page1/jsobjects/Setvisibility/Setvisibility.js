export default {
	myVar1: [true,false,true],
	myVar2: {},
	myFun1 () {
	//	Button1.isVisible?Button1.setVisibility("true"):Button1.setVisibility(false)
		Button1.setVisibility(1)
	},
	async myFun2 () {
		appsmith.user.email.includes("anandi")? Button1.setVisibility(true):Button1.setVisibility(false)
	},

	func3(){
		setInterval(()=>{
			Button1.setVisibility(this.myVar1[1])
		},3000)
	},
	func4(value1){
		Button3.setVisibility(value1)
	},
	func6(){
		Api1.run((s)=>{
			Button1.setVisibility(this.myVar1[1])
		})
	},
	async func7 (){
		setInterval(()=>{Button1.isVisible? Button1.setVisibility(false):Button1.setVisibility(true)},4000)
	},

	func8(){
		storeValue('val1',Api1.data.users[0].name).then(()=>{console.log(appsmith.store.val1)(!appsmith.store.val1)?Button1.setVisibility(false):Button1.setVisibility(true)})
	}	,

	func9 (){
		for (let i =0; i<this.myVar1.length;i++){
			console.log(this.myVar1[i])
			Button1.setVisibility(this.myVar1[i])
		}
	},

	func10(){
		try{
			Api1.run().then(()=>{
				this.myVar1[1]=false
				Button1.setVisibility(this.myVar1[1])	
			})
		}
		catch(e){
			showAlert(e.message)}
	},
func11(){
		Button1.setVisibility(true).then((s)=>{Button1.isVisible? showAlert("visible"):showAlert("not visible")})
},
	func12(){
		Button1.setVisibility()
	}
}