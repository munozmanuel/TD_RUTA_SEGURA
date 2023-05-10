const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const pool = require('../database/db.js')
const { promisify } = require('util')
const { error, log } = require('console')

//metodo para registro
exports.register = async (req, res) => {
    try {
        const name = req.body.name
        const usuario = req.body.usuario
        const pass = req.body.pass

        if (!name || !usuario || !pass) {
            console.log("-ERR----No se han ingresado datos o falta alguno------")
            res.render('register', {
                alert: true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese todos los datos de registro",
                alertIcon: "danger",
                showConfirmButton: true,
                timer: false,
                ruta: "register"
            });
        } else {
            let passHash = await bcryptjs.hash(pass, 8)
            const query = {
                text: 'INSERT INTO usuarios (usuario, name, pass) VALUES ($1, $2, $3)',
                values: [usuario, name, passHash],
            }
            await pool.query(query)
            res.redirect('/')
        }
    } catch (error) {
        console.log(error);
    }
}

exports.login = async (req, res) => {
    try {
        const usuario = req.body.usuario
        const pass = req.body.pass
        console.log(usuario + "-" + pass);

        if (!usuario || !pass) {
            console.log("-ERR----No se han ingresado datos o falta alguno------")
            res.render('login', {
                alert: true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese un usuario y password",
                alertIcon: "info",
                showConfirmButton: true,
                timer: false,
                ruta: "login"
            });

        } else {
            pool.query('SELECT * FROM usuarios WHERE usuario= $1', [usuario], async (error, results) => {
                console.log(results);
                if (results.length == 0 || !(await bcryptjs.compare(pass, results.rows[0].pass))) {
                    res.render('login', {
                        alert: true,
                        alertTitle: "ERROR",
                        alertMessage: "usuario y password incorrecto",
                        alertIcon: "error",
                        showConfirmButton: true,
                        timer: false,
                        ruta: "login"
                    })
                    console.log("IF");
                } else {
                    //inicio sesion ok
                    // const id = results[0].id
                    console.log("ELSE");
                    const id = results.rows[0].id
                    console.log(id);
                    const token = jwt.sign({ id: id }, process.env.JWT_SECRETO, {
                        expiresIn: process.env.JWT_TIEMPO_EXPIRA
                    })
                    //sin tiempo de expiracion
                    //const token = jwt.sign({id:id}, process.env.JWT_SECRETO)
                    console.log("TOKEN: " + token + "para el usuario:" + usuario)

                    const cookiesOptions = {
                        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                        httpOnly: true
                    }
                    res.cookie('jwt', token, cookiesOptions)
                    if (id == 13) {
                        console.log('MMUNOZ INGRESADO');
                        res.render('admin', {
                            alert: true,
                            alertTitle: "Conexion Exitosa",
                            alertMessage: "Login Correcto",
                            alertIcon: "success",
                            showConfirmButton: false,
                            timer: 800,
                            ruta: ""
                        })
                    }
                    else {
                        console.log('USUARIO NORMAL');
                        res.render('editor', {
                            alert: true,
                            alertTitle: "Conexion Exitosa",
                            alertMessage: "Login Correcto",
                            alertIcon: "success",
                            showConfirmButton: false,
                            timer: 800,
                            ruta: ""
                        })
                    }
                }
            })
        }
    } catch (error) {
        console.log(error);

    }
}