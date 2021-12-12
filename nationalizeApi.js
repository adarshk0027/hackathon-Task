const removeDiv=document.querySelector('.informal');
const checkInput=document.querySelector('.input');
const CheckButton=document.querySelector('.click');
const appendTable=document.querySelector('.appendTable')
//Function for getting input Field Value for search
function GetInputfieldValue(){
    try{
    removeDiv.remove();
    let name=checkInput.value
    return `https://api.nationalize.io?name=${name}`;
    }
    catch{
    console.log("getting Error on input Function");
    }
}
CheckButton.addEventListener("click",()=>{
    fetchNationalizeApi()
})
//function for fetch the Url 
async function fetchNationalizeApi(){
    const PersonUrl=await GetInputfieldValue();
    const Result=await fetch(PersonUrl);
    //geting Data That we WANT to create Table
    const Data=await Result.json()
    console.log(Data);
    //creating Table For Viewing Data
    let div=document.createElement('div');
    div.classList.add('col-sm-6','mx-auto','removing')
    let Table=document.createElement('table');
    div.append(Table)
    //clear button functions
    let Clear=document.createElement('button');
    div.appendChild(Clear)
    Clear.innerHTML="Clear"
    Clear.classList.add('bg-info','clear')
    Clear.setAttribute("onclick","ClearDATA()")
    Table.classList.add('table','mx-auto')
    Table.innerHTML=`<tr>
    <th>Name</th>
    <td>${Data.name}</td>
  </tr>
  <tr>
    <th>Country1</th>
    <td>${Data.country[0].country_id}</td>
    <td class="greater">${Data.country[0].probability} <span><input type="checkbox" name="" id="check" checked> </span></td>
  </tr>
  <tr>
    <th>Country2</th>
    <td>${Data.country[1].country_id}</td>
    <td class="lower">${Data.country[1].probability}</td>
  </tr>
`
checkInput.value=""
const Success=document.createElement('div');
div.appendChild(Success);
Success.classList.add('col-sm-6','mx-auto','thanks')
Success.innerHTML="Thanks For Your visit"
        appendTable.append(div);

    

}
//clear Table Function
function ClearDATA(){
    const RemoveTable=document.querySelector('.removing');
    RemoveTable.remove();
    appendTable.append(removeDiv)

}


