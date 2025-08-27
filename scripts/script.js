// getElementById function
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// Heart Button
getElement('service-box').addEventListener('click', function (e) {
  if (e.target.className.includes('heart-btn')) {
    // const heartButton = e.target;

    const heartCount = getElement('heart-count').innerText;
    const heartCountIncrement = Number(heartCount) + 1;

    getElement('heart-count').innerText = heartCountIncrement;
  }
});

// Call Button
getElement('service-box').addEventListener('click', function (e) {
  if (e.target.className.includes('call-btn')) {
    const callButton = e.target;

    const serviceTitle =
      callButton.parentNode.parentNode.children[1].children[0].innerText;

    const subTitle =
      callButton.parentNode.parentNode.children[1].children[1].innerText;

    const serviceNumber =
      callButton.parentNode.parentNode.children[1].children[2].children[0]
        .innerText;

    const date = new Date().toLocaleTimeString();

    const callHistoryContainer = getElement('history-container');

    // coin
    const coinCount = getElement('coin-count').innerText;
    const coinCountDecrease = Number(coinCount) - 20;

    if (coinCountDecrease >= 0) {
      alert(`Calling ${subTitle} ${serviceNumber}...`);
    } else {
      alert('আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে ।');
      return;
    }

    getElement('coin-count').innerText = coinCountDecrease;

    // call history
    const callHistoryDiv = document.createElement('div');
    callHistoryDiv.innerHTML = `
          <div class="px-3">
            <div class="p-3 rounded-xl bg-[#fafafa] mb-2 flex justify-between items-center">
              <div>
                <h1 class="text-sm font-semibold">${serviceTitle}</h1>
                <p class="text-sm">${serviceNumber}</p>
              </div>
              <p class="text-sm">${date}</p>
            </div>
          </div>
    `;
    callHistoryContainer.append(callHistoryDiv);
  }
});

// Copy Button
getElement('service-box').addEventListener('click', function (e) {
  if (e.target.className.includes('copy-btn')) {
    copyButton = e.target;

    const serviceNumber =
      copyButton.parentNode.parentNode.children[1].children[2].children[0]
        .innerText;

    navigator.clipboard.writeText(serviceNumber).then(() => {
      alert(`নম্বর কপি হয়েছে: ${serviceNumber}`);

      const copyCount = getElement('copy-count').innerText;
      const copyCountIncrement = Number(copyCount) + 1;

      getElement('copy-count').innerText = copyCountIncrement;
    });
  }
});

// Clear Button
document.getElementById('btn-clear').addEventListener('click', function () {
  const cartContainer = getElement('history-container');
  cartContainer.innerHTML = '';
});
