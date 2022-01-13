
import React, {useEffect, useState} from "react";

import './App.css';
// import Users from "./components/Users/Users";
// import {userService} from "./services/userService";

// function App() {
//
//   const wife = {name:'Anna', age: 25}
//
//   return (
//         <Users>
//           {wife}
//           Jenya
//         </Users>
//   );
// }

// function App() {
//
//     const [users, setUsers] = useState([]);
//     const [user, setUser] = useState(null);
//
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(users => setUsers(users));
//     }, [])
//
//     const showUser = (id) => {
//         fetch('https://jsonplaceholder.typicode.com/users/' + id)
//             .then(response => response.json())
//             .then(user => setUser(user));
//     }
//
//
//     return (
//         <div>
//             {/*<div>{user?.id}---{user?.name}---{user?.email}</div>*/}
//             {/*{user && <div>{user?.id}---{user?.name}---{user?.email}</div>}*/}
//             {user ? <div>{user?.id}---{user?.name}---{user?.email}</div> : null}
//
//             { users.map(user => <Users key={user.id} id={user.id} name={user.name} showUser={showUser} user={user}/>) }
//         </div>
//     );
// }

// function App() {
//
//     const [users, setUsers] = useState([]);
//     const [user, setUser] = useState(null);
//
//     useEffect(() => {
//         userService.getAll()
//             .then(users => setUsers(users));
//     }, [])
//
//     const showUser = (id) => {
//         userService.getId(id)
//             .then(user => setUser(user));
//     }
//
//     return (
//         <div>
//             {/*<div>{user?.id}---{user?.name}---{user?.email}</div>*/}
//             {/*{user && <div>{user?.id}---{user?.name}---{user?.email}</div>}*/}
//             {user ? <div>{user?.id}---{user?.name}---{user?.email}</div> : null}
//
//             { users.map(user => <Users key={user.id} id={user.id} name={user.name} showUser={showUser} user={user}/>) }
//         </div>
//     );
// }

const App = () => {

    // const [name, setName] = useState('default');
    // const [age, setAge] = useState(0);

    const [form, setForm] = useState({name: 'default', age: 0});

    function formHandler(e) {
        e.preventDefault();
        // console.log(e.target.name.value, e.target.age.value);
        console.log(form)
    }

    // function handlerName(e) {
    //     setName(e.target.value)
    // }
    //
    // function handlerAge(e) {
    //     setAge(e.target.value)
    // }

    function handler(e) {
        // console.log(e.target.value);
        setForm({...form,[e.target.name]:e.target.value})
        console.log(form)
    }


    return (
        <form onSubmit={formHandler}>
            <label>Name:<input type={'text'} name={'name'} value={form.name} onChange={handler}/></label>
            <label>Age:<input type={'number'} name={'age'} value={form.age} onChange={handler}/></label>
            <button>Send</button>
        </form>
    );
}

export default App;