import React from 'react';
import Icon from '@mdi/react';
import { mdiAccountCircle } from '@mdi/js';

const Profile=()=>{
    return(
        <div className='nf-fa-user'>
            <Icon path={mdiAccountCircle} size={1} />
        </div>
    );
}
export default Profile;