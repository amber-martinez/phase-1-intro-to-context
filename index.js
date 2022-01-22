//createEmployeeRecord returns regEmp, an object
function createEmployeeRecord(empInfo) {

    let regEmp = Object.assign({}, empInfo)
//return an array of all these created
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
//         console.log(createEmployeeRecord(array));
        //only returning the first if return is here
        newArray.push(createEmployeeRecord(array))
    }
    return newArray;
}

// let empRec = createEmployeeRecord(['Amber', 'Martinez', 'Engineer', 1000])

function createTimeInEvent(empRec, dateStamp) {

    empRec.timeInEvents.timeInObj = {}

    // let type = 'TimeIn';
    empRec.timeInEvents.timeInObj.type = 'TimeIn';

    // let hour = dateStamp.slice(11, 15);
    empRec.timeInEvents.timeInObj.hour = dateStamp.slice(11, 15);

    // let date = dateStamp.slice(0, 10);
    empRec.timeInEvents.timeInObj.date = dateStamp.slice(0, 10);

    // return empRec.timeInEvents.timeInObj;
    return empRec.timeInEvents
}

// "YYYY-MM-DD HHMM"
// "2022-01-22"
    //ex. empRec = createEmployeeRecords()
// Argument(s) - An employee record Object, A date stamp ("YYYY-MM-DD HHMM")
// Returns- The employee record
// Behavior - Add an Object with keys to the timeInEvents Array on the record Object:
//            type: Set to "TimeIn"
//            hour: Derived from the argument
//            date: Derived from the argument