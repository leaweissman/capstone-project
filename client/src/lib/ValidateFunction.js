export const isValidColumn = (column) => column.length >= 2;

const isValidColumnForm = (column) => isValidColumn(column.column_name)
export default isValidColumnForm