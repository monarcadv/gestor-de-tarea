async function aps(){
    const res = await fetch('http://localhost:4040/api/data/')
    const data = await res.json()
    console.log(data)
    document.body.innerHTML = JSON.stringify(data)
}
aps()
