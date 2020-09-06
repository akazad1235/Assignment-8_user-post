import React, { useState, useEffect } from 'react';

const Comment = (props) => {
  // console.log(props.comment);

    const {name, email, body } = props.comment
  

    return (
        <div>
           <h5>cmt name: {name}</h5>
           <p>emai: {email}</p>
    <p>{body}</p>
        </div>
    );
};

export default Comment;