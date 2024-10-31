import React from 'react';
import Icon from '@mdi/react';
import { mdiBellOutline } from '@mdi/js';

const Bell=()=>{
    return(
        <div className='nf-fa-bell'>
            <Icon path={mdiBellOutline} size={1} />
        </div>
    );
}

export default Bell;