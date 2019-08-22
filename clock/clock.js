const setTime = () => {
    const time = new Date();

    const seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    const minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    document.querySelector('.watch span').textContent = `${hours}:${minutes}:${seconds}`
}
setInterval(setTime, 1000);

