import { mutation } from "./_generated/server";
import { v } from 'convex/values';

export const saveNewUser = mutation({
  handler: async(ctx, args: any) => {
    return await ctx.db.insert('users',  args);
  }
});


export const saveNewPost = mutation({
  handler: async(ctx, args: any) => {
    return await ctx.db.insert('posts',  args);
  }
});

export const saveNewProfile = mutation({
  handler: async(ctx, args: any) => {
    return await ctx.db.insert('usersProfiles',  args);
  }
});

export const saveNewPhoto = mutation({
  handler: async(ctx, args: any) => {
    return await ctx.db.insert('photos',  args);
  }
});

export const saveNewVideo = mutation({
  handler: async(ctx, args: any) => {
    return await ctx.db.insert('videos',  args);
  }
});

/*export const updateUser = mutation({
  handler: async(ctx, args: any) => {
    return await ctx.db.replace('users',  args);
  }
}); */

export const updateUser = mutation({
  args: { _id: v.id('users'), email: v.string(), username: v.string() },
  handler: async (ctx, args: any) => {
    const _id: any  = args._id;
    
    await ctx.db.patch(_id, { username: args.username, email: args.email });

    return _id;
    
  },
});

export const updatePost = mutation({
  args: { _id: v.id('posts'), created_by: v.string(), post_title: v.string(), post: v.string(), post_thumbnail: v.string() },
  handler: async (ctx, args) => {
    const _id: any = args._id;
    
    return await ctx.db.patch(_id, { created_by: args.created_by,  post_title: args.post_title, post: args.post, post_thumbnail: args.post_thumbnail });
    
  },
});

export const updatePhoto = mutation({
  args: { _id: v.id('photos'), created_by: v.string(), img_title: v.string(), img_caption: v.string(), img_thumbnail: v.string() },
  handler: async (ctx, args) => {
    const _id: any  = args;
    
    return await ctx.db.patch(_id, { created_by:  args.created_by, img_title: args.img_title, img_caption: args.img_caption, img_thumbnail: args.img_thumbnail });
    
  },
});

export const updateUserProfile = mutation({
  args: { _id: v.optional(v.id('usersProfiles')), 
    created_by: v.string(),
    about: v.string(),
    country: v.string(),
    date_of_birth: v.string(),
    email: v.string(),
    family_name: v.string(),
    given_name: v.string(),
    hobbies: v.string(),
    interests: v.string(),
    name: v.string(),
    phone_number: v.string(),
    profile_thumbnail: v.string(),
    social_image_url: v.optional(v.string()),
    username: v.string(),
  },
  handler: async (ctx, args) => {
    const _id: any = args._id;

    await ctx.db.patch(_id, {
      created_by: args.created_by,
      about: args.about,
      country: args.country,
      date_of_birth: args.date_of_birth,
      email: args.email,
      family_name: args.family_name,
      given_name: args.given_name,
      hobbies: args.hobbies,
      interests: args.interests,
      name: args.name,
      phone_number: args.phone_number,
      profile_thumbnail: args.profile_thumbnail,
      social_image_url: args.social_image_url,
      username: args.username
    });

    return _id;
    
  },
});

export const updateVideo = mutation({
  args: { _idid: v.id('videos'), created_by: v.string(), video_title: v.string(), video_caption: v.string(), video_thumbnail: v.string() },
  handler: async (ctx, args) => {
    const _id: any = args;
    
    await ctx.db.patch(_id, { created_by: args.created_by, video_title: args.video_title, video_caption: args.video_caption, video_thumbnail: args.video_thumbnail });
    
  },
});



/*export const saveSAML2Sessions = mutation({
  handler: async(ctx, args: any) => {
    return await ctx.db.insert('SAML2Sessions',  args);
  }
});*/


export const saveNewAccessToken = mutation({
  args : { access_token:  v.string(), expires_in: v.number(), id_token: v.string(), scope: v.string(), token_type: v.string() },
  handler: async(ctx, args) => {
    return await ctx.db.insert('accessTokens',  args);
  }
});

export const newPhotoLike = mutation({
  handler: async(ctx, args: any) => {
    return await ctx.db.insert('photoLikes',  args);
  }
});

export const newVideoLike = mutation({
  handler: async(ctx, args: any) => {
    return await ctx.db.insert('videoLikes',  args);
  }
});

export const newPostLike = mutation({
  handler: async(ctx, args: any) => {
    return await ctx.db.insert('postLikes',  args);
  }
});