


const scriptsInEvents = {

	async Esudokumain_Event2_Act4(runtime, localVars)
	{
		// we start with an empty sudoku...
		var sudoku = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
		
		    var DIFFICULTY = {
		        "easy":         43,
		        "medium":       51,
		        "hard":         56,
		        "VeryHard":     58,
		        "extreme":      62,
		        "master":       64,
		    };
		// ... and we solve it!!
		
		let sol;
		solve(sudoku);
		// given a sudoku cell, returns the row
		function returnRow(cell) {
			return Math.floor(cell / 9);
		}
		
		// given a sudoku cell, returns the column
		function returnCol(cell) {
			return cell % 9;
		}
		
		// given a sudoku cell, returns the 3x3 block
		function returnBlock(cell) {
			return Math.floor(returnRow(cell) / 3) * 3 + Math.floor(returnCol(cell) / 3);
		}
		
		// given a number, a row and a sudoku, returns true if the number can be placed in the row
		function isPossibleRow(number,row,sudoku) {
			for (var i=0; i<=8; i++) {
				if (sudoku[row*9+i] == number) {
					return false;
				}
			}
			return true;
		}
		
		// given a number, a column and a sudoku, returns true if the number can be placed in the column
		function isPossibleCol(number,col,sudoku) {
			for (var i=0; i<=8; i++) {
				if (sudoku[col+9*i] == number) {
					return false;
				}
			}
			return true;
		}
		
		// given a number, a 3x3 block and a sudoku, returns true if the number can be placed in the block
		function isPossibleBlock(number,block,sudoku) {
			for (var i=0; i<=8; i++) {
				if (sudoku[Math.floor(block/3)*27+i%3+9*Math.floor(i/3)+3*(block%3)] == number) {
					return false;
				}
			}
			return true;
		}
		
		// given a cell, a number and a sudoku, returns true if the number can be placed in the cell
		function isPossibleNumber(cell,number,sudoku) {
			var row = returnRow(cell);
			var col = returnCol(cell);
			var block = returnBlock(cell);
			return isPossibleRow(number,row,sudoku) && isPossibleCol(number,col,sudoku) && isPossibleBlock(number,block,sudoku);
		}
		
		// given a row and a sudoku, returns true if it's a legal row
		function isCorrectRow(row,sudoku) {
			var rightSequence = new Array(1,2,3,4,5,6,7,8,9);
			var rowTemp= new Array();
			for (var i=0; i<=8; i++) {
				rowTemp[i] = sudoku[row*9+i];
			}
			rowTemp.sort();
			return rowTemp.join() == rightSequence.join();
		}
		
		// given a column and a sudoku, returns true if it's a legal column
		function isCorrectCol(col,sudoku) {
			var rightSequence = new Array(1,2,3,4,5,6,7,8,9);
			var colTemp= new Array();
			for (var i=0; i<=8; i++) {
				colTemp[i] = sudoku[col+i*9];
			}
			colTemp.sort();
			return colTemp.join() == rightSequence.join();
		}
		
		// given a 3x3 block and a sudoku, returns true if it's a legal block 
		function isCorrectBlock(block,sudoku) {
			var rightSequence = new Array(1,2,3,4,5,6,7,8,9);
			var blockTemp= new Array();
			for (var i=0; i<=8; i++) {
				blockTemp[i] = sudoku[Math.floor(block/3)*27+i%3+9*Math.floor(i/3)+3*(block%3)];
			}
			blockTemp.sort();
			return blockTemp.join() == rightSequence.join();
		}
		
		// given a sudoku, returns true if the sudoku is solved
		function isSolvedSudoku(sudoku) {
			for (var i=0; i<=8; i++) {
				if (!isCorrectBlock(i,sudoku) || !isCorrectRow(i,sudoku) || !isCorrectCol(i,sudoku)) {
					return false;
				}
			}
			return true;
		}
		
		// given a cell and a sudoku, returns an array with all possible values we can write in the cell
		function determinePossibleValues(cell,sudoku) {
			var possible = new Array();
			for (var i=1; i<=9; i++) {
				if (isPossibleNumber(cell,i,sudoku)) {
					possible.unshift(i);
				}
			}
			return possible;
		}
		
		// given an array of possible values assignable to a cell, returns a random value picked from the array
		function determineRandomPossibleValue(possible,cell) {
			var randomPicked = Math.floor(Math.random() * possible[cell].length);
			return possible[cell][randomPicked];
		}
		
		// given a sudoku, returns a two dimension array with all possible values 
		function scanSudokuForUnique(sudoku) {
			var possible = new Array();
			for (var i=0; i<=80; i++) {
				if (sudoku[i] == 0) {
					possible[i] = new Array();
					possible[i] = determinePossibleValues(i,sudoku);
					if (possible[i].length==0) {
						return false;
					}
				}
			}
			return possible;
		}
		
		// given an array and a number, removes the number from the array
		function removeAttempt(attemptArray,number) {
			var newArray = new Array();
			for (var i=0; i<attemptArray.length; i++) {
				if (attemptArray[i] != number) {
					newArray.unshift(attemptArray[i]);
				}
			}
			return newArray;
		}
		
		// given a two dimension array of possible values, returns the index of a cell where there are the less possible numbers to choose from
		function nextRandom(possible) {
			var max = 9;
			var minChoices = 0;
			for (var i=0; i<=80; i++) {
				if (possible[i]!=undefined) {
					if ((possible[i].length<=max) && (possible[i].length>0)) {
						max = possible[i].length;
						minChoices = i;
					}
				}
			}
			return minChoices;
		}
		
		// given a sudoku, solves it
		function solve(sudoku) {
			var saved = new Array();
			var savedSudoku = new Array();
			var i=0;
			var nextMove;
			var whatToTry;
			var attempt;
			while (!isSolvedSudoku(sudoku)) {
				i++;
				nextMove = scanSudokuForUnique(sudoku);
				if (nextMove == false) {
					nextMove = saved.pop();
					sudoku = savedSudoku.pop();
				}
				whatToTry = nextRandom(nextMove);
				attempt = determineRandomPossibleValue(nextMove,whatToTry);
				if (nextMove[whatToTry].length>1) {
					nextMove[whatToTry] = removeAttempt(nextMove[whatToTry],attempt);
					saved.push(nextMove.slice());
					savedSudoku.push(sudoku.slice());
				}
				sudoku[whatToTry] = attempt;
			}
			sol = sudoku;
		}
		
		
		// given a solved sudoku and the number of steps, prints out the sudoku
		function showSudoku(sudoku) {
			var sudokuText = "";
			for (var i=0; i<=8; i++) {
				for (var j=0; j<=8; j++) {
					sudokuText+=" ";
					sudokuText+=sudoku[i*9+j];
					sudokuText+=" ";
				}
		
			}
			return sudokuText;
		}
		
		function getRandom(length) { return Math.floor(Math.random()*(length)); }
		
		function getRandomSample() {
			var arr = [];
			while(arr.length < DIFFICULTY[runtime.globalVars["mode"]]){
				var r = Math.floor(Math.random() * 81) + 1;
				if(arr.indexOf(r) === -1) arr.push(r);
			}
			return arr;
		}
		
		let randomArray = getRandomSample()
		console.log(randomArray)
		let puzzle = sol.map((i,index)=>{
			let num;
				 if(randomArray.some((i)=>i===index)){
				 	num ='.'
				 }else{
				 	num =i
				 }
			
			return num
		})
		console.log(puzzle)
		console.log(sol)
		runtime.globalVars.generated = puzzle.join("")
		runtime.globalVars.solution = sol.join("")
	},

	async Esudokumain_Event3_Act5(runtime, localVars)
	{
		// we start with an empty sudoku...
		var sudoku = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
		
		    var DIFFICULTY = {
		        "easy":         43,
		        "medium":       51,
		        "hard":         56,
		        "VeryHard":     58,
		        "extreme":      62,
		        "master":       64,
		    };
		// ... and we solve it!!
		
		let sol;
		solve(sudoku);
		// given a sudoku cell, returns the row
		function returnRow(cell) {
			return Math.floor(cell / 9);
		}
		
		// given a sudoku cell, returns the column
		function returnCol(cell) {
			return cell % 9;
		}
		
		// given a sudoku cell, returns the 3x3 block
		function returnBlock(cell) {
			return Math.floor(returnRow(cell) / 3) * 3 + Math.floor(returnCol(cell) / 3);
		}
		
		// given a number, a row and a sudoku, returns true if the number can be placed in the row
		function isPossibleRow(number,row,sudoku) {
			for (var i=0; i<=8; i++) {
				if (sudoku[row*9+i] == number) {
					return false;
				}
			}
			return true;
		}
		
		// given a number, a column and a sudoku, returns true if the number can be placed in the column
		function isPossibleCol(number,col,sudoku) {
			for (var i=0; i<=8; i++) {
				if (sudoku[col+9*i] == number) {
					return false;
				}
			}
			return true;
		}
		
		// given a number, a 3x3 block and a sudoku, returns true if the number can be placed in the block
		function isPossibleBlock(number,block,sudoku) {
			for (var i=0; i<=8; i++) {
				if (sudoku[Math.floor(block/3)*27+i%3+9*Math.floor(i/3)+3*(block%3)] == number) {
					return false;
				}
			}
			return true;
		}
		
		// given a cell, a number and a sudoku, returns true if the number can be placed in the cell
		function isPossibleNumber(cell,number,sudoku) {
			var row = returnRow(cell);
			var col = returnCol(cell);
			var block = returnBlock(cell);
			return isPossibleRow(number,row,sudoku) && isPossibleCol(number,col,sudoku) && isPossibleBlock(number,block,sudoku);
		}
		
		// given a row and a sudoku, returns true if it's a legal row
		function isCorrectRow(row,sudoku) {
			var rightSequence = new Array(1,2,3,4,5,6,7,8,9);
			var rowTemp= new Array();
			for (var i=0; i<=8; i++) {
				rowTemp[i] = sudoku[row*9+i];
			}
			rowTemp.sort();
			return rowTemp.join() == rightSequence.join();
		}
		
		// given a column and a sudoku, returns true if it's a legal column
		function isCorrectCol(col,sudoku) {
			var rightSequence = new Array(1,2,3,4,5,6,7,8,9);
			var colTemp= new Array();
			for (var i=0; i<=8; i++) {
				colTemp[i] = sudoku[col+i*9];
			}
			colTemp.sort();
			return colTemp.join() == rightSequence.join();
		}
		
		// given a 3x3 block and a sudoku, returns true if it's a legal block 
		function isCorrectBlock(block,sudoku) {
			var rightSequence = new Array(1,2,3,4,5,6,7,8,9);
			var blockTemp= new Array();
			for (var i=0; i<=8; i++) {
				blockTemp[i] = sudoku[Math.floor(block/3)*27+i%3+9*Math.floor(i/3)+3*(block%3)];
			}
			blockTemp.sort();
			return blockTemp.join() == rightSequence.join();
		}
		
		// given a sudoku, returns true if the sudoku is solved
		function isSolvedSudoku(sudoku) {
			for (var i=0; i<=8; i++) {
				if (!isCorrectBlock(i,sudoku) || !isCorrectRow(i,sudoku) || !isCorrectCol(i,sudoku)) {
					return false;
				}
			}
			return true;
		}
		
		// given a cell and a sudoku, returns an array with all possible values we can write in the cell
		function determinePossibleValues(cell,sudoku) {
			var possible = new Array();
			for (var i=1; i<=9; i++) {
				if (isPossibleNumber(cell,i,sudoku)) {
					possible.unshift(i);
				}
			}
			return possible;
		}
		
		// given an array of possible values assignable to a cell, returns a random value picked from the array
		function determineRandomPossibleValue(possible,cell) {
			var randomPicked = Math.floor(Math.random() * possible[cell].length);
			return possible[cell][randomPicked];
		}
		
		// given a sudoku, returns a two dimension array with all possible values 
		function scanSudokuForUnique(sudoku) {
			var possible = new Array();
			for (var i=0; i<=80; i++) {
				if (sudoku[i] == 0) {
					possible[i] = new Array();
					possible[i] = determinePossibleValues(i,sudoku);
					if (possible[i].length==0) {
						return false;
					}
				}
			}
			return possible;
		}
		
		// given an array and a number, removes the number from the array
		function removeAttempt(attemptArray,number) {
			var newArray = new Array();
			for (var i=0; i<attemptArray.length; i++) {
				if (attemptArray[i] != number) {
					newArray.unshift(attemptArray[i]);
				}
			}
			return newArray;
		}
		
		// given a two dimension array of possible values, returns the index of a cell where there are the less possible numbers to choose from
		function nextRandom(possible) {
			var max = 9;
			var minChoices = 0;
			for (var i=0; i<=80; i++) {
				if (possible[i]!=undefined) {
					if ((possible[i].length<=max) && (possible[i].length>0)) {
						max = possible[i].length;
						minChoices = i;
					}
				}
			}
			return minChoices;
		}
		
		// given a sudoku, solves it
		function solve(sudoku) {
			var saved = new Array();
			var savedSudoku = new Array();
			var i=0;
			var nextMove;
			var whatToTry;
			var attempt;
			while (!isSolvedSudoku(sudoku)) {
				i++;
				nextMove = scanSudokuForUnique(sudoku);
				if (nextMove == false) {
					nextMove = saved.pop();
					sudoku = savedSudoku.pop();
				}
				whatToTry = nextRandom(nextMove);
				attempt = determineRandomPossibleValue(nextMove,whatToTry);
				if (nextMove[whatToTry].length>1) {
					nextMove[whatToTry] = removeAttempt(nextMove[whatToTry],attempt);
					saved.push(nextMove.slice());
					savedSudoku.push(sudoku.slice());
				}
				sudoku[whatToTry] = attempt;
			}
			sol = sudoku;
		}
		
		
		// given a solved sudoku and the number of steps, prints out the sudoku
		function showSudoku(sudoku) {
			var sudokuText = "";
			for (var i=0; i<=8; i++) {
				for (var j=0; j<=8; j++) {
					sudokuText+=" ";
					sudokuText+=sudoku[i*9+j];
					sudokuText+=" ";
				}
		
			}
			return sudokuText;
		}
		
		function getRandom(length) { return Math.floor(Math.random()*(length)); }
		
		function getRandomSample() {
			var arr = [];
			while(arr.length < DIFFICULTY[runtime.globalVars["mode"]]){
				var r = Math.floor(Math.random() * 81) + 1;
				if(arr.indexOf(r) === -1) arr.push(r);
			}
			return arr;
		}
		
		let randomArray = getRandomSample()
		console.log(randomArray)
		let puzzle = sol.map((i,index)=>{
			let num;
				 if(randomArray.some((i)=>i===index)){
				 	num ='.'
				 }else{
				 	num =i
				 }
			
			return num
		})
		console.log(puzzle)
		console.log(sol)
		runtime.globalVars.generated = puzzle.join("")
		runtime.globalVars.solution = sol.join("")
	},

	async Esudokumain_Event68_Act2(runtime, localVars)
	{
		vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "reward"});
		   
		vkBridge.send("VKWebAppShowNativeAds", {ad_format:"reward"})
		    .then(data => {
							if (data.result) { 	runtime.globalVars.Priz=1;
								console.log(data.result);
								console.log(runtime.globalVars.Priz); }
							})
		    .catch(error => console.log(error));	
	},

	async Esudokumain_Event109_Act1(runtime, localVars)
	{
		console.log(runtime.globalVars.Abd);
	},

	async Esudokumain_Event109_Act2(runtime, localVars)
	{
		vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});
						 
		function MyAdd(){
		 vkBridge.send('VKWebAppShowNativeAds',{ad_format:"interstitial"}).then(data => {
						 console.log(data);});	
		}
		MyAdd();
	},

	async Esudokumain_Event109_Act4(runtime, localVars)
	{
		console.log(runtime.globalVars.Abd);
	},

	async Esudokumenu_Event16_Act2(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",                  {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	},

	async Esudokumenu_Event17_Act2(runtime, localVars)
	{
		 console.log("MySocial");
		  vkBridge.send('VKWebAppShowWallPostBox',
					   {"message": "Разгадай Всё!",
			     	     "attachments": "https://vk.com/app51541460_587856911"})
						  .then(data => {
						     console.log(data);});	
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

