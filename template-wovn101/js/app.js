function modalCreate() {

  // * ------ ここだけ調整してください。他の行はいじらないでください！------*
  const data = {
    title: 'モーダルタイトル',
    desc: 'テキストが入ります。\n「バックスラッシュ+n」で改行できます。'
  }
  // * ---------------------------------------------------------- *

  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector('.modal-content');
  modalContent.innerHTML = "";
  
  const title = document.createElement('h3');
  const desc = document.createElement('p');
  const closeButton = document.createElement('button');

  closeButton.className = 'button'

  title.innerText = data.title;
  desc.innerText = data.desc;
  closeButton.innerText = '閉じる';
  modal.classList.add('is-open');

  closeButton.addEventListener("click", () => {
    modalContent.innerHTML = "";
    modal.classList.remove('is-open');
  })

  modalContent.appendChild(title);
  modalContent.appendChild(desc);
  modalContent.appendChild(closeButton);
}

function showConfirmElement() {
    const formElement = document.getElementById('contact-form')
    const confirmElement = document.getElementById('confirm-element')

    // 現在の日付・時間を取得してフォーマット
    const now = new Date();
    const datetime = now.getFullYear() + '/' +
        String(now.getMonth() + 1).padStart(2, '0') + '/' +
        String(now.getDate()).padStart(2, '0') + ' ' +
        String(now.getHours()).padStart(2, '0') + ':' +
        String(now.getMinutes()).padStart(2, '0') + ':' +
        String(now.getSeconds()).padStart(2, '0');

    document.getElementById('confirm-datetime').textContent = datetime;

    // 入力値を取得し反映
    document.getElementById('confirm-datetime').textContent = datetime;
    document.getElementById('confirm-name').textContent = document.getElementById('name').value;
    document.getElementById('confirm-email').textContent = document.getElementById('email').value;
    document.getElementById('confirm-phone').textContent = document.getElementById('phone').value;
    document.getElementById('confirm-message').textContent = document.getElementById('message').value;

    // 確認セクションの表示・フォームセクションの非表示
    formElement.style.display = 'none';
    confirmElement.style.display = 'block';
}

function showCompleteElement() {
    const confirmElement = document.getElementById('confirm-element');
    const completeElement = document.getElementById('complete-element');

    confirmElement.style.display = 'none';
    completeElement.style.display = 'block';
}