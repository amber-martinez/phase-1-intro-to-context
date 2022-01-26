function createEmployeeRecord(empInfo) {

    let regEmp = Object.assign({}, empInfo)
        regEmp.firstName = empInfo[0];
        regEmp.familyName = empInfo[1];
        regEmp.title = empInfo[2];
        regEmp.payPerHour = empInfo[3];
        regEmp.timeInEvents = [];
        regEmp.timeOutEvents = [];

    return regEmp
} 


function createEmployeeRecords(arrayOfArrays) {
    let newArray = [];
    for (let array of arrayOfArrays) {
        newArray.push(createEmployeeRecord(array))
    }
    return newArray;
}

function createTimeInEvent(empRec, dateStamp) {
    let timeInObj = {}
    timeInObj.type = 'TimeIn';
    timeInObj.hour = parseInt(dateStamp.slice(11, 15));
    timeInObj.date = dateStamp.slice(0, 10);
    empRec.timeInEvents.push(timeInObj);
    return empRec
}

function createTimeOutEvent(empRec, dateStamp) {
    let timeOutObj = {}
    timeOutObj.type = 'TimeOut';
    timeOutObj.hour = parseInt(dateStamp.slice(11, 15));
    timeOutObj.date = dateStamp.slice(0, 10);
    empRec.timeOutEvents.push(timeOutObj)

    return empRec
}

function hoursWorkedOnDate(empRec, date) {

    let timeIn = createTimeInEvent(empRec, date);
    let timeOut = createTimeOutEvent(empRec, date);

    return timeOut.timeOutEvents.timeOutObj.hour - timeIn.timeInEvents.timeInObj.hour
//reduce method?
}




// Argument(s) - An employee record Object, A date of the form - "YYYY-MM-DD"
// Returns - Hours worked, an Integer
// Behavior - Given a date, find the number of hours elapsed between that date's timeInEvent and timeOutEvent