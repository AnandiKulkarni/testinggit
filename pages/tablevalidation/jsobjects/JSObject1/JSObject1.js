export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		Table1.setSelectedRowIndex('aa').then(s=>showAlert('success'))

	},
	async myFun2 () {
		//storeValue()
		Api1.run(()=>{Table1.setSelectedRowIndex(1)},()=>{Table1.setSelectedRowIndex(2)})
	},
	func3(){
		try{
			Api1.run().then(s=>Table1.setSelectedRowIndex(1))
		}catch(error){
			Table1.setSelectedRowIndex(2)
		}
	},

	fun4(){
		setTimeout(()=>{
			Table1.setData(()=>{
				return Api2.data.map((s)=>{
					return{
						id:s.id,
						country:s.country	
					}
				})
			})},3000)
	},

	fun5(){
		this.myVar1=  Api2.data.map((s)=>{
			return{
				id:s.id,
				country:s.country
			}
		})
	},
	func6(){
		setTimeout(()=>{  
			console.log("hi")
			this.myVar1 = Api2.data.map((s)=>{
				return{
					id: s.id,
					name: s.name
				}
			})
			Table3.setData(this.myVar1)
		},3000)
	},

	func7(){
		//let var1 = Api2.data
		Table4.setData(()=>{return Api1.data})
	},

	func8(){
		Table1.setData([{id:1,name:"anandi"},{
			id:2,
			name:"twist"
		}])
	},	

func9(){
 Api3.run().then((s)=>{
	 this.myVar1=  s.products.map((a)=>{
			return{
				id: a.id,
				brand: a.brand
			}
		})
	 console.log(this.myVar1)
	 Table1.setData(this.myVar1).then(Table1.setSelectedRowIndex(2))
		})
	},	

}