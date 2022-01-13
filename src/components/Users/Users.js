
import React, {useState} from 'react';

// const Users = (props) => {
//     const {name, age} = props.children[0];
//
//     return (
//         <div>
//             Hello {props.children[1]}. Your wife name: {name}. Her age is {age}
//         </div>
//     );
// };


// ------------------------------------------  usage useState  ------------------------------------------------------------------------------------
// const Users = () => {
//
//     const [greeting, setGreeting] = useState('hello');
//
//     function click() {
//         setGreeting(greeting + '!');
//         console.log(greeting);
//     }
//
//     return (
//         <div>
//             <button onClick={click}>Send</button>
//             {greeting}
//         </div>
//     )
//
// }

function Users({id, name, showUser,}) {

    // console.log(showUser);

    return (
        <div>
            {id}---{name}
            <button onClick={() => {
                showUser(id)
            }}>ShowName
            </button>
        </div>
    );
}



export default Users;