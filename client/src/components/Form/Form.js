import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper } from '@material-ui/core';

import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
    const postObjectTemplate = {
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: '',
    }
    const [postData, setPostData] = useState(postObjectTemplate)
    const post = useSelector((state) => currentId ? state.posts.find(post => post._id === currentId) : null);
    //useSelector(state => console.log(state.posts));
    console.log("post",post);
    console.log("currentId",currentId);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
        console.log("postData", postData);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            console.log("dispatching an update")
            dispatch(updatePost(currentId, postData));
        } else {
            console.log("dispatching a creation")
            dispatch(createPost(postData));
        }
    }

    const clear = () => {
        setCurrentId(null);
        setPostData(postObjectTemplate);
    }

    return (
        <Paper className={classes.paper}>
            <form
                autoComplete="off"
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
            >
                <Typography variant="h6">{currentId ? 'Edit' : 'Create & share'} a memory</Typography>
                <TextField
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    value={postData.creator || ''}
                    fullWidth
                    onChange={(e) => {
                        setPostData({ ...postData, creator: e.target.value })
                    }}
                />
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    value={postData.title || ''}
                    fullWidth
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    value={postData.message || ''}
                    fullWidth
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    value={postData.tags || ''}
                    fullWidth
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    >
                    </FileBase>
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    Submit
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    )
}

export default Form;
