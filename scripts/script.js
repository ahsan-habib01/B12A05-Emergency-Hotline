// getElementById function
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

getElement('service-box').addEventListener('click', function (e) {
  if (e.target.className.includes('heart-btn')) {
    // console.log('heart btn clicked');
    const heartButton = e.target;

    const heartCount = getElement('heart-count').innerText;
    const heartCountIncrement = Number(heartCount) + 1;

    getElement('heart-count').innerText = heartCountIncrement;
  }
});

getElement('service-box').addEventListener('click', function (e) {
  if (e.target.className.includes('call-btn')) {
    const callButton = e.target;

    const serviceTitle =
      callButton.parentNode.parentNode.children[1].children[0].innerText;

    const serviceNumber =
      callButton.parentNode.parentNode.children[1].children[2].innerText;

    const date = new Date().toLocaleTimeString();

    const callHistoryContainer = getElement('history-container');

    const callHistoryDiv = document.createElement('div');
    callHistoryDiv.innerHTML = `
          <div class="px-3">
            <div class="p-3 rounded-xl bg-[#fafafa] mb-2 flex justify-between items-center">
              <div>
                <h1 class="font-semibold">${serviceTitle}</h1>
                <p>${serviceNumber}</p>
              </div>
              <p>${date}</p>
            </div>
          </div>
    `;
    callHistoryContainer.append(callHistoryDiv);
  }
});


