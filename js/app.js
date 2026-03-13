function openModal() {
    const data = {
        title: 'こだわりのいちごづくり',
        desc: '1995年創業、30年の歴史を持つ当農園は、東京都優良農産物認証・有機JAS認証を取得した高品質ないちごを育てています。\n土づくりから収穫まで丁寧にこだわり、毎朝完熟した実だけを選んで朝摘み。香り高くみずみずしい旬のおいしさを、新鮮なままお届けします。\n長年培った技術と誠実な農業で、安心して味わえるいちごづくりを続けています。'
    }

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
    modal.style.display = 'flex';

    closeButton.addEventListener("click", () => {
        modalContent.innerHTML = "";
        modal.style.display = 'none';
    })

    modalContent.appendChild(title);
    modalContent.appendChild(desc);
    modalContent.appendChild(closeButton);
}