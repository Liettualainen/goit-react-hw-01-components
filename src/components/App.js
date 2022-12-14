// import { Profile } from './profiles.js'
import profiles from '../user.json'
import { GlobalStyle } from './GlobalStyle';
import { ProfileList } from './ProfileList';
import 'modern-normalize';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'      
      }}
    >
      {/* <Profile profile={profiles[0]} /> */}
  
      < ProfileList profiles={profiles} />
      <GlobalStyle/>
      
    </div>
  );
};

//} 