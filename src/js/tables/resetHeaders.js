function resetHeaders(tableName, table){

    let svgHTML = '<img src="src/pics/sort.png" />' //insert icon here later to indicate sortability

    switch(tableName){
        
        case 'fishTable':
            
            let fishHeader = table.createTHead();
            
            fishHeader.innerHTML = `<th onclick="sortTableAlpha(0, 'fishTable')">Name ${svgHTML}</th><th onclick="sortTableNum(1, 'fishTable')">Price ${svgHTML}</th>
            <th onclick="sortTableAlpha(2, 'fishTable')">Location ${svgHTML}</th><th onclick="sortTableNum(3, 'fishTable')">Size ${svgHTML}</th>`;

            break;
        
        case 'bugTable':
            
            let bugHeader = table.createTHead();
            
            bugHeader.innerHTML = `<th onclick="sortTableAlpha(0, 'bugTable')">Name ${svgHTML}</th><th onclick="sortTableNum(1, 'bugTable')">Price ${svgHTML}</th>
            <th onclick="sortTableAlpha(2, 'bugTable')">Location ${svgHTML}</th>`;

            break;
        
        case 'seaCreatureTable':
            
            let creatureHeader = table.createTHead();
            
            creatureHeader.innerHTML = `<th onclick="sortTableAlpha(0, 'seaCreatureTable')">Name ${svgHTML}</th><th onclick="sortTableNum(1, 'seaCreatureTable')">Price ${svgHTML}</th>`;
            
            break;

    }
}