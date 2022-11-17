import mysqle from "mysql";

export const db = mysqle.createConnection({
    host: "localhost",
    user: "root",
    password: "3344",
    database: "social-app"
});