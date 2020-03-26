function getDaysLeft () {
  let today = new Date()
  let lockdownEndDate = new Date('16/04/2020')
  alert(today - lockdownEndDate)
}
