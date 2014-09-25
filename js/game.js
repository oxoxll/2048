function Game(ele){
    this._gameEle = ele;
    this.attachEvent();
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
Game.prototype.attachEvent = function(){
    var self = this;
    $(document).keydown(function(e){
        switch(e.keyCode){
            case 37:
                if(self.canMoveLeft()){
                    self.moveLeft();
                    setTimeout(function(){
                        self.randomOneNum();
                        self.update();
                    }, 400);
                }
                break;
            case 38:
                if(self.canMoveUp()){
                    self.moveUp();
                    setTimeout(function(){
                        self.randomOneNum();
                        self.update();
                    }, 400);
                }
                break;
            case 39:
                if(self.canMoveRight()){
                    self.moveRight();
                    setTimeout(function(){
                        self.randomOneNum();
                        self.update();
                    }, 400);
                }
                break;
            case 40:
                if(self.canMoveDown()){
                    self.moveDown();
                    setTimeout(function(){
                        self.randomOneNum();
                        self.update();
                    }, 400);
                }
                break;
            default:
        }
    });
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
                html += '<div id="title-'+i+'-'+j+'" class="title color'+this.data[i][j]+' size'+(this.data[i][j] + '').length+'" style="'+this.getPos(i, j)+'line-height:'+this._gameEle.height()/5+'px;">'+this.data[i][j]+'</div>';
            }
        }
    }
    this._gameEle.append(html);
    if(!this.canMoveLeft() && !this.canMoveRight() && !this.canMoveDown() && !this.canMoveUp()){
        alert('game over'); 
        this.init();
    }
};

Game.prototype.getPos = function(i, j){
    return 'left: ' + (4 + 24 * j) + '%;top: ' + (4 + 24 * i) + '%;';
};

Game.prototype.canMoveLeft = function(){
    for(var i = 0; i < 4; i++){
        for(var j = 1; j < 4; j++){
            if(this.data[i][j-1] == 0 || this.data[i][j] == this.data[i][j-1]){
                return true;
            }
        }
    }
    return false;
};
Game.prototype.canMoveRight = function(){
    for(var i = 0; i < 4; i++){
        for(var j = 2; j >= 0; j--){
            if(this.data[i][j+1] == 0 || this.data[i][j] == this.data[i][j+1]){
                return true;
            }
        }
    }
    return false;
};
Game.prototype.canMoveUp = function(){
    for(var i = 1; i < 4; i++){
        for(var j = 0; j < 4; j++){
            if(this.data[i-1][j] == 0 || this.data[i][j] == this.data[i-1][j]){
                return true;
            }
        }
    }
    return false;
};
Game.prototype.canMoveDown = function(){
    for(var i = 2; i >= 0; i--){
        for(var j = 0; j < 4; j++){
            if(this.data[i+1][j] == 0 || this.data[i][j] == this.data[i+1][j]){
                return true;
            }
        }
    }
    return false;
};
Game.prototype.moveLeft = function(){
    for(var i = 0; i < 4; i++){
        for(var j = 1; j < 4; j++){
            for(var k = j-1; k>=0; k--){
                if(this.data[i][k] != 0){
                    if(this.data[i][k] == this.data[i][j]){
                        this.data[i][k] = this.data[i][j] *2;
                        this.data[i][j] = 0;    
                        $('#title-'+i+'-'+j).move(i,j,i,k,'left');
                    }else if(j-k>1){
                        this.data[i][k+1] = this.data[i][j];
                        this.data[i][j] = 0;    
                        $('#title-'+i+'-'+j).move(i,j,i,k+1,'left');
                    }
                    break;
                }else if(this.data[i][k] == 0 && k == 0){
                    this.data[i][k] = this.data[i][j];
                    this.data[i][j] = 0;    
                    $('#title-'+i+'-'+j).move(i,j,i,k,'left');
                    break;
                }
            }
        }
    }

};
Game.prototype.moveRight = function(){
    for(var i = 0; i < 4; i++){
        for(var j = 2; j >= 0; j--){
            for(var k = j+1; k<4; k++){
                if(this.data[i][k] != 0){
                    if(this.data[i][k] == this.data[i][j]){
                        this.data[i][k] = this.data[i][j] *2;
                        this.data[i][j] = 0;    
                        $('#title-'+i+'-'+j).move(i,j,i,k,'right');
                    }else if(k-j>1){
                        this.data[i][k-1] = this.data[i][j];
                        this.data[i][j] = 0;    
                        $('#title-'+i+'-'+j).move(i,j,i,k-1,'right');
                    }
                    break;
                }else if(this.data[i][k] == 0 && k == 3){
                    this.data[i][k] = this.data[i][j];
                    this.data[i][j] = 0;    
                    $('#title-'+i+'-'+j).move(i,j,i,k,'right');
                    break;
                }
            }

        }
    }
    return false;
};
Game.prototype.moveUp = function(){
    for(var i = 1; i < 4; i++){
        for(var j = 0; j < 4; j++){
            for(var k = i-1; k>=0; k--){
                if(this.data[k][j] != 0){
                    if(this.data[k][j] == this.data[i][j]){
                        this.data[k][j] = this.data[i][j] *2;
                        this.data[i][j] = 0;    
                        $('#title-'+i+'-'+j).move(i,j,k,j,'up');
                    }else if(i-k>1){
                        this.data[k+1][j] = this.data[i][j];
                        this.data[i][j] = 0;    
                        $('#title-'+i+'-'+j).move(i,j,k+1,j,'up');
                    }
                    break;
                }else if(this.data[k][j] == 0 && k == 0){
                    this.data[k][j] = this.data[i][j];
                    this.data[i][j] = 0;    
                    $('#title-'+i+'-'+j).move(i,j,k,j,'up');
                    break;
                }
            }
        }
    }
    return false;
};
Game.prototype.moveDown = function(){
    for(var i = 2; i >= 0; i--){
        for(var j = 0; j < 4; j++){

            for(var k = i+1; k<4; k++){
                if(this.data[k][j] != 0){
                    if(this.data[k][j] == this.data[i][j]){
                        this.data[k][j] = this.data[i][j] *2;
                        this.data[i][j] = 0;    
                        $('#title-'+i+'-'+j).move(i,j,k,j,'down');
                    }else if(k-i>1){
                        this.data[k-1][j] = this.data[i][j];
                        this.data[i][j] = 0;    
                        $('#title-'+i+'-'+j).move(i,j,k-1,j,'down');
                    }
                    break;
                }else if(this.data[k][j] == 0 && k == 3){
                    this.data[k][j] = this.data[i][j];
                    this.data[i][j] = 0;    
                    $('#title-'+i+'-'+j).move(i,j,k,j,'down');
                    break;
                }
            }
        }
    }
    return false;
};

