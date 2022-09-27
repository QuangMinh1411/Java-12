const text = document.querySelector('#text');
const btn = document.querySelector('#btn');
btn.addEventListener('click',()=>{
    text.classList.toggle('hide')
    text.classList.contains('hide')?btn.innerHTML='show':btn.innerHTML='hide';

})

const selectImage = document.querySelector('#texture-selector')
const imageFrame = document.querySelector('#texture-background');
selectImage.addEventListener('change',(e)=>{
    imageFrame.innerHTML = ''
    const imgUrl = e.target.value;
    const img = document.createElement('img');
    img.src = imgUrl;
    imageFrame.appendChild(img);
})