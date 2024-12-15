async function aps(){
    const res = await fetch('https://gestor-de-tarea.onrender.com/api/data')
    const data = await res.json()
    renderApis(data)
    

}
function renderApis(data:any){
    const ul = document.getElementById('ul')
    data.forEach((datas : any) =>{
        const li = document.createElement('li')
        li.innerHTML = `<h2>${datas.descripcion}</h2> <p>${datas.estado}</p>`
        ul?.appendChild(li)
        console.log(datas)
    })

}
aps()
