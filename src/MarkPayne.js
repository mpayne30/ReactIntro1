// markPayne.js
import React from 'react';

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
            <ul>
                {projectData.map((projectData) => (
                  <li key={projectData.id}>{projectData.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default MarkPayne;