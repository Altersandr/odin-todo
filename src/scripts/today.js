const day = new Date().getDate()
const month = new Date().getMonth()
const year = new Date().getFullYear()

const today = `${year}-${month+1}-${day}`;

export { today }