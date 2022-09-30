const notes = [
    {
        title:'Relaxing',
        body:'Go to bed on time'
    },
    {
        title: 'Next trip',
        body:'Go to the Spain'
    },
    {
        title:'Office work',
        body:'Reprot the work'
    }
]

const renderNotes = (notes)=>{
    notes.forEach((note,i)=>{
        let el = document.createElement('p');
        el.innerHTML = `
            <h3>Title : ${note.title}</h3>
            <p>Content: ${note.body}</p>
            <button id=${i} style="color:red">Delete</button>
        `
        document.querySelector('#list-to-do').appendChild(el)
        document.getElementById(`${i}`).addEventListener('click',(e)=>{
            e.target.parentNode.remove();
            notes.splice(i,1);
        })
    })

}

const clearNotes = ()=>{
    document.querySelector('#list-to-do').innerHTML = '';
}

renderNotes(notes);

const addForm = document.querySelector('#add');
addForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    notes.push({
        title: e.target.elements.title.value,
        body:e.target.elements.body.value
    })
    e.target.elements.title.value ='';
    e.target.elements.body.value=''
    clearNotes();
    renderNotes(notes);
})
