import React from 'react';

const FormResults = props => {
    return(
       props.teamMember.map(member => {
                <div className="member" key={member.id}>
                    <p>{member.name}</p>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            })
       
    )
}

export default FormResults;