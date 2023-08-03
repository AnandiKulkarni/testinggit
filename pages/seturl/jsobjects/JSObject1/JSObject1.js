export default {
	myVar1: ["https://www.wikipedia.org/"],
	myVar2: {},
	myFun1 () {
		setTimeout(()=>{
		Video1.setURL("https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4").then(s=>Video1.setPlaying(true))},3000)
	},
	async myFun2 () {
		Video1.setURL("https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4").then(s=>Video1.setPlaying(true))
	},
		async myFun3 () {
			let var1 = "aaa"
		Iframe1.setURL(this.myVar1[0]).then(s=>console.log(url))
	},
		async myFun5 (var1) {
		Video2.setURL(var1).then(s=>Video1.setPlaying(true))
	},
	
async myFun4 () {
		  fetch("").then(s=>s.json()).then((s)=>{
				console.log(s)
			})
	},
		async myFun6 (url) {
			let var1 = "aaa"
		Iframe2.setURL(url).then((s)=>{console.log(url)})
	},
}