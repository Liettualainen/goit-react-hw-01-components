import { PropTypes } from 'prop-types';
import { Profile } from './Profiles.js'

export const ProfileList = ({ profiles }) => {
    return (
    <ul>
        {profiles.map(profile => (
            <li style={{listStyleType:'none'}} key={profile.id} >
        <Profile profile={profile}/>
        </li>
        ))}
    </ul>
    );
};


ProfileList.propTypes = {
    profiles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    })).isRequired
}