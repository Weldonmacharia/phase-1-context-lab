function createEmployeeRecord(arr) {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(arrays) {
  return arrays.map(createEmployeeRecord)
}

function createTimeInEvent(dateStamp) {
  let [date, hour] = dateStamp.split(' ')
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date
  })
  return this
}

function createTimeOutEvent(dateStamp) {
  let [date, hour] = dateStamp.split(' ')
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date
  })
  return this
}

function hoursWorkedOnDate(soughtDate) {
  let timeIn = this.timeInEvents.find(e => e.date === soughtDate)
  let timeOut = this.timeOutEvents.find(e => e.date === soughtDate)
  return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(dateSought) {
  return hoursWorkedOnDate.call(this, dateSought) * this.payPerHour
}

function allWagesFor() {
  const dates = this.timeInEvents.map(e => e.date)
  const totalPay = dates.reduce((memo, d) => memo + wagesEarnedOnDate.call(this, d), 0)
  return totalPay
}

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(rec => rec.firstName === firstName)
}

function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((memo, rec) => memo + allWagesFor.call(rec), 0)
}


