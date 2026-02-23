import express from "express"

const router = express()



router.get("/signup", (req, res) => {
    res.send("signup api ")
});


router.get("/login", (req, res) => {
    res.send("Login api ")
});

router.get("/logout", (req, res) => {
    res.send("Logout api ")
});

export default router