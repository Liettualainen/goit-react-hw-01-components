import { Profile } from '../Profile/Profiles.js'
import {  ProfileListDiv, ProfileListUl} from './ProfileList.styled.js';

export const ProfileList = ({ profiles }) => {
    return (
        <ProfileListUl>
            {profiles.map(profile => (
                 <ProfileListDiv key={profile.id}>
                    <Profile profile={profile} />
                </ProfileListDiv>            
            ))}
        </ProfileListUl>    
    );
    
};
