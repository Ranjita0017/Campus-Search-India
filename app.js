let url = "http://universities.hipolabs.com/search?name=India";
let ul = document.querySelector("ul");

let btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let inp = document.querySelector("input");
    let state = inp.value;
    inp.value = "";

    let colArr = await getColleges();
    showArr(colArr,state);
})

function showArr(colArr,state) {
    let li = document.querySelector("#list");
    li.innerText="";
    for(col of colArr){
        if (col["state-province"] && col["state-province"].toLowerCase() === state.toLowerCase()){
            let li = document.createElement("li");
            li.innerText = col.name;
            ul.appendChild(li);
        }
    }
}


async function getColleges() {
    try{
        let res = await axios.get(url);
        return res.data;
    }catch(e){
        console.log("error: ",e);
    }
}