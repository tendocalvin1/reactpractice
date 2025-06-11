// propTypes = a mechanism that ensures that the passed value is of the correct datatype
//             age: ProTypes.number
//             When working with props, it is good practice to wptk with PropTypes.

// defaultProps = default values for props incase they are not passed from the parent component
//                name : "Guest"


import PropTypes from 'prop-types'
function Students(props){
    return(
        <div className="students">
            <p>Name:{props.name}</p>
            <p>Age: {props.age}</p>
            <p>isStudent: {props.isStudent  ? "Yes" : "No"}</p>
            
        </div>
    );
}
Students.propTypes ={
     name: PropTypes.string,
     age : PropTypes.number,
     isStudent : PropTypes.bool,
}
Students.defaultProps ={
    name : "Guest",
    age : 0,
    isStudent : false,
}


export default Students 