//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
	//our box element
	var ships = document.getElementsByClassName('ship');
	var t = setInterval(delay, 500);

	var height = 0;
	var pos = [0, 0, 0, 0];
	var end = [500, 350, 200, 150];

	for(var n = 0; n < ships.length; n++)
	{
		ships[n].style.top = (n * height)+"px";
		ships[n].innerHTML="<img src='trail.png' /><img src='ship.png' />";
		ships[n].children[1].style.height = '100%';
		ships[n].children[1].style.width = 'auto';
		ships[n].children[0].style.top = '15px';
		ships[n].children[0].style.height = '50%';
		ships[n].children[0].style.width = '15px';
	}

	function delay()
	{
		clearInterval(t);
		t = setInterval(move, 10);
	}

	function move() {
		var endedall4 = 0;
		for(var n = 0; n < ships.length; n++)
		{
			if(pos[n] >= end[n])
			{
				pos[n] = end[n];
				endedall4 += 1;
			}
			ships[n].children[1].style.left = pos[n]+'px';
			ships[n].children[0].style.width = (pos[n] + 15)+'px';
			var deltapos = Math.pow((pos[n]/end[n])-0.5,2);
			if(deltapos < 1/17) deltapos = 1/17;
			pos[n] += end[n]/(deltapos*1000);
		}
		if(endedall4 == 4) clearInterval(t);
	}
};

