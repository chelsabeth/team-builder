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
        const newTeam = {
            ...list, 
            id: Date.now()
        };

        
    }
}