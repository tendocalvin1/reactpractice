

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
Fruits.sort((a,b)=>b.calories - a.calories); // Reverse Numeric Orders


//const LowCalFruits = Fruits.filter(fruit =>Fruits.calories < 100)
const HighCalFruits = Fruits.filter(fruit =>Fruits.calories > 100)

const ListItems = HighCalFruits.map(HighCalfruit =>  <li key={HighCalfruit.id}>
                                      {HighCalfruit.name}: &nbsp;
                                       <b>{HighCalfruit.calories}</b></li>)



//const ListItems = LowCalFruits.map(LowCalfruit =>  <li key={LowCalfruit.id}>
//                                                    {LowCalfruit.name}: &nbsp;
//                                                    <b>{LowCalfruit.calories}</b></li>)

//const ListItems = Fruits.map(fruit =>  <li key={fruit.id}>
//                                       {fruit.name}: &nbsp;
//                                       <b>{fruit.calories}</b></li>)

return (<ol>{ListItems}</ol>);
}

export default Lists