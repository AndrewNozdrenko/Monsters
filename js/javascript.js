function Monster(name, life){
	this.name = name;
	this.startLife = life;
	this.life = this.startLife;

	function catMonster(obj){
		this.takenMonster.call(obj, 5);
	}

	function birdMonster(obj){
		this.takenMonster.call(obj, 3);
	}

	this.getAttack = function(){
		if(name.indexOf("cat") != -1){
			this.takenGetMonster = catMonster;
			this.startLife = 50;
			this.life = this.startLife;
		}
		if(name.indexOf("bird") != -1){
			this.takenGetMonster = birdMonster;
			this.startLife = 60;
			this.life = this.startLife;
		}
	}

	this.getAttack();
}

Monster.prototype.speacName = function(){
	console.log(this.name);
}
Monster.prototype.takenMonster = function(countTaken){
	this.life = this.life - countTaken;
}

var catMon = new Monster("catMon", 70),
	catMon1 = new Monster("catMon1", 70),
	catMon2 = new Monster("catMon2", 70),
	catMon3 = new Monster("catMon3", 70),
	catMon4 = new Monster("catMon4", 70),

	birdMon = new Monster("birdMon", 70),
	birdMon1 = new Monster("birdMon1", 70),
	birdMon2 = new Monster("birdMon2", 70),
	birdMon3 = new Monster("birdMon3", 70);


catMon.speacName();
catMon1.speacName();

catMon.takenGetMonster(catMon1);

console.log(catMon.life);
console.log(catMon1.life);

birdMon.takenGetMonster(catMon);
console.log(catMon.life);

for(var i = 0; i < 7; i++){
	catMon.takenGetMonster(birdMon2);
}
console.log(birdMon2.life);
console.log(birdMon3.life);