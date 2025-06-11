// conditional rendering = Allows you to control what gets rendered in your application
//                         based on certain conditions
//                         (show, hide or change components.)


import PropTypes from 'prop-types'

function UserGreeting(props){
       return(props.isLoggedIn  ? <h2 className="Welcome-message">Welcome{props.username}</h2>:
                                  <h2 className="Login-message">Please Login in to continue.</h2>);                     
                                
                                
}

UserGreeting.proptypes ={
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string,

}
UserGreeting.defaultprops = {
    isLoggedIn : false,
    username : "Guest",
}

export default UserGreeting;