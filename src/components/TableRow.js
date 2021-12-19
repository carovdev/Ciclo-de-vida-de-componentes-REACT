import React from 'react';

const Tablerow = ({title,lenght,rating,genero,awards}) => {
    return (
        <tr>
           
            <td>{title}</td>
            <td>{lenght}</td>
            <td>{rating}</td>
                {
                    genero 
                    ?
                    <td>{genero.name}</td>
                    :
                    <td className='text-danger'>Sin Género</td>
                }
            
            <td>{awards}</td>
        </tr>
    )
}

export default Tablerow;