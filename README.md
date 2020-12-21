![alt](https://i.imgur.com/wroOsFp.png)

## Info

#### Social C.R.U.D is a simple... social C.R.U.D application built upon a MERN stack. Users can Create, Read, Update & Delete posts. Node.js & Express are powering the back, while React & Material UI takes care of the front.

CRUD operations are operated over REST API routes :

```js
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likepost/', likePost)
```

Data is stored in a proper Mongo DB instance.

![alt](https://i.imgur.com/JFkgOwp.png)

CSS "dark theme" is fully custom.

## Building

1. Open a terminal and git clone the project with :
```console
foo@bar:~$ git clone https://github.com/jocarol/social-crud && cd social-crud
```
2. Navigate to the server directory and install the node modules with 'yarn'.
3. Start the server with 'yarn start'.
4. Navigate to the client directory and install the node modules with 'yarn'.
5. Start the client with 'yarn start'.
