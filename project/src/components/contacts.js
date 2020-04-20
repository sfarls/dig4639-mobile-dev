import React from 'react';

const Contacts = ({contacts}) => {
    return (
        <div>
            <center><h2>Contact List</h2></center>
            {contacts.map((contact) => {return contacts}) }{
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">{contacts.name}</h3>
                        <h4 className="card-title">{contacts.number}</h4>
                    </div>
                    </div>
                    
            }
            )}
        </div>
        
    )
    
};

export default Contacts;