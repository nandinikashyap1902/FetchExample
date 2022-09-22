fetch("https://fakestoreapi.com/products").then((data)=>{
    //console.log(data); json format
    return data.json();{/* converted to object*/}
}).then((objectData)=>{ // coneverted data into object & fetched data from api.
    console.log(objectData[0].title);
    let tableData = "";
    objectData.map((values)=>{  {/* if we don't put + sign only last data willbe fetched.*/}

        tableData+=`<tr>            
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td><img src="${values.image}"/></td>
      </tr>`;
    })
    document.getElementById("table_body").innerHTML=tableData;
}).catch((err)=>{
    console.log(err);
})
