import React from 'react'
import { List, Avatar } from 'antd'

export const ResultsComponent = props => {
    const results = props.results
    return (
        <List
            size="small"
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={results}
            renderItem={item => <List.Item>{item}</List.Item>}
        />
    )
}
