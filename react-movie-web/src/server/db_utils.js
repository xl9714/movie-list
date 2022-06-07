// function get(table, selector, column, match){
//     app.get({table}, (req, res)=>{
//         client.query(`SELECT ${selector} FROM ${table} WHERE ${column} HAVING ${match}`, (err, result)=>{
//             if (!err) {
//                 res.send(result.rows);
//             }
//         });
//         client.end;
//     })
// }