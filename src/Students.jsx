// props = read-only properties that are shared between components
//         A parent component can send data to a child component
//         <component key=value />
// NB: props is a shortform for Properties

function Students(props){
    return(
        <div className="students">
            <p>Name:{props.name}</p>
            <p>Age: {props.age}</p>
            <p>isStudent: {props.isStudent  ? "Yes" : "No"}</p>
            
        </div>
    );
}

export default Students