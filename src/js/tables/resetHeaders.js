function resetHeaders(tableName, table){

    let svgHTML = '<img src="src/pics/sort.png" />' //insert icon here later to indicate sortability

    switch(tableName){
        
        case 'fishTable':
            
            let fishHeader = table.createTHead();
            
            fishHeader.innerHTML = `<th onclick="sortTableAlpha(0, 'fishTable')">Name<br />${svgHTML}</th><th onclick="sortTableNum(1, 'fishTable')">Price<br />${svgHTML}</th>
            <th onclick="sortTableAlpha(2, 'fishTable')">Location<br />${svgHTML}</th><th onclick="sortTableNum(3, 'fishTable')">Size<br />${svgHTML}</th>`;

            break;
        
        case 'bugTable':
            
            let bugHeader = table.createTHead();
            
            bugHeader.innerHTML = `<th onclick="sortTableAlpha(0, 'bugTable')">Name<br />${svgHTML}</th><th onclick="sortTableNum(1, 'bugTable')">Price<br />${svgHTML}</th>
            <th onclick="sortTableAlpha(2, 'bugTable')">Location<br />${svgHTML}</th>`;

            break;
        
        case 'seaCreatureTable':
            
            let creatureHeader = table.createTHead();
            
            creatureHeader.innerHTML = `<th onclick="sortTableAlpha(0, 'seaCreatureTable')">Name<br />${svgHTML}</th><th onclick="sortTableNum(1, 'seaCreatureTable')">Price<br />${svgHTML}</th><th onclick="sortTableAlpha(2, 'seaCreatureTable')">Shadow<br />${svgHTML}</th>`;
            
            break;

    }
}