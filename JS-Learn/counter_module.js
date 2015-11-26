// IIFE / SELF Executable function

var counter = (function() {

	// private
	var count = 0;

	// public
	return {
		doCount : function() {
			count += 1;
		},
		getCount : function() {
			return count;
		}
	};

})();

// ----------------------------

counter.doCount();
counter.doCount();
counter.doCount();
counter.doCount();
counter.doCount();

console.log(counter.getCount());