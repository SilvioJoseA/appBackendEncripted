import { SECRETKEY } from "../config.js";
import { pool } from "../db.js";
import { descript, encriptedObject } from "../encriptedObjects.js";

const controller = {};
    controller.getUsers = async ( req , res ) => {
        try {
            const [ rows ] = await pool.query(`SELECT * FROM users`);
                const usersDesript = [];
                for (let i = 0; i < rows.length; i++) {
                    const user =await descript(rows[i].userEncripted,SECRETKEY);
                    usersDesript.push(user);
                }
                res.json(usersDesript);
        } catch (err) {
            res.status(500).json({message:'Something goes wrong'});
        }
    }
    controller.postUser = async ( req , res ) => {
        try {
            const { user , password } = req.body;
            const userEncripted = encriptedObject({user,password},SECRETKEY,Math.floor(Date.now() / 1000) + 31536000);
            const [ rows ] = await pool.query('INSERT INTO users ( id , userEncripted ) VALUES (NULL,?)',[userEncripted]);
                res.json(rows);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    controller.deleteUser = async ( req , res ) => {
        try {
            const { id } = req.params;
            const result = await pool.query('DELETE FROM users WHERE id = ?', [id]); // Corregido 'DELETE FROM users'
            res.json(result);
        } catch (error) {
            res.json({message:error.message});
        }
    }
export default controller;