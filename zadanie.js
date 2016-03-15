console.clear();

/**
* Finds the number for which the chain is the longest (from the specified maximum range value).
* @param {Number} elementsAmount - the upper limit of the range from which the number is looked for.
* @return {Number} The number producing the longest element chain (in the specified range)
*/
function colatzMaxChainNumber(elementsAmount){
	function collatz(n){
		return n % 2 == 0 ? n/2 :3 * n +1;
	}
	
	var startingNumber = 0;
	var maxChainElements = 0;
	
	for(var i = 1; i < elementsAmount; i++) {
		var tempNumber = i;
		var tempChainLength = 0;
	  
		while(tempNumber!=1) {
			tempChainLength++;
			tempNumber = collatz(tempNumber);
		}
			
		startingNumber = (tempChainLength > maxChainElements ? 	
							i : 
							startingNumber );
							
		maxChainElements = (tempChainLength > maxChainElements ? 	
								tempChainLength : 
								maxChainElements );
  
	}
	
	return startingNumber;
}

// Test
console.log("\nLongest chain number:" + colatzMaxChainNumber(1000000));