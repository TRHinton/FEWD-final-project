$(document).ready(function() {

	$('#read-more-one').click(showMoreOne);
	$('#read-less-one').click(showLessOne);
	$('#read-more-two').click(showMoreTwo);
	$('#read-less-two').click(showLessTwo);
	$('#read-more-three').click(showMoreThree);
	$('#read-less-three').click(showLessThree);
	

	function showMoreOne() {
		$('#readMoreTextOne').slideDown();
		$('#read-more-one').hide();
		$('#read-less-one').show();
 	}

	function showLessOne() {
		$('#readMoreTextOne').slideUp();
		$('#read-less-one').hide();
		$('#read-more-one').show();

	}
	
	function showMoreTwo() {
		$('#readMoreTextTwo').slideDown();
		$('#read-more-two').hide();
		$('#read-less-two').show();
 	}

	function showLessTwo() {
		$('#readMoreTextTwo').slideUp();
		$('#read-less-two').hide();
		$('#read-more-two').show();

	}

	function showMoreThree() {
		$('#readMoreTextThree').slideDown();
		$('#read-more-three').hide();
		$('#read-less-three').show();
 	}

	function showLessThree() {
		$('#readMoreTextThree').slideUp();
		$('#read-less-three').hide();
		$('#read-more-three').show();

	}
	

});