function Game(ele){
    this._gameEle = ele;
    this.init();
}

Game.prototype.init = function(){
    this._gameEle.css('height', this._gameEle.css('width'));
    this.data = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    this.score = 0;
    this.randomOneNum();
    this.randomOneNum();
    this.update();
};

Game.prototype.randomOneNum = function(){
    var x, y, times = 0;
    while(times < 30){
        x = Math.floor(Math.random() * 4);
        y = Math.floor(Math.random() * 4);
        if(this.data[x][y] == 0){
            break;
        }
        times++;
    }
    if(times == 30){
        for(x = 0; i < 4; i++){
            for(y = 0; j < 4; j++){
                if(this.data[x][y] == 0){
                    this.data[x][y] = Math.random() > 0.5 ? 2 : 4;
                    return true;
                }
            }
        }
    }else {
        this.data[x][y] = Math.random() > 0.5 ? 2 : 4;
        return true;
    }
    return false;
};

Game.prototype.update = function(){
    $('.title').remove();
    var html = '';
    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 4; j++){
            if(this.data[i][j] != 0){
                html += '<div class="title color'+this.data[i][j]+'" style="'+this.getPos(i, j)+'">'+this.data[i][j]+'</div>';
            }
        }
    }
    this._gameEle.append(html);
};

Game.prototype.getPos = function(i, j){
    return 'left: ' + (4 + 24 * i) + '%;top: ' + (4 + 24 * j) + '%;';
}