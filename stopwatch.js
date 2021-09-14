//Stopwatch console application using JavaScript Objects

function Stopwatch(){
	console.log("Welcome to Stopwatch!\nCommands: sw.start(), sw.duration(), sw.stop(), sw.reset()");

	let running = false;
	let beg = 0;

	//Get duration since start
	this.duration = function(){
		if (running){
		return (Date.now() - beg)/1000; //duration in seconds
		}
		else return 0;
	}

	//Start the timer at zero
	this.start = function(){
		if (!running){
			running = true;
			beg = Date.now();
			console.log("Counting...");
		}
		else{
			console.error('Stopwatch has already started.');
		}
	}

	//Stop timer and return duration
	this.stop = function(){
		if (running){
			let drn = this.duration(); 
			console.log("Stopped. " + drn + " sec"); 
			running = false;
		}
		else{
			console.error('Stopwatch is not started.')
		}
	}

	//Reset to zero and continue timer
	this.reset = function(){
		if (running){
			beg = Date.now();
			console.log("Resetting to zero. Counting...");
		}
		else{
			console.error('Stopwatch is not started.')			
		}
	}
}

//Run Stopwatch: 
const sw = new Stopwatch();
