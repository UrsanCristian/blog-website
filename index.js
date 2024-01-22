import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

var currentDate = new Date();  

var posts = [{id: 1, title: "Welcome To Your Blog Website!", date: currentDate ,content: "🎉 Step into the realm of ideas and inspiration! 🌐 We're thrilled to extend a warm welcome to you, the newest member of our dynamic blogging community. Here, words weave tales, thoughts find expression, and creativity knows no bounds. Whether you're here to share your unique perspective or to discover the myriad voices that call this platform home, you're in for an enriching experience. From thought-provoking insights to light-hearted anecdotes, our bloggers pour their hearts into each post, creating a mosaic of diverse narratives. So, kick back, wander through the virtual pages, and immerse yourself in the fascinating stories that await. Together, let's embrace the magic of storytelling and make this digital space a hub for connection, discovery, and endless inspiration. Welcome aboard! 🚀📚"}];

app.get("/", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/newpost", (req, res) => {
    res.render("newpost.ejs")
});

app.post("/create", (req, res) => {
    const { title, content} = req.body;
    currentDate = new Date();
    const newPost = {id: posts.length + 1, title, date: currentDate, content};
    posts.push(newPost);
    res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(post => post.id === postId);
    if (post) {
        res.render("editpost.ejs", { post });
    }   else {
        res.status(404).send('Post Not Found. :(');
    }
});

app.post("/update/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const postNum = posts.findIndex(post => post.id === postId);
    if (postNum !== -1) {
        posts[postNum].title = req.body.title;
        posts[postNum].content = req.body.content;
        res.redirect('/');

    }   else {
        res.status(404).send('Post Not Found. :(');
    }
});

app.get("/delete/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    posts = posts.filter(post => post.id !== postId);
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});