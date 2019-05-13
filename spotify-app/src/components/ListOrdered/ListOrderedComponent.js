import React from 'react';

export const ListOrderedComponent = props => {
  const items = props.items;
  return (
      <ol>
      {items.map(item => (
        <li>
          <span>item.title</span>
            <span>item.subtitle</span>
        </li>
      ))}
      </ol>
    )

}
