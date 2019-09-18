import React, {useState} from "react";

const TeamForm = props => {
    console.log(props);
    const [list, setList] = useState({
        name: " ",
        email: " ",
        role: " "
    });

    const ChangeHandler = event => {
        setList({...list, [event.target.name]: event.target.value })
        console.log(event.target.name);
    };

    const SubmitForm = event => {
        event.preventDefault();
        const newMember = {
            ...list, 
            id: Date.now()
        };

        props.addNewMemeber(newMember);
        setList({ name: " ", email: " ", role: " "});
    };

    return (
        <form onSubmit={SubmitForm}>
        <label htmlFor="name">Name</label>
        <input type="text" name="title" value={list.name}
        onChange={ChangeHandler}/>
        <lable htmlFor="email">Email</lable>
        </form>
    )
}