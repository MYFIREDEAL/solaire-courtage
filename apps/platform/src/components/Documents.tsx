import React from 'react';

const docs = [
  { name: 'Exemple PDF', file: '/docs/exemple.pdf' }
];

const Documents: React.FC = () => {
  return (
    <div>
      <h2>Documents</h2>
      <ul>
        {docs.map(doc => (
          <li key={doc.file}>
            <a href={doc.file} download>{doc.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Documents;
