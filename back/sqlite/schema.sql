DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS product_types;
DROP TABLE IF EXISTS currencies;

PRAGMA foreign_keys = ON;

CREATE TABLE product_types (
        product_type_id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_type_name TEXT NOT NULL
);

CREATE TABLE currencies (
        currency_id INTEGER PRIMARY KEY AUTOINCREMENT,
        currency_name TEXT NOT NULL
);

CREATE TABLE products (
        product_id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_title TEXT NOT NULL,
        product_type_id INTEGER NOT NULL,
        product_price REAL NOT NULL,
        currency_id INTEGER NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        product_img_src TEXT NOT NULL,
        FOREIGN KEY (product_type_id) REFERENCES product_types(product_type_id),
        FOREIGN KEY (currency_id) REFERENCES currencies(currency_id)
);

CREATE TRIGGER update_time
AFTER UPDATE ON products
BEGIN
        UPDATE products SET updated_at = CURRENT_TIMESTAMP WHERE product_id = OLD.product_id;
END;
