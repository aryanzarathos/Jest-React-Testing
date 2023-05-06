import React from 'react'

const Todo = ({data}) => {
    return (
        <React.Fragment>
            {
                data.map((item, key) => {
                    return (
                        <td key={key}>
                            <tr data-testid={"todo-1"}>{item.id}</tr>
                            <tr data-testid={"todo-2"}>{item.name}</tr>
                            <tr data-testid={"todo-3"}>{item.completed}</tr>
                        </td>
                    )
                })
            }
        </React.Fragment>
    )
}

export default Todo