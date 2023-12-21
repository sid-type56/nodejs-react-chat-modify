const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const username = req.body.username;
    console.log("username ", username);
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {
                username: username,
                secret: username

            },
            {
                headers: { "private-key": "cae18b6f-9574-4e4e-93af-2c9b937b30e9" }
            }

        );
        return res.status(r.status).json(r.data);
    } catch (error) {
        return res.status(error.response.status).json(error.response.data)
    }

    // return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);