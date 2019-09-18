import React from "react";


const Members = props => {
    console.log(props);
    return (
        <div>
            {props.map(list => {
                return (
                    <div className="member" key={list.id}>
                        <h2>{list.name}</h2>
                        <h2>{list.email}</h2>
                        <h2>{list.role}</h2>
                    </div>
                );
            })}
        </div>
    );
};


export default Members;


// function TeamList() {
//     const [lists, setLists] = useState();
//     const addNewList
//   };