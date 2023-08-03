export default {
	myVar1: [true,false,true],
	myVar2: {},
	myFun1 () {
		appsmith.user.email.includes("anandi")?
			Button1.setDisabled(true):Button1.setDisabled(false)
	},
	async myFun2 () {
		setInterval(()=>{Button1.isVisible? Button1.setDisabled(false):Button1.setDisabled(true)},4000)
	},
	myFun3 () {
		storeValue('val1',Api1.data.users[0].name).then(()=>{console.log(appsmith.store.val1)(!appsmith.store.val1)?Button1.setVisibility(false):Button1.setVisibility(true)})
	},

	myFun4 () {
		for (let i =0; i<this.myVar1.length;i++){
			console.log(this.myVar1[i])
			Button1.setVisibility(this.myVar1[i])
		}	
	},

	async myFun5 (value1) {
		console.log(value1)
		Button3.setDisabled(value1)	
	}	,

	async myFun6 () {
		return new Promise((resolve,reject)=>{
			resolve(Button3.setDisabled(true))
		})	
	}		,

	func7(){
		setInterval(()=>{ Api1.run().then(()=>{
			Button4.setDisabled(true).then(()=>showAlert("success")).catch(()=>showAlert("fail"))
		})},5000)
	},

	func8(){
		let var1 = Button1.setDisabled(true)
		console.log(var1)
		if (var1=='true'){
			showAlert("its true")
		}
	},
// checkboxgroup currencyinput list
	func9(){
		Input1.setVisibility(false).then(()=>{
			DatePicker1.setVisibility(false)
			CurrencyInput1.setVisibility(false)
			List1.setVisibility(false)
			RangeSlider1.setVisibility(false)
			Select1.setVisibility(false);
			Video1.setVisibility(false);
			CodeScanner1.setVisibility(false)
			Statbox1.setVisibility(false)
			MenuButton1.setVisibility(false)
			PhoneInput1.setVisibility(false)
			RangeSlider1.setVisibility(false)
			Image1.setVisibility(false)
			Tabs1.setVisibility(false)
			Map1.setVisibility(false)
			MapChart1.setVisibility(false)
			Checkbox1.setVisibility(false)
			RadioGroup1.setVisibility(false)
			MultiTreeSelect1.setVisibility(false)
			Switch1.setVisibility(false);
			ButtonGroup1.setVisibility(false);
			AudioRecorder1.setVisibility(false);
			IconButton1.setVisibility(false);
			Progress1.setVisibility(false)
			Camera1.setVisibility(false);
			FilePicker1.setVisibility(false);
			RichTextEditor1.setVisibility(false);
			Rating1.setVisibility(false);	
			MultiTreeSelect1.setVisibility(false);
			RadioGroup1.setVisibility(false);
			JSONForm1.setVisibility(false)})
	},
	
	func10(){
		Input1.setDisabled(true).then(()=>{
			CurrencyInput1.setDisabled(true);
			Checkbox1.setDisabled(true);
			Select1.setDisabled(true);
			CodeScanner1.setDisable(true)
			MenuButton1.setDisabled(true)
			PhoneInput1.setDisabled(true)
			RangeSlider1.setDisable(true)
			Checkbox1.setDisabled(true)
			RadioGroup1.setDisabled(true)
			MultiTreeSelect1.setDisabled(true)
			Switch1.setDisabled(true);
			ButtonGroup1.setDisabled(true);
			AudioRecorder1.setDisabled(true);
			IconButton1.setDisabled(true);
			Camera1.setDisabled(true);
			FilePicker1.setDisabled(true);
			RichTextEditor1.setDisabled(true);
			Rating1.setDisabled(true);
		  MultiSelect1.setDisabled(true)
			RadioGroup1.setDisabled(true);})
	},
	
	func11: ()=>{
		FilePicker1.setDisabled(   this.myVar1[0]  ).then(s=>FilePicker1.isDisabled?showAlert("disabled"):console.log("not"))
	}
}