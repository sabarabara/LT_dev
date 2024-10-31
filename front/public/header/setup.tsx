import React from 'react';
import Icon from '@mdi/react';
import { mdiCogOutline } from '@mdi/js'; // ギアのアイコンをインポート

const Setup = () => {
    return (
        <div className="nf-cod-gear">
            <Icon path={mdiCogOutline} size={1} />
        </div>
    );
}

export default Setup;
