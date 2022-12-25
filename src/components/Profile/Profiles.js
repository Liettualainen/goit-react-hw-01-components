import { PropTypes } from 'prop-types';
import {
  ProfileShape, DescriptionShape, ImageShape, NameShape, TagShape,
  LocationShape, StatsShape, BoxShape, LabelShape, QuantityShape
} from './Profile.styled.js';

export const Profile = ({ profile: { avatar, username, tag, location, stats } }) => {
  return <ProfileShape>
    <DescriptionShape>
  <ImageShape>
        <img class="img" style={{border: "1px solid tomato",
        borderRadius: "50%", overflow: "hidden"}}
          src={avatar}
        alt="User avatar"
      /></ImageShape>
        <NameShape>
           <p>{username}</p>
      </NameShape>
        <TagShape>
          <p >{tag}</p>
      </TagShape>         
        <LocationShape>
        <p >{location}</p>
      </LocationShape>
    </DescriptionShape>       

    <StatsShape>
      < BoxShape>
        < LabelShape>
          <span>Followers</span>
        </LabelShape>            
        < QuantityShape>
          <span >{stats.followers}</span>
          </QuantityShape>     
      </ BoxShape>
            < BoxShape>
        < LabelShape>
          <span>Views</span>
        </LabelShape>            
        < QuantityShape>
          <span >{stats.views}</span>
          </QuantityShape>     
      </ BoxShape>
            < BoxShape>
        < LabelShape>
          <span>Likes</span>
        </LabelShape>            
        < QuantityShape>
          <span >{stats.likes}</span>
          </QuantityShape>     
      </ BoxShape>     
    </StatsShape> 
</ProfileShape>
};



Profile.propTypes = {
  profile: PropTypes.shape({
   avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.string.isRequired,
    }).isRequired
}

