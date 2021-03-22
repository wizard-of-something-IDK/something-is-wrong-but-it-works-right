var stringers=[3, "Jerry", "Sandy", 4, "Pepper", 15, "Jocastah", 12];

var arrayValues = [];

function compareValues (data){
	var that = this;
	
	// this.dataEle = document.createElement("div");
	
		if (stringers[i] == 15){
			// exact();
			this.message = " and it is equal to 15.";
		} else if (stringers[i] < 10){
			// lessThan10();
			this.message = " and its value is less than 10.";
		} else if (stringers[i].length > 5){
			// longerThan5();
			this.message = " and it has more than 5 characters in it.";
		} else {
			// basicMSG();
			this.message = " and it is normal."
		}
	
	this.color = "The value is " + data + this.message;
	this.ele = document.createElement("div");
  this.eleColor = document.createElement("div");
  this.eleColor.innerHTML = this.color;
  this.eleValue = document.createElement("div");
  this.ele.addEventListener("click", function () {
  	that.colorChange();
  });
  this.ele.appendChild(this.eleColor);
  this.ele.appendChild(this.eleValue);
  document.body.appendChild(this.ele);
}

compareValues.prototype.colorChange = function () {
  this.eleColor.style.color = "blue";
};

for (var i = 0; i < stringers.length; i++) {
  arrayValues.push(new compareValues(stringers[i]));
}
	
// 	function exact(){
// 			this.ele = document.createElement("div");
// 			this.dataEle.innerHTML = "The value is " + stringers[i] + " and it is equal to 15.";
// 			this.ele.appendChild(this.dataEle);
// }

// function lessThan10(){
// 			this.ele = document.createElement("div");
// 			this.dataEle.innerHTML = "The value is " + stringers[i] + " and it is less than 10.";
// 			this.ele.appendChild(this.dataEle);
// }

// function longerThan5(){
// 			this.ele = document.createElement("div");
// 			this.dataEle.innerHTML = "The value is " + stringers[i] + " and it has more than 5 characters in it.";
// 			this.ele.appendChild(this.dataEle);
// }
	
// function basicMSG(){
// 			this.ele = document.createElement("div");
// 			this.dataEle.innerHTML = "The value is " + stringers[i] + " and it is normal.";
// 			this.ele.appendChild(this.dataEle);
// }
	
compareValues(stringers[i]);