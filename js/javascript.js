function Monster(name, life){
	this.name = name;
	this.startLife = life;
	this.life = this.startLife;
}

Monster.prototype.speakName = function(){
	console.log(this.name);
}

Monster.prototype.toAttack = function(count){
	this.life -= count;
}


function catMonster(name, life){
	Monster.call(this, name, life);
}

catMonster.prototype = Object.create(Monster.prototype);

catMonster.prototype.scratch = function(obj){
	this.toAttack.call(obj, 5);
	console.log(this.name + ' attack ' + obj.name + ' currentlife ' + obj.life);
}


function birdMonster(name, life){
	Monster.call(this, name, life);
}

birdMonster.prototype = Object.create(Monster.prototype);

birdMonster.prototype.peck = function(obj){
	this.toAttack.call(obj, 3);
	console.log(this.name + ' attack ' + obj.name + ' currentlife ' + obj.life);
}


var cat1 = new catMonster("cat1", 50),
	cat2 = new catMonster("cat2", 50),
	bird1 = new birdMonster("bird1", 60),
	bird2 = new birdMonster("bird2", 60);

cat1.scratch(cat2);
bird2.peck(cat2);
bird2.peck(cat1);
cat2.scratch(bird1);