
import { httpAction } from './_generated/server';
import { api } from './_generated/api';

export const addNewPost = httpAction(async (ctx, request) => {  
    let response; 
    await request.formData().then(async (data) => {
        
        const storageId = await ctx.storage.store(data.get('attachment') as Blob);
        const storageURL = await ctx.storage.getUrl(storageId);

        const values = {
            created_by: data.get('created_by') || '',
            post_title: data.get('post_title'),
            post: data.get('post'),
            post_thumbnail: storageURL
        } 

       response = await ctx.runMutation(api.seboMutations.saveNewPost, values);   
        
    });

    return new Response(JSON.stringify(response),  {
        headers: {
          'content-type': 'application/json',
        },
        status: 200,
      });
});


export const getPosts = httpAction(async(ctx)=> {
  const response = await ctx.runQuery(api.seboQueries.getAllPosts);

  return new Response(JSON.stringify(response), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });

});

export const editPost = httpAction(async (ctx, request) => {
  let response;
  await request.formData().then(async (data) => {

    const storageId = await ctx.storage.store(data.get('attachment') as Blob);
    const storageURL = await ctx.storage.getUrl(storageId);    

    const values: any = {
      created_by: data.get('created_by') || '',
      id: data.get('id') || '',
      post_title: data.get('post_title') || '',
      post: data.get('post') || '',
      post_thumbnail: storageURL
    }

    response = await ctx.runMutation(api.seboMutations.updatePost, values);

  });

  return new Response(JSON.stringify(response), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});

export const getPostById = httpAction(async(ctx, request) => {
  const values = await request.json();
  
    const response = await ctx.runQuery(api.seboQueries.getPostById, values) 
        

    return new Response(JSON.stringify(response),  {
      headers: {
        'content-type': 'application/json',
      },
      status: 200,
    }); 
});


export const addNewPhoto = httpAction(async (ctx, request) => {
  let response;
  await request.formData().then(async (data) => {

    const storageId = await ctx.storage.store(data.get('attachment') as Blob);
    const storageURL = await ctx.storage.getUrl(storageId);

    const values = {
      created_by: data.get('created_by') || '',
      img_title: data.get('img_title'),
      img_caption: data.get('img_caption'),
      img_thumbnail: storageURL
    }

    response = await ctx.runMutation(api.seboMutations.saveNewPhoto, values);

  });

  return new Response(JSON.stringify(response), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});

export const editPhoto = httpAction(async (ctx, request) => {
  let response;
  await request.formData().then(async (data) => {

    const storageId = await ctx.storage.store(data.get('attachment') as Blob);
    const storageURL = await ctx.storage.getUrl(storageId);

    const values: any = {
      created_by: data.get('created_by') || '',
      id: data.get('id') || '',
      img_title: data.get('img_title') || '',
      img_caption: data.get('img_caption') || '',
      img_thumbnail: storageURL
    }

    response = await ctx.runMutation(api.seboMutations.updatePhoto, values);

  });

  return new Response(JSON.stringify(response), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});


export const addNewProfile = httpAction(async (ctx, request) => {
  let response;
  await request.formData().then(async (data) => {

    if (data.get('attachment')) {
      const storageId = await ctx.storage.store(data.get('attachment') as Blob);
      const storageURL = await ctx.storage.getUrl(storageId);

      const values: any = {
        email: data.get('email') || '',
      }

      let result = await ctx.runQuery(api.seboQueries.getUserProfileByEmail, values); 

      if (await ctx.runQuery(api.seboQueries.getUserByEmail, values) != null || undefined || []) {
        const values: any = {
          created_by: data.get('created_by') || '',
          username: data.get('nickname') || '',
          family_name: data.get('family_name') || '',
          given_name: data.get('given_name') || '',
          name: data.get('name') || '',
          email: data.get('email') || '',
          date_of_birth: data.get('date_of_birth') || '',
          country: data.get('country') || '',
          phone_number: data.get('phone_number') || '',
          about: data.get('about') || '',
          hobbies: data.get('hobbies') || '',
          interests: data.get('interests') || '',
          picture: data.get('picture_url') || '',
          profile_thumbnail: storageURL,
          _id: result[0]._id
        }


        response = await ctx.runMutation(api.seboMutations.updateUserProfile, values);

      } else {
        response = await ctx.runMutation(api.seboMutations.saveNewProfile, values );

      }

    } else {      

      const values: any = {
        email: data.get('email') || '',
      }

      let result = await ctx.runQuery(api.seboQueries.getUserProfileByEmail, values);      

      if (await ctx.runQuery(api.seboQueries.getUserProfileByEmail, values) != null || undefined || []) {
 
        const values: any = {
          created_by: data.get('created_by') || '',
          username: data.get('nickname') || '',
          family_name: data.get('family_name') || '',
          given_name: data.get('given_name') || '',
          name: data.get('name') || '',
          email: data.get('email') || '',
          date_of_birth: data.get('date_of_birth') || '',
          country: data.get('country') || '',
          phone_number: data.get('phone_number') || '',
          about: data.get('about') || '',
          hobbies: data.get('hobbies') || '',
          interests: data.get('interests') || '',
          social_image_url: data.get('picture_url') || '',
          profile_thumbnail: '',
          _id: result[0]._id
        }

        response = await ctx.runMutation(api.seboMutations.updateUserProfile, values);

      } else {
        
        response = await ctx.runMutation(api.seboMutations.saveNewProfile, values );

      }

    }

  });

  return new Response(JSON.stringify(response), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});


export const editUserProfile = httpAction(async (ctx, request) => {
  let response;
  await request.formData().then(async (data) => {

    if (data.get('attachment')) {
      const storageId = await ctx.storage.store(data.get('attachment') as Blob);
      const storageURL = await ctx.storage.getUrl(storageId);

      const values: any = {
        email: data.get('email') || '',
      }

      let result = await ctx.runQuery(api.seboQueries.getUserProfileByEmail, values);     

      if (await ctx.runQuery(api.seboQueries.getUserByEmail, values) != null || undefined || []) {

        const values: any = {
          created_by: data.get('created_by') || '',
          username: data.get('nickname') || '',
          family_name: data.get('family_name') || '',
          given_name: data.get('given_name') || '',
          name: data.get('name') || '',
          email: data.get('email') || '',
          date_of_birth: data.get('date_of_birth') || '',
          country: data.get('country') || '',
          phone_number: data.get('phone_number') || '',
          about: data.get('about') || '',
          hobbies: data.get('hobbies') || '',
          interests: data.get('interests') || '',
          social_image_url: data.get('picture_url') || '',
          profile_thumbnail: storageURL,
          _id: result[0]._id,
        }
        response = await ctx.runMutation(api.seboMutations.updateUserProfile, values);

      } else {

        response = await ctx.runMutation(api.seboMutations.saveNewProfile, values );

      }

    

    } else {

      const values: any = {
        email: data.get('email') || '',
 
      }

      if (await ctx.runQuery(api.seboQueries.getUserByEmail, values) != null || undefined || []) {

        const values: any = {
          created_by: data.get('created_by') || '',
          username: data.get('nickname') || '',
          family_name: data.get('family_name') || '',
          given_name: data.get('given_name') || '',
          name: data.get('name') || '',
          email: data.get('email') || '',
          date_of_birth: data.get('date_of_birth') || '',
          country: data.get('country') || '',
          phone_number: data.get('phone_number') || '',
          about: data.get('about') || '',
          hobbies: data.get('hobbies') || '',
          interests: data.get('interests') || '',
          social_image_url: data.get('picture_url') || '',
          profile_thumbnail: '',
          _id: data.get('_id') || ''

        }

        response = await ctx.runMutation(api.seboMutations.updateUserProfile, values);

      } else {
        response = await ctx.runMutation(api.seboMutations.saveNewProfile, values );

      }
    }

  });

  return new Response(JSON.stringify(response), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});


export const addNewVideo = httpAction(async (ctx, request) => {
  let response;
  await request.formData().then(async (data) => {

    const storageId = await ctx.storage.store(data.get('attachment') as Blob);
    const storageURL = await ctx.storage.getUrl(storageId);

    const dat = {
      created_by: data.get('created_by') || '',
      video_title: data.get('video_title'),
      video_caption: data.get('video_caption'),
      video_thumbnail: storageURL
    }

    response = await ctx.runMutation(api.seboMutations.saveNewVideo, dat);

  });

  return new Response(JSON.stringify(response), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});

export const editVideo = httpAction(async (ctx, request) => {
  let response;
  await request.formData().then(async (data) => {

    const storageId = await ctx.storage.store(data.get('attachment') as Blob);
    const storageURL = await ctx.storage.getUrl(storageId);

    const values: any = {
      created_by: data.get('created_by') || '',
      id: data.get('id') || '',
      video_title: data.get('video_title') || '',
      video_caption: data.get('video_caption') || '',
      video_thumbnail: storageURL
    }

    response = await ctx.runMutation(api.seboMutations.updateVideo, values);

  });

  return new Response(JSON.stringify(response), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});


export const getUserProfiles = httpAction(async(ctx) => {
  const profiles =await ctx.runQuery(api.seboQueries.getAllUserProfiles);

  return new Response(JSON.stringify(profiles), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});

export const editUser = httpAction(async(ctx, request) => {
  const values = await request.json();

  let response;

  if (await ctx.runQuery(api.seboQueries.getUserByEmail, values) != null || undefined || []) {
    response = await ctx.runMutation(api.seboMutations.updateUser, values);

  } else {
    response = await ctx.runMutation(api.seboMutations.saveNewUser, values );

  }


  return new Response(JSON.stringify(response), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});



/*export const saveSAML2Sessions = httpAction(async(ctx, request) => {
  const response = await ctx.runMutation(api.seboMutations.saveSAML2Sessions, JSON.stringify(await request.json()));

  return new Response(JSON.stringify(response), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});*/


export const addNewUser = httpAction(async (ctx, request) => {   
  const values = await request.json();

  let response;

  if (await ctx.runQuery(api.seboQueries.getUserByEmail, values) != null || undefined || []) {
    response = await ctx.runMutation(api.seboMutations.updateUser, values);

  } else {
    response = await ctx.runMutation(api.seboMutations.saveNewUser, values );

  }
        

  return new Response(JSON.stringify(response),  {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});

export const getUser = httpAction(async(ctx, request) => {
  const values = await request.json();

    const response = await ctx.runQuery(api.seboQueries.getUser, values) 
        

    return new Response(JSON.stringify(response),  {
      headers: {
        'content-type': 'application/json',
      },
      status: 200,
    });
});

export const getUserProfile = httpAction(async(ctx, request) => {
  const values = await request.json();

    const response = await ctx.runQuery(api.seboQueries.getUserProfile, values) 
        

    return new Response(JSON.stringify(response),  {
      headers: {
        'content-type': 'application/json',
      },
      status: 200,
    });
});

export const getUserProfileById = httpAction(async(ctx, request) => {
  const values = await request.json();

    const response = await ctx.runQuery(api.seboQueries.getUserProfileById, values) 
        

    return new Response(JSON.stringify(response),  {
      headers: {
        'content-type': 'application/json',
      },
      status: 200,
    });
});

export const getVideoById = httpAction(async(ctx, request) => {
  const values = await request.json();

    const response = await ctx.runQuery(api.seboQueries.getVideoById, values) 
        

    return new Response(JSON.stringify(response),  {
      headers: {
        'content-type': 'application/json',
      },
      status: 200,
    });
});

export const getPhotoById = httpAction(async(ctx, request) => {
  const values = await request.json();

    const response = await ctx.runQuery(api.seboQueries.getPhotoById, values) 
        

    return new Response(JSON.stringify(response),  {
      headers: {
        'content-type': 'application/json',
      },
      status: 200,
    });
});

export const addNewAccessToken = httpAction(async (ctx, request) => {
  const params = await request.json();

  const response = await ctx.runMutation(api.seboMutations.saveNewAccessToken, params);

  return new Response(JSON.stringify(response), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });

});

export const getImage = httpAction(async (ctx, request) => {
    const { searchParams } = new URL(request.url);
    // This storageId param should be an Id<"_storage">
    console.log(searchParams);


    const storageId = searchParams.get("storageId")!;
    const blob = await ctx.storage.get(storageId);
    if (blob === null) {
      return new Response("Image not found", {
        status: 404,
      });
    }
    return new Response(blob);
  
});

export const search = httpAction(async (ctx, request) => {
  const params = await request.json();

  const response = await ctx.runQuery(api.seboQueries.searchPosts, params)
  return new Response(JSON.stringify(response), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
});

export const getPhotos = httpAction(async(ctx)=> {
  const response = await ctx.runQuery(api.seboQueries.getAllPhotos);

  return new Response(JSON.stringify(response), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });

});

export const getVideos = httpAction(async(ctx)=> {
  const response = await ctx.runQuery(api.seboQueries.getAllVideos);

  return new Response(JSON.stringify(response), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });

});

export const photoLike = httpAction(async(ctx, request)=> {
  const values = await request.json();
  let response;

  const check = await ctx.runQuery(api.seboQueries.checkIfPhotoIsLiked, values);

  if (check.length <= 0) {
    response = await ctx.runMutation(api.seboMutations.newPhotoLike, values);
  }

  return new Response(JSON.stringify(response), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });

});


export const countPhotoLikes = httpAction(async(ctx, request)=> {
  const values = await request.json();

  const result = await ctx.runQuery(api.seboQueries.countPhotoLikes, values);


  return new Response(JSON.stringify(result.length), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });

});

export const videoLike = httpAction(async(ctx, request)=> {
  const values = await request.json();
  let response;

  const check = await ctx.runQuery(api.seboQueries.checkIfVideoIsLiked, values);

  if (check.length <= 0) {
    response = await ctx.runMutation(api.seboMutations.newVideoLike, values);
  }

  return new Response(JSON.stringify(response), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });

});


export const countVideoLikes = httpAction(async(ctx, request)=> {
  const values = await request.json();

  const result = await ctx.runQuery(api.seboQueries.countVideoLikes, values);


  return new Response(JSON.stringify(result.length), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });

});

export const postLike = httpAction(async(ctx, request)=> {
  const values = await request.json();
  let response;

  const check = await ctx.runQuery(api.seboQueries.checkIfPostIsLiked, values);

  if (check.length <= 0) {
    response = await ctx.runMutation(api.seboMutations.newPostLike, values);
  }

  return new Response(JSON.stringify(response), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });

});


export const countPostLikes = httpAction(async(ctx, request)=> {
  const values = await request.json();

  const result = await ctx.runQuery(api.seboQueries.countPostLikes, values);
  

  return new Response(JSON.stringify(result.length), {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });

});