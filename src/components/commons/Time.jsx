const todayDate = type => {
  if (type === "yyyy-mm-dd") {
    let time = new Date();
    return (
      time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate()
    );
  }
};
export default todayDate;
