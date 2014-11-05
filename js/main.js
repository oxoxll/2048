var game = new Game($('#game'));
$('#newgame').click(function(){
    game.init();
});

$.fn.move = function(oldI, oldJ, newI, newJ, direction){
	
	var width = parseInt($(this).css('width'));
	if('left' == direction || 'right' == direction){
		console.log(oldI, oldJ, newI, newJ, direction);
		var left = parseInt($(this).css('left'));
		console.log(left);
		$(this).css('left', (left + (newJ-oldJ) * 24 ) + '%');
	}else{
		var top = parseInt($(this).css('top'));
		$(this).css('top', (top + (newI-oldI) * 24) + '%');
	}
    return this;
};