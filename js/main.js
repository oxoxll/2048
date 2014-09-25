var game = new Game($('#game'));
$('#newgame').click(function(){
    game.init();
});

$.fn.extend({
	move: function(oldI, oldJ, newI, newJ, direction){
		return this.each(function() {
			var width = parseInt($(this).css('width'));
			if('left' == direction || 'right' == direction){
				var left = parseInt($(this).css('left'));
				$(this).css('left', (left + (newJ-oldJ) * width * 24 / 20) + 'px');
			}else{
				var top = parseInt($(this).css('top'));
				$(this).css('top', (top + (newI-oldI) * width * 24 / 20) + 'px');
			}
	    });
	}
});