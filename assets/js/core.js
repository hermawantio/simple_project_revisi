//Parameters for horizontal line\\
var h1Params = ['A','B','C','D','E']; 
var h2Params = ['F','G','H','I','J']; 
var h3Params = ['K','L','M','N','O']; 
var h4Params = ['P','Q','R','S','T']; 
var h5Params = ['U','V','W','X','Y']; 

//Parameters fo vertical line\\
var v1Params = ['A','F','K','P','U']; 
var v2Params = ['B','G','L','Q','V']; 
var v3Params = ['C','H','M','R','W']; 
var v4Params = ['D','I','N','S','X']; 
var v5Params = ['E','J','O','T','Y']; 

//Parameter for diagonal line\\
var d1Params = ['A','G','M','S','Y']; 
var d2Params = ['E','I','M','Q','U']; 

//temp params
var h1 = [];
$(document).ready(function() {

   var content = '';
    var arr = [];
    var parameter = 65;

    while(arr.length < 25) {
        var randomnumber = Math.ceil(Math.random()*25);
        if(arr.indexOf(randomnumber) > -1) continue;
        arr[arr.length] = randomnumber;
        content += '<button type="button" class="btn green-haze" id="'+String.fromCharCode(parameter)+'" value="'+String.fromCharCode(parameter)+'" onclick="disableBtn(this)"><span class="text-bold">'+ randomnumber +'</span></button>';
        parameter++;
        if(arr.length % 5 === 0) content += '<br>';
    }


    $(".container").html(content);

});
 function disableBtn(a){
 	$("#"+a.id).attr('disabled', true);
 	$("#"+a.id).css('background-color','red');
 	$("#"+a.id).css('cursor','not-allowed');
 	check(a.id);

 }

 function check(a){
 	var semuaArr = [];
	semuaArr.push(h1Params);
	semuaArr.push(h2Params);
	semuaArr.push(h3Params);
	semuaArr.push(h4Params);
	semuaArr.push(h5Params);

	semuaArr.push(v1Params);
	semuaArr.push(v2Params);
	semuaArr.push(v3Params);
	semuaArr.push(v4Params);
	semuaArr.push(v5Params);

	semuaArr.push(d1Params);
	semuaArr.push(d2Params);

 	h1.push(a);

 	var arrParams = [];
 	var m = [];
 	try{
 		for(var r = 0;r <= semuaArr.length; r++){
	 		// console.log(semuaArr[r].length);
	 		if(containsAll(semuaArr[r], h1) == true){
	 			setTimeout(function() {
		        swal({
		            title: "BINGO !!!",
		            text: "Lorem Ipsum is simply dummy text",
		            imageUrl: "assets/image/nabila-jkt48.jpg",
		            imageSize: "200x200",
		            type: "success"
		        }, function() {
		            location.reload();
		        });
		    }, 100);
	 		}
	 	}	
 	}catch(err){
 		// console.log(err);
 	}
}

Array.prototype.compare = function(testArr) {
	
	    if (this.length != testArr.length) return false;
		    for (var i = 0; i < testArr.length; i++) {
	    	    if (this[i].compare) { //To test values in nested arrays
	        	    if (!this[i].compare(testArr[i])) return false;
	        	}
	        	else if (this[i] !== testArr[i]) return false;
	    	}
	    return true;
}

function reload(){
	location.reload();
}

function containsAll(needles, haystack){ 
  	for(var i = 0 , len = needles.length; i < len; i++){
    	 if($.inArray(needles[i], haystack) == -1) return false;
  	}
  	return true;
}

/////////////***--------------------------***\\\\\\\\\\\\\
// 		if(containsAll(h1Params, h1) == true){			\\
//			alert('bingo');								\\
//		}												\\
//		if(containsAll(h2Params, h1) == true){			\\
//			alert('bingo');								\\
//		}												\\
//		if(containsAll(h3Params, h1) == true){			\\
//			alert('bingo');								\\
//		}												\\
//		if(containsAll(h4Params, h1) == true){			\\
//			alert('bingo');								\\
//		}												\\
//		if(containsAll(h5Params, h1) == true){			\\
//			alert('bingo');								\\
//		}												\\
//		if(containsAll(v1Params, h1) == true){			\\
//			alert('bingo');								\\
// 		}												\\
//		if(containsAll(v2Params, h1) == true){			\\
//			alert('bingo');								\\
//		}												\\
//		if(containsAll(v3Params, h1) == true){			\\
//			alert('bingo');								\\
//		}												\\
//		if(containsAll(v4Params, h1) == true){			\\
//			alert('bingo');								\\
//		}												\\
//		if(containsAll(v5Params, h1) == true){			\\
//			alert('bingo');								\\
//		}												\\
//		if(containsAll(d1Params, h1) == true){			\\
//			alert('bingo');								\\
//		}		if(containsAll(d2Params, h1) == true){	\\
// 			alert('bingo');								\\
//		}												\\
/////////////***--------------------------***\\\\\\\\\\\\\


/////////////***Yang Kemaren salah agoritma***\\\\\\\\\\\\\\\\\\\\
// 	 h1.slice(0,5);												\\
// 	 if(h1.slice(0, 5).length == 5){							\\
// 	 	for(var r = 0;r <= semuaArr.length; r++){				\\
// 	 		if(h1.slice(0, 5).sort().compare(semuaArr[r])) {	\\
//			setTimeout(function() {								\\
//		        swal({											\\
//		            title: "BINGO !!!",							\\
//		            text: "Lorem Ipsum is simply dummy text",	\\
//		            imageUrl: "assets/image/nabila-jkt48.jpg",	\\
//		            imageSize: "200x200",						\\
//		            type: "success"								\\
//		        }, function() {									\\
//		            location.reload();							\\
//		        });												\\
//		    }, 100);											\\
//		}														\\
//		}														\\
// 	}															\\
////////////***Yang Kemaren salah agoritma***\\\\\\\\\\\\\\\\\\\\\