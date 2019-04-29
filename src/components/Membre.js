import React from 'react' 

const Membre = (props) => {

    const {nom, age} = props
    return (
        <h2>Membre de ma famille: {nom} agé de {age}</h2>
    )
}
export default Membre