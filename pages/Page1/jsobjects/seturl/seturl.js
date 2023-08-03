export default { //url and palying
	myVar1: [],
	myVar2: {},
	myFun1 () {
		Audio1.setURL("https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3").then(s=>Audio1.setPlaying(true))
	},
	async myFun2 () {
		Audio2.setURL("https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3").then(s=>Audio2.setPlaying(true))
	},

	async myFunc4(){
		DocumentViewer1.setURL("https://www.orimi.com/pdf-test.pdf")
	},

	async myFun3 () { 
		setTimeout(()=>{
			Video1.setURL("https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4").then(s=>Video1.setPlaying(true))
		},2000)			
	},
	async myFun4 () { 
		Iframe1.setURL("https://www.wikipedia.org/").then(s=>showAlert("success"))
	},
	async myFun5 () { 
		setTimeout(()=>{
			Iframe1.setURL("https://www.wikipedia.org/").then(s=>showAlert("success"))
		},3000)
	},

	async myFun6 () { 
		const myFuncExpr = () => {
			console.log("test")
			return Text1.isVisible
		};
		let avr1 = myFuncExpr()
		Audio1.setPlaying(avr1).then(s=>showAlert("success"))
	},

	func7(var1){
		Api1.run().then(()=>{
			Video1.setPlaying(var1).then(s=>showAlert('success'))
		})
	},
	
	func8(var1){
			Video1.setPlaying(var1).then(s=>showAlert('success'))
	},
	func9(){
		return Text1.isVisible
	},
	func10(){
 (()=> console.log("hi"))()
	}
	
}