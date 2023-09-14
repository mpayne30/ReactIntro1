// markPayne.js
import React from 'react';
import logoConstruction from './resources/logoConstruction.png';

function MarkPayne() {

    const projectData = [
        { id: projectType, name: 'Project A' },
        { id: projectLength, name: 'Project B' },
        { id: estCostLabor, name: 'Project C' },
        { id: bidPrice, name: 'Project D' },
        { id: accepted, name: 'Project E' }
      ];

    return (
        <div>
            <MarkPayne projectData={projectData} />
        </div>
    )
}

export default MarkPayne;