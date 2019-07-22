//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    //our box element
    var ships = document.getElementsByClassName('ship');
    var t = setInterval(delay, 500);

	var height = 50;
	var pos = [0, 0, 0, 0];
	var end = [500, 350, 200, 150];

	for(var n = 0; n < ships.length; n++)
	{
		ships[n].style.top = (n * height)+"px";
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
			ships[n].style.left = pos[n]+'px';
	        if(pos[n] >= end[n]) {
				endedall4 += 1;
	        }
			var deltapos = Math.pow((pos[n]/end[n])-0.5,2);
			if(deltapos < 1/17) deltapos = 1/17;
			pos[n] += end[n]/(deltapos*700);
		}
		if(endedall4 == 4) clearInterval(t);
    }
};
