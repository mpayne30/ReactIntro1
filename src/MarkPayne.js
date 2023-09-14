// markPayne.js
import React from 'react';
import logoConstruction from './resources/logoConstruction.png';

function MarkPayne() {

    const projectData = [
        { id: 1, name: 'projectType' },
        { id: 2, name: 'projectLength' },
        { id: 3, name: 'estCostLabor' },
        { id: 4, name: 'bidPrice' },
        { id: 5, name: 'accepted' }
      ];

    return (
        <div>
            <MarkPayne projectData={projectData} />
        </div>
    )
}

export default MarkPayne;