function turn() {
    let tipping = document.querySelector('.tipping');
    tipping.style.display = "block";
}

function off() {
    let tipping = document.querySelector('.tipping');
    tipping.style.display = "none";
}

function pay(num) {
    let zfb = document.querySelector('.zfb');
    let wx = document.querySelector('.wx');
    let pay_code = document.querySelectorAll('.tipping .pay_code1 > *')

    if (num === 1) {
        pay_code.forEach(i => {
            i.style.transform = 'rotateY(360deg)';
        });
        zfb.style.background = 'linear-gradient(140deg, rgba(97, 144, 232, 0.8), rgba(167, 191, 232, 0.5))';
        wx.style.background = 'linear-gradient(140deg, rgba(148, 148, 148, 0.5), rgba(148, 148, 148, 0.5))';
        zfb.style.boxShadow = '0 5px 15px -3px rgba(97, 144, 232, 0.8)';
        wx.style.boxShadow = '0 5px 15px -3px rgba(148, 148, 148, 0.5)';
    } else {
        pay_code.forEach(i => {
            i.style.transform = 'rotateY(90deg)';
        });
        zfb.style.background = 'linear-gradient(140deg, rgba(148, 148, 148, 0.5), rgba(148, 148, 148, 0.5))';
        wx.style.background = 'linear-gradient(140deg, rgba(77, 162, 203, 0.8), rgba(103, 178, 111, 0.5))';
        wx.style.boxShadow = '0 5px 15px -3px rgba(103, 178, 111, 0.8)';
        zfb.style.boxShadow = '0 5px 15px -3px rgba(148, 148, 148, 0.5)';
    }
}