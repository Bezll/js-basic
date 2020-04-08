// Student score, total possible score
// 15/20 -> you got a C (75%)!
// A 90-100, B 80-89, C 70-79 D 60-69 E 50 -59

let gradeCalculator = function (studentScore, totalPosScore) {
    let gradePercent = (studentScore / totalPosScore) * 100
    
    if (gradePercent >= 90) {
        gradeScoring = 'A'
    }
    else if (gradePercent >= 80) {
        gradeScoring = 'B'
    }
    else if (gradePercent >= 70) {
        gradeScoring = 'C'
    }
    else if (gradePercent >= 60) {
        gradeScoring = 'D'
    }
    else if (gradePercent >= 50) {
        gradeScoring = 'E'
    }
    else  if (gradePercent >= 40) {                  
        gradeScoring = 'F'
    }
    else {
        gradeScoring = 'U'
    }
    return `You got a ${gradeScoring} (${gradePercent}%)!`;
}

let studentScoreAndTotalPosScore = gradeCalculator(0, 127)
console.log(studentScoreAndTotalPosScore)