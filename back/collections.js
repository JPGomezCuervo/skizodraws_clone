import express from  "express";
import { db } from "./index.js";
import { fetchall } from "./utils.js";

const products_params = {
        t_shirts: "t_shirts",
        stickers: "stickers",
        hoodies: "hoodies",
        enamel_pins: "enamel_pins",
        crewnecks: "crewnecks",
        wallpapers: "wallpapers",
        all: "all"
};

const products_params_arr = [
        "t_shirts",
        "stickers",
        "hoodies",
        "enamel_pins",
        "crewnecks",
        "wallpapers",
        "all"
];

const router = express.Router();
router.get("/:products", check_product_params, get_products );
router.get("/products/types", get_product_types );

async function get_products(req, res) {
        const sql = "SELECT * FROM products";
        try {
                const products = await fetchall(db, sql);
                res.status(200).json(products);
        } catch(err) {
                /* TODO: magic number */
                console.err(err);
                res.status(500).end()
        } 
}

async function get_product_types(req, res) {
        const sql = "SELECT * FROM product_types";
        try {
                const product_types = await fetchall(db, sql);
                res.status(200).json(product_types);
        } catch(err) {
                /* TODO: magic number */
                console.err(err);
                res.status(500).end()
        } 

}

function check_product_params(req, res, next) {

        let found = false;
        for (const value of Object.values(req.params))
                found = products_params_arr.includes(value);

        if (found)
                next();
         else 
                res.send("NOT FOUND 404");

}

export default router;
