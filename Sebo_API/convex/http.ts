import { httpRouter } from 'convex/server';

import {
    addNewPost,
    addNewPhoto,
    addNewProfile,
    addNewVideo,
    getUserProfiles,
    addNewUser,
    getUser,
    getPhotoById,
    getUserProfile,
    getVideoById,
    editUser,
    editPhoto,
    editPost,
    editUserProfile,
    editVideo,
    getPosts,
    getImage,
    search,
    getPostById,
    getUserProfileById,
    getPhotos,
    getVideos, 
    photoLike,
    countPhotoLikes,
    postLike,
    countPostLikes,
    videoLike,
    countVideoLikes
       } from './sebo';


const http = httpRouter();


http.route({
  path: '/api/post/new',
  method: 'POST',
  handler: addNewPost,
});


http.route({
  path: '/api/video/new',
  method: 'POST',
  handler: addNewVideo,
});

http.route({
  path: '/api/photo/new',
  method: 'POST',
  handler: addNewPhoto,
});

http.route({
  path: '/api/user/profile/new',
  method: 'POST',
  handler: addNewProfile,
});

http.route({
  path: '/api/users/profiles',
  method: 'GET',
  handler: getUserProfiles
});

http.route({
  path: '/api/user/new',
  method: 'POST',
  handler: addNewUser
});

http.route({
  path: '/api/user',
  method: 'POST',
  handler: getUser
});

http.route({
  path: '/api/user/profile',
  method: 'POST',
  handler: getUserProfile
});

http.route({
  path: '/api/user/profile/id',
  method: 'POST',
  handler: getUserProfileById
});

http.route({
  path: '/api/photo/id',
  method: 'POST',
  handler: getPhotoById
});

http.route({
  path: '/api/video/id',
  method: 'POST',
  handler: getVideoById
});

http.route({
  path: '/api/user/update',
  method: 'PUT',
  handler: editUser
});

http.route({
  path: '/api/post/update',
  method: 'PUT',
  handler: editPost
});

http.route({
  path: '/api/photo/update',
  method: 'PUT',
  handler: editPhoto
});

http.route({
  path: '/api/user/profile/update',
  method: 'PUT',
  handler: editUserProfile
});

http.route({
  path: '/api/video/update',
  method: 'PUT',
  handler: editVideo
});

http.route({
  path: '/api/posts',
  method: 'GET',
  handler: getPosts
});

http.route({
  path: '/api/image',
  method: 'GET',
  handler: getImage
});


http.route({
  path: '/api/search',
  method: 'POST',
  handler: search
});

http.route({
  path: '/api/post/id',
  method: 'POST',
  handler: getPostById
});

http.route({
  path: '/api/photos',
  method: 'GET',
  handler: getPhotos
});

http.route({
  path: '/api/videos',
  method: 'GET',
  handler: getVideos
});

http.route({
  path: '/api/photo/like',
  method: 'POST',
  handler: photoLike
});

http.route({
  path: '/api/photo/likes/count',
  method: 'POST',
  handler: countPhotoLikes
});


http.route({
  path: '/api/post/like',
  method: 'POST',
  handler: postLike
});

http.route({
  path: '/api/post/likes/count',
  method: 'POST',
  handler: countPostLikes
});

http.route({
  path: '/api/video/like',
  method: 'POST',
  handler: videoLike
});

http.route({
  path: '/api/video/likes/count',
  method: 'POST',
  handler: countVideoLikes
});

// Convex expects the router to be the default export of `convex/http.js`.
export default http;

