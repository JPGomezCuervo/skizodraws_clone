import json
import sqlite3


conn = sqlite3.connect("./sqlite/skizodraws.db")
cursor  = conn.cursor()

with open("./data.json", "r") as f:
    data = json.load(f)


arr_products = data["collection"]["productVariants"]


for product in arr_products:
    price = product["price"]["amount"]
    currency = product["price"]["currencyCode"]
    name = product["product"]["title"]
    product_type = product["product"]["type"]
    url = product["image"]["src"]

    print(f"Inserting {name} {price} {currency} {product_type} {url}")
    cursor.execute("SELECT currency_id FROM currencies WHERE currency_name = ?", (currency,))
    currency_id = cursor.fetchone()

    if currency_id is None:
        cursor.execute("INSERT INTO currencies (currency_name) VALUES (?)", (currency,))
        conn.commit()
        currency_id = cursor.lastrowid
    else:
        currency_id = currency_id[0]

    cursor.execute("SELECT product_type_id FROM product_types WHERE product_type_name = ?", (product_type,))
    product_type_id = cursor.fetchone()

    if product_type_id is None:
        cursor.execute("INSERT INTO product_types (product_type_name) VALUES (?)", (product_type,))
        conn.commit()
        product_type_id = cursor.lastrowid
    else:
        product_type_id = product_type_id[0]

    # Insert product
    cursor.execute("""
        INSERT INTO products (
            product_title,
            product_type_id,
            product_price,
            currency_id,
            product_img_src
        ) VALUES (?, ?, ?, ?, ?)
    """, (name, product_type_id, price, currency_id, url))

    conn.commit()


conn.close()
