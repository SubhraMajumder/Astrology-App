import React from 'react';

const Asztro = (props) =>  {
    return (
        <div className="container">
            Current Date: {props.current_date} <br />
            Compatibility: {props.compatibility} <br />
            Lucky Number: {props.lucky_number} <br />
            Lucky Time: {props.lucky_time} <br />
            Color: {props.color} <br />
            Date Range: {props.date_range} <br />
            Mood: {props.mood} <br />
            Description: {props.description} <br />
        </div>
    );
}

export default Asztro;