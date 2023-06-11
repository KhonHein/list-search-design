const search = document.querySelector('.input-group input'),
tableRows = document.querySelectorAll('tbody tr'); 
tableHeadings = document.querySelectorAll('thead th'); 

search.addEventListener('input', searchTable);

function searchTable(){
   tableRows.forEach((row,i) => {
    let tableDatas = row.textContent.toLowerCase(),
        searchData =search.value.toLowerCase();
        
        row.classList.toggle('hide' , tableDatas.indexOf(searchData) < 0 );
        row.style.setProperty('--delay', i/25 + 's');
   });
}

//============= sorting=========
tableHeadings.forEach((head , i)=>{
    let sort_arc = true;
    head.onclick = ()=>{
        tableHeadings.forEach(head => head.classList.remove('active'));
        head.classList.add('active');
        document.querySelectorAll('td').forEach(td => td.classList.remove('active'));
    tableRows.forEach(r =>{
        r.querySelectorAll('td')[i].classList.add('active')
        // console.log(r.querySelectorAll('td')[i])
        })
        head.classList.toggle('asc',sort_arc);

        sort_arc = head.classList.contains('asc') ? false : true;

        sortTable(i , sort_arc);
    }
    
})

function sortTable(column , sort_arc){
    [...tableRows].sort((a,b) =>{
        let first_row = a.querySelectorAll('td')[column].textContent.toLowerCase(),
         second_row = b.querySelectorAll('td')[column].textContent.toLowerCase();
        return sort_arc ? (first_row < second_row ? 1 : -1) : (first_row < second_row ? -1 : 1);
    })
    .map(sorted_row => document.querySelector('tbody').appendChild(sorted_row));
}
