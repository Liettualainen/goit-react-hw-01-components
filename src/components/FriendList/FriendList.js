import { PropTypes } from 'prop-types';

import {
 FriendListShape, FriendListStatus, FriendListBox, FriendListImage,FriendListName
} from './FriendsList.styled'; 

export const FriendList = ({ friends }) => {
    return <FriendListShape>
        {friends.map(friends => (
            <FriendListBox>
                <div>
                    <FriendListStatus isActive={friends.isOnline}>
                    </FriendListStatus>
                </div>
                <FriendListImage><img style={{border: "1px solid tomato",
        borderRadius: "10%", overflow: "hidden"}}
          src={friends.avatar}
                    alt="User avatar" /></FriendListImage>
                <FriendListName>{friends.name}</FriendListName>
             </FriendListBox>        
          ))}  
    </FriendListShape>
};

FriendList.propTypes = {
    friends: PropTypes.shape({
        isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
         avatar: PropTypes.oneOf(['Photos']),    
    }).isRequired
}
