// function checkPossibilityConversion(str) {
// 	let firstWord = str.split(' ')[0],
// 		secondWord = str.split(' ')[1];

// 	// слова тождественно равны - преобразований не требуется, возвращаем 1
// 	if (firstWord === secondWord) return 1;
// 	// длина первого слова отличается от длины второго - возвращаем 0
// 	if (firstWord.length !== secondWord.length) return 0;
	
// 	let discrepancy = defineDiscrepancy(firstWord, secondWord);
// 	let answer = defineDiscrepanciesIndexes(firstWord, secondWord, discrepancy);
	
// 	// одинаковым буквам первой строки соответствуют разные буквы второй - возвращаем 0 
// 	if(!answer) return 0;
	
// 	let allLettersUsed = checkAllLettersUsed(firstWord, secondWord);
// 	// в обоих словах использованы все буквы из алфавита - возвращаем 0
// 	if (allLettersUsed) return 0;

// 	return 1;
// }

// // ф-ия определяет все буквы из первого слова, несоответствующие буквам во втором слове
// function defineDiscrepancy(firstWord, secondWord) {
// 	let discrepancy = [];

// 	for (let i = 0; i < firstWord.length; i++) {
// 		if (firstWord[i] !== secondWord[i]) discrepancy.push(firstWord[i]);
// 	}

// 	return filterRepeatLetters(discrepancy);
// }

// // ф-ия фильтрует только повторяющиеся буквы
// function filterRepeatLetters(discrepancy) {
// 	// фильтруем повторяющиеся буквы
// 	discrepancy = discrepancy.filter(item => discrepancy.filter(i => item === i).length > 1);
// 	// оставлем отфильтрованные буквы в единственном экземпляре
// 	discrepancy = discrepancy.filter((item, ind) => discrepancy.indexOf(item) === ind);

// 	return discrepancy;
// }

// // ф-ия определяет индексы несоответствующих повторяющихся букв
// function defineDiscrepanciesIndexes(firstWord, secondWord, discrepancy) {
// 	for (let i = 0; i < discrepancy.length; i++) {
// 		// формируем массив индексов из несоответствующих повторяющихся букв
// 		let discrepanciesIndexes = firstWord.split('').reduce((result, item, index) => { 
// 			if (discrepancy[i] === item) result.push(index);
// 			return result; 
// 		}, []);
		
// 		if (!compareLetters(secondWord, discrepanciesIndexes)) return false;
// 	}

// 	return true;
// }

// // ф-ия проверяет, соответствуют ли одинаковым буквам первого слова одинаковые между собой буквы второго слова
// function compareLetters(secondWord, discrepanciesIndexes) {
// 	let letters = secondWord[discrepanciesIndexes[0]];
// 	return discrepanciesIndexes.every(item => letters === secondWord[item]);
// }

// // ф-ия провереяет, все ли буквы из алфавита использованы в первом и втором словах
// function checkAllLettersUsed(firstWord, secondWord) {
// 	let alphabet = ["а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я"];

// 	return alphabet.every(item => firstWord.includes(item) && secondWord.includes(item));
// }

// console.log(checkPossibilityConversion('привет прикол'));
// console.log(checkPossibilityConversion('ааббдд ддббаа'));
// console.log(checkPossibilityConversion('ддббаа ааббдд'));
// console.log(checkPossibilityConversion('абаб ааах'));
// console.log(checkPossibilityConversion('ппабакабб рранааанн'));
// console.log(checkPossibilityConversion('ааабббвввгггдддеееёёёжжжзззииийййккклллмммнннооопппрррссстттуууфффхххцццчччшшшщщщъъъыыыьььэээюююяяя бббааавввгггдддеееёёёжжжзззииийййккклллмммнннооопппрррссстттуууфффхххцццчччшшшщщщъъъыыыьььэээюююяяя'));

// -------------------------- //

// function findIntervals(enter) {
//     let countVacancy = Number(enter.slice(0, 1)),
//         arrayOfIntervals = enter.slice(2).split(' ').map((i) => Number(i));
//         // массив всех секунд, когда происходило открытие/закрытие какой-либо вакансии
//         // flatArrayOfIntervals = arrayOfIntervals.flat(1);
//         // самая ранняя секунда открытия вакансии
//         timeStart = Math.min(...arrayOfIntervals),
//         // самая поздняя секунда закрытия вакансии
//         timeEnd = Math.max(...arrayOfIntervals),
//         maxCountOfVacancies = 0,
//         durationOfIntervals = 1,
//         countOfIntervals = 1;
//         console.log(arrayOfIntervals)
//         // проходим по каждой секунде с первой по последнюю и считаем, сколько активных вакансий и сколько было открыто вакансий в конкретную секунду
//         for (let i = timeStart; i <= timeEnd; i++) {
//         	let activeVacanciesNow = 0,
//         		openingVacanciesNow = 0,
//                 count = 0;

//         	// проверяем, принадлежит ли конкретная секунда времени интервалу времени каждой вакансии
//         	for (let j = 0; j < countVacancy; j++) {
//         		// если вакансия активна - считаем её
//         		if (i >= arrayOfIntervals[count] && 
//         			i <= arrayOfIntervals[count + 1]) activeVacanciesNow++;
//         		// если вакансия открывается - счиатем её
//         		if (i === arrayOfIntervals[count]) openingVacanciesNow++;
//                 count += 2;
//         	}

//         	// если устанавливаем новый рекорд по количеству активных вакансий, то начинаем рассчёт выходных данных сначала
//         	if (activeVacanciesNow > maxCountOfVacancies) {
//         		maxCountOfVacancies = activeVacanciesNow;
//         		durationOfIntervals = 1;
//         		countOfIntervals = 1;
//         	} else {
//         		// если активных вакансий столько же, как и предыдущий максимум - "прожили" ещё одну секунду в состоянии максимального кол-ва вакансий
//         		if (activeVacanciesNow === maxCountOfVacancies) {
//         			durationOfIntervals++;
//         			// если была открыта хотя бы одна вакансия - прибавляем новый интервал
//         			if (openingVacanciesNow > 0) countOfIntervals++;
//         		}

//         	}

//         }
        
//         return `${countOfIntervals} ${durationOfIntervals}`;
// }

// console.log(findIntervals(['0','0 0']));

// console.log(findIntervals('6 70 80 71 79 72 78 73 77 74 76 75 75'));
// // //
// console.log(findIntervals('8\n53 56\n58 60\n51 54\n45 50\n54 58\n58 60\n58 65\n54 62'));
// console.log(findIntervals('1\n1595862781 1595862785'));
// console.log(findIntervals('2\n1595862781 1595862783\n1595862782 1595862784'));
// console.log(findIntervals('2\n1595862781 1595862782\n1595862783 1595862784'));
// console.log(findIntervals('4\n1 1\n2 2\n3 3\n4 4'));
// console.log(findIntervals('3\n1 2\n2 3\n3 4'));
// console.log(findIntervals('2\n1 2\n3 4'));
// console.log(findIntervals('8\n1 2\n1 3\n1 4\n5 6\n5 7\n9 10\n9 11\n9 12'));

