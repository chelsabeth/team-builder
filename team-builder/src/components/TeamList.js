import React from "react";


const TeamList = props => {
    console.log(props);
    return (
        <div className="form-list">
            {props.addNewMember.map(list => {
                return (
                    <div className="list" key={list.id}>
                        <h2>{list.name}</h2>
                        <h2>{list.email}</h2>
                        <h2>{list.role}</h2>
                    </div>
                );
            })}
        </div>
    );
};


export default TeamList;


// // function TeamList() {
// //     const [lists, setLists] = useState();
// //     const addNewList
// //   };