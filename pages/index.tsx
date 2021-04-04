import React from "react"
import Axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import TodoList from "../components/TodoList"
import { TodoType } from "../types/todo";
import { getTodosAPI } from "../lib/api/todo";

const todos: TodoType[] = [
    { id: 1, text: "인터넷 강의 보기", color: "red", checked: false },
    { id: 2, text: "쿠팡에서 장보기", color: "blue", checked: true },
    { id: 3, text: "넥스트 공부", color: "yellow", checked: false },
    { id: 4, text: "옷 정리하기", color: "green", checked: false },
    { id: 5, text: "저녁 요리하기", color: "orange", checked: false },
    { id: 6, text: "유튜브 보기", color: "navy", checked: true },
];

const app: NextPage = () => {
    // TodoList의 TodoType의 Type 지정
    // TodoList의 todos 전달
    return <TodoList todos={todos}/>
}

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const { data } = await getTodosAPI();
        console.log(data);
        return { props: {}}
    } catch (e) {
        console.log(e);
        return { props: {}}
    }
}

export default app;