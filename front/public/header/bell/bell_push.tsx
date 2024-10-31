import React from 'react';
import Icon from '@mdi/react';
import { mdiBellAlertOutline } from '@mdi/js';

const Bell_push=()=>{
    return(
        <div className='nf-mdi-bell_ring'>
            <Icon path={mdiBellAlertOutline} size={1} />
        </div>
    );
}

export default Bell_push;