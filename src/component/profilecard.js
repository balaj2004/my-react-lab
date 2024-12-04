import react from 'react';
function profilecard(props){
    const { name , age, occupation, location } = props;
    return (
        <div className='profilecard'>
            <p>name, {name}!</p>
            <p> my age {age} years old.</p>
            <p>my occupation is: {occupation}.</p>
            <p>my location  is: {location}.</p>
        </div>
    );

}
export default profilecard;
