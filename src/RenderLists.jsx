

function Lists(){
        const Fruits = [{id:1, name: "apple", calories:95},
                        {id:2, name: "orange", calories:45},
                        {id:3, name: "banana", calories:105},
                        {id:4, name: "coconut", calories:159},
                        {id:5, name: "pineapple", calories:37},
        ];

// Fruits.sort((a,b)=>a.name.localeCompare(b.name));  // Alphabetical Order
// Fruits.sort((a,b)=>b.name.localeCompare(a.name));  // Reverse Alphabetical Order.
// Fruits.sort((a,b)=>a.calories - b.calories);  // Numeric Orders
Fruits.sort((a,b)=>b.calories - a.calories);   // Reverse Numeric Orders
const ListItems = Fruits.map(fruit =>  <li key={fruit.id}>
                                        {fruit.name}: &nbsp;
                                        <b>{fruit.calories}</b></li>)

return (<ol>{ListItems}</ol>)
}

export default Lists