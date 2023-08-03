export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		JSONForm1.setData({
			"id":"",
			"name":""
		})
	},
	myfunc2: ()=>{
		let var1 = Api1.data.products.map((s)=>{
			return{
				"brand" : s.brand,
				"name" : s.title
			}
		})
		console.log(var1[0])
		JSONForm1.setFormData(var1[0])	
	},
	myfunc3:()=>{
		this.myVar1=	Api1.data.products.map((s)=>{
			return{
				label: s.title,
				value:s.title
			}
		})
		return this.myVar1
	}
}