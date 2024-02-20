import React from 'react'
import Navbar from './Navbar'
import DataFrame, { Row } from 'dataframe-js';
import CardTest from './CardTest'


 const df = DataFrame.fromCSV('C:\Users\MOHAMMED TAHER\Desktop\IPL EVENT\auction\src\Components\assets\testPlayersCardStats.csv').then(df => df);
// const df = new DataFrame(data, columns);
// const filteredDf = df
//     .filter(row => row.get("survived") === "yes")
//     .select("class", "age", "sex");
// filteredDf.show(3);



const ElitePlayers = () => {
    return ( <div> 
        <Navbar/>
        <p>ElitePlayers</p>
        <CardTest/>
         </div>
    )
}

// export default ElitePlayers
export default ElitePlayers