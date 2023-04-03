const gallery = document.querySelector('.gallery');
const generateBtn = document.querySelector('.btn');

generateBtn.addEventListener('click',function() {
    const num = (document.getElementById('input_num').value);
    for(let i = 0; i < num ;i++){
        const height = Math.floor(Math.random() *201)+100;
        const box = document.createElement('div');
        box.classList.add('img');
        box.style.height = height+'px';
        box.style. paddingTop ='100%';
        box.innerHTML = i;
        document.querySelector(`.gallery_${i%5}`).appendChild(box);
    }
})
