import React from 'react'

export const ListOrderedComponent = props => {
    const items = props.items
    return (
        <div className="sidebar-container">
            <h4>{props.title}</h4>
            <ol className="sidebar-list">
                {items.map(item => (
                    <li>
                        <span style={{ color: '#fff' }}>{item.name}</span>
                        <span>{item.artists[0].name}</span>
                    </li>
                ))}
            </ol>
        </div>
    )
}
