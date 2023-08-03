export default {
	myVar1: [],
	myVar2: {},
//datepicker doesnt exist nuberslider checkboxgroup
	myFun1 () {	
    DatePicker1.setRequired(true)
		CurrencyInput1.setRequired(true)
	  Select3.setRequired(true)
		Input1.setRequired(true)
		MultiSelect1.setRequired(true)
		Select1.setRequired(true)
		MultiTreeSelect1.setRequired(true)
		Checkbox1.setRequired(true)
		RangeSlider1.setRequired(true)
		SwitchGroup1.setRequired(true)
		RichTextEditor1.setRequired(true)
		Switch1.setRequired(true)
		
	},
	async myFun2 () {
	return Api2.run(()=>{ 
		SwitchGroup1.setRequired(true).then((SwitchGroup1.isRequired?showAlert("required"):showAlert("not")))})
	},
	myFun3 :()=>{
		try{

			Api2.run().then(()=>{Select1.setRequired(true);
													 Select1.isRequired? showAlert("ok"):showAlert("not ok")
													})
     }catch(e){
			 console.log(e.message)
     }
	} 
}