export function getFullYear(){
    const currentDate = new Date().getFullYear();
    return currentDate;
}
  export function getFooterCopy(isIndex) {
    if (isIndex === true) {
      return "Holberton School";
    } else {
      return "Holberton School main dashboard";
    }
  }
  export function getLatestNotification(){
    return "<strong>Urgent requirement</strong> - complete by EOD";
}