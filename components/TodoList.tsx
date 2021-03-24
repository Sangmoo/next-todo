import React from "react";
import styled from "styled-components";
import { TodoType } from "../types/todo";
import palette from "../styles/palette";

interface IProps {
    todos: TodoType[];
}

const Container = styled.div`
    width: 100%;

    .todo-list-header {
        padding: 12px;
        border-bottom: 1px solid ${palette.gray}
    }

    .todo-list-last-todo {
        font-size: 14px;
        span {
            margin-left: 8px;
        }
    }
`;

interface IProps {
    todos: TodoType[];
}

const TodoList: React.FC<IProps> = ({ todos }) => {
    return (
        <Container>
            <div className="todo-list-header">
                <p className="todo-list-last-todo">
                    남은 Todo <span>{todos.length}개</span>
                </p>
            </div>
        </Container>
    )
}

export default TodoList;