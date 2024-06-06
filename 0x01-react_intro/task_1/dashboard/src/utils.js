export function getCurrentYear(){
    const currentDate = new Date().getCurrentYear();
    return currentDate;
}
  export function getFooterCopy(isIndex) {
    if (isIndex === true) {
      return "Holberton School";
    } else {
      return "Holberton School main dashboard";
    }
  }