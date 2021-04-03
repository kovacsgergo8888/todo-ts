import { Entity } from "./Entity";

export default interface Todo extends Entity {
    todo: string,
    location?: string,
    dueDate?: string
}
