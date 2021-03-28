export type TodoType = {
    id: number;
    text: string;
    color: "red" | "orange" | "yellow" | "green" | "blue" | "navy";
    checked: boolean;
}

export function foreach(arg0: (todo: { color: any; }) => void) {
    throw new Error("Function not implemented.");
}
