export const isValidColumn = (column) => column.length >= 2;

export const isValidIssue = (name) => name.length >= 1;

export const isValidTask = (name) => name.length >= 1;

const isValidColumnForm = (column) => isValidColumn(column.column_name)
export default isValidColumnForm