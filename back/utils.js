export async function fetchall(db, sql, params) {
        return new Promise((resolve, reject) => {
                db.all(sql, params, (err, rows) => {
                        if (err) reject(err);
                        resolve(rows);
                });
        });
}

export async function fetchone(db, sql, params) {
        return new Promise((resolve, reject) => {
                db.get(sql, params, (err, row) => {
                        if (err) reject(err);
                        resolve(row);
                });
        });
}

export function logger(req, res, next) {
        const chalk = new Chalk();
        const protocol = req.protocol, method = chalk.yellow(req.method), path = req.path;

        res.on("finish", () => {
                let status_str = "";
                const today = new Date();
                const formatted_date = today.toLocaleString("en-US", { hour12: false }).replace(",","");
                const str_formatted = "";

                if (res.statusCode < 400)
                        status_str = chalk.green(res.statusCode);
                else
                        status_str = chalk.red(res.statusCode);

                console.log(formatted_date, protocol, method, "to", path, status_str);
        });

        next();
}

class Chalk {
        constructor() {
                this.prefix = "\x1b[";
                this.reset = "0m";
                this.colors = {
                        black: "30m",
                        red: "31m",
                        green: "32m",
                        yellow: "33m",
                        blue: "34m",
                        magenta: "35m",
                        cyan: "36m",
                        white: "37m",
                };
        }

        colorize(color, str) {
                if (!this.colors[color]) {
                        throw new Error(`Color "${color}" not found`);
                }
                return `${this.prefix}${this.colors[color]}${str}${this.prefix}${this.reset}`;
        }

        black(str) {
                return this.colorize("black", str);
        }

        red(str) {
                return this.colorize("red", str);
        }

        green(str) {
                return this.colorize("green", str);
        }

        yellow(str) {
                return this.colorize("yellow", str);
        }

        blue(str) {
                return this.colorize("blue", str);
        }

        magenta(str) {
                return this.colorize("magenta", str);
        }

        cyan(str) {
                return this.colorize("cyan", str);
        }

        white(str) {
                return this.colorize("white", str);
        }
}
