const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const requireLogin=require('../middleware/requireLogin')
const Post = mongoose.model('Post')
const User = mongoose.model('User')


router.delete("/deluser", requireLogin, (req, res) => {
    if (!req.user) {
      return res.status(401).send("Unauthorized")
    }
    Post.deleteMany({ postedBy: req.user._id })
      .then(() => {
        return User.deleteOne({ _id: req.user._id }).exec()
      })
      .then(() => {
        res.json("Your id has been deleted")
      })
      .catch((err) =>{
        console.error(err.message)
        res.status(500).send("Server error")
  })
})


router.delete('/delpost/:postId', requireLogin, (req, res) => {
    const postId = req.params.postId
    Post.countDocuments({postedBy: req.user._id})
      .then((count) => {
        if (count === 0) {
          return res.status(401).send("You don't have any posts yet")
        }
        Post.findOne({_id: postId, postedBy: req.user._id})
          .then((post) => {
            if (!post) {
              return res.status(401).send("Post not found")
            }
            Post.deleteOne({_id: postId})
              .then(() => {
                res.json({ redirect: '/posts' })
              })
              .catch((err) => {
                console.log(err)
                res.status(401).send("Token is not correct")
              })
          })
          .catch((err) => {
            console.log(err)
            res.status(401).send("Post not found")
          })
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send("Server error")
      })
  })
// =================================================================
  

//   router.delete("/deluser", requireLogin,(req,res)=>{
//     if (!req.user) {
//       return res.status(401).send("Unauthorized");
//     }
//     User.deleteOne({_id : req.user._id}).exec()
//       .then(() => {
//         res.json("Your id has been deleted");
//         // res.redirect("/login");
//       })
//       .catch((err) => {
//         console.error(err.message);
//         res.status(500).send("Server error");
//       });
//   });
// ===================================================================


//add a like to the database for that specific user and post
router.get('/users', (req, res) => {
    User.find()
    .select('_id name email')
      .then(users => {
        res.json(users);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send("Server error");
      });
  });

router.get( '/myposts', requireLogin, (req, res) => {
    Post.find({postedBy: req.user._id})
    .populate( 'postedBy', '_id name')
    .then((myposts)=> {
        res.json({myposts})
    })
    .catch(err=>{
        console.log(err)
    })
        // .select('_id postedBy createdAt updatedAt section title content images tags comments
})

router.get( '/posts', (req, res) => {
    Post.find()
    .populate("postedBy", ["name","_id"]) // populate the "postedBy" field with data from the User collection
    .then((posts)=>res.json(posts))
    .catch((err)=>{console.log(err);res.status(500).send("Server error")})
});

router.post('/createpost',requireLogin,(req,res)=>{
    const {title,body}=req.body
    if(!title || !body) 
    return res.status(400).json({msg:"Please enter all fields"})
// using req.user we can access the details of user
// console.log(req.user.name)
// res.send(req.user.name+" Welcome to our app")
req.user.password=undefined
const post=new Post({
    title,
    body,
    postedBy:req.user
});
post.save().then(result=>{
    res.json({post:result})
}).catch(err=>{
    console.error(err.message);
    res.send("There was an error saving your post")
})
})


module.exports = router