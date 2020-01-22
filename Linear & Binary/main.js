
let aliceWords = [];
let dictionary = [];

fetch("files/AliceInWonderLandCh1.txt")
.then((rawData) => rawData.text())
.then(processData);

fetch("files/dictionary.txt")
.then((rawData) => rawData.text())
.then(processData2);

function linearSearch(anArray, item) {
    for (let i = 0; i < anArray.length; i++) {
        if (anArray[i] == item) {
            return i;
        }
    }
    return -1;
}


document.getElementById('go').addEventListener('click', searchSelection);

function binarySearch (anArray, item) {
    let lowInd = 0;
    let upperInd = anArray.length - 1;
    while ((upperInd - lowInd) >= 0) {
        let midInd = Math.floor((lowInd + upperInd)/2);
    
        if (item == anArray[midInd]) {
            return midInd;
        } else if (item < anArray[midInd]) {
            upperInd = midInd - 1;
        } else {
            lowInd = midInd + 1;
        }
    }
    return -1;
}

function searchSelection () {
    let selection = document.getElementById('menu').value;
    if (selection == 'option1') {
        let userItem = prompt('Choose a word');
        let output = linearSearch(dictionary,userItem);
        if (output > -1) {
            outputEl.innerHTML = 'Item was found';
        } else {
            outputEl.innerHTML = 'Item was not found';
        }
    } else if (selection == 'option2') {
        let userItem = prompt('Choose a word');
        let output = binarySearch(dictionary,userItem);
        if (output > -1) {
            outputEl.innerHTML = 'Item was found';
        } else {
            outputEl.innerHTML = 'Item was not found';
        }
    } else if (selection == 'option3') {
            for (let i = 0; i < aliceWords.length; i++) {
                aliceWords[i] = aliceWords[i].toLowerCase();
                    let output = linearSearch(dictionary, aliceWords[i]);
                    if (output <= -1) {
                        outputEl.innerHTML += aliceWords[i] + ' ';
                    }
            }
    } else if (selection == 'option4') {
        for (let i = 0; i < aliceWords.length; i++) {
            aliceWords[i] = aliceWords[i].toLowerCase();
                let output = binarySearch(dictionary, aliceWords[i]);
                if (output <= -1) {
                    outputEl.innerHTML += aliceWords[i] + ' ';
                }
        }
    }

}

function processData(data) {
    aliceWords = data.split(/\W+/);
}

function processData2(data) {
    let lines = data.split("\r\n");
    
    for (let i = 0; i < lines.length; i ++) {
        dictionary.push(lines[i]);
    }
}