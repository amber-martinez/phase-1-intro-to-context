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

    let timeIn = empRec.timeInEvents.find(function(event) {
        return event.date === date;
    })

    let timeOut = empRec.timeOutEvents.find(function(event) {
        return event.date === date;
    })

    return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(empRec, date) {
    let hoursWorked = hoursWorkedOnDate(empRec, date);
    let pay = empRec.payPerHour

    return hoursWorked * pay
}

function allWagesFor(empRec) {
    let totalWages = [];

        for (let i = 0; i < empRec.timeInEvents.length; i++) {
            let date = empRec.timeInEvents[i].date;
            let wage = wagesEarnedOnDate(empRec, date);
            console.log(wage)
            totalWages.push(wage)
          }
    const reducer = (previousValue, currentValue) => previousValue + currentValue
    return totalWages.reduce(reducer)
}

function calculatePayroll(arrayOfRecords) {
    let payroll = []

        for (let empRec of arrayOfRecords) {
            let pay = allWagesFor(empRec);
            payroll.push(pay)
        }

    const reducer = (previousValue, currentValue) => previousValue + currentValue
    return payroll.reduce(reducer)
}