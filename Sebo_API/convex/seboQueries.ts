import { query } from './_generated/server';
import { v } from 'convex/values';


export const getAllUserProfiles = query({
  handler: async (ctx) => {
    return await ctx.db.query('usersProfiles').collect();   
  },
});

export const getAllUsers = query({
  handler: async (ctx) => {
    return await ctx.db.query('users').collect();   
  },
});

export const getAllPosts = query({
  handler: async (ctx) => {
    return await ctx.db.query('posts').collect();   
  },
});

export const getAllPhotos = query({
  handler: async (ctx) => {
    return await ctx.db.query('photos').collect();   
  },
});

export const getAllVideos = query({
  handler: async (ctx) => {
    return await ctx.db.query('videos').collect();   
  },
});

export const getUser = query({ 
  handler: async (ctx, args: any) => {

    return await ctx.db
      .query('users')
  .filter((q) => q.eq(q.field('email'), args.email))
  .collect()
  },
});

export const getUserProfile = query({
  handler: async (ctx, args: any) => {
    return await ctx.db
      .query('usersProfiles')
  .filter((q) => q.eq(q.field('created_by'), args.created_by))
  .collect()
  },
});


export const getUserProfileByEmail = query({
  handler: async (ctx, args: any) => {
    return await ctx.db
      .query('usersProfiles')
  .filter((q) => q.eq(q.field('email'), args.email))
  .collect()
  },
});

export const getUserByEmail = query({
  handler: async (ctx, args: any) => {
    return await ctx.db
      .query('users')
  .filter((q) => q.eq(q.field('email'), args.email))
  .collect()
  },
});


export const getUserProfileById = query({
  handler: async (ctx, args: any) => {
    return await ctx.db.get(args._id)
    
  },
});



export const getPostById = query({
  handler: async (ctx, args: any) => {
    return await ctx.db.get(args.id);
  },
});

export const getVideoById = query({
  handler: async (ctx, args: any) => {
    return await ctx.db.get(args.id);
  },
});

export const getPhotoById = query({
  handler: async (ctx, args: any) => {
    return await ctx.db.get(args.id);
  },
});

export const searchPosts = query({
    handler: async (ctx, args) => {
        return await ctx.db
            .query("posts")
            .withSearchIndex("search_body", (q: any) => q.search("post", args.params))
            .filter((q: any) => q.gt(q.field("_creationTime", Date.now() - 10 * 60000)))
            .take(10);
    }
});

export const checkIfPhotoIsLiked = query({
  handler: async (ctx, args: any) => {
    return await ctx.db
      .query('photoLikes')
  .filter((q) => q.eq(q.field('like_id'), args.like_id))
  .collect()
  },
});

export const countPhotoLikes = query({
  handler: async (ctx, args: any) => {
    return await ctx.db
      .query('photoLikes')
  .filter((q) => q.eq(q.field('photo_id'), args.photo_id))
  .collect()
  },
});


export const checkIfVideoIsLiked = query({
  handler: async (ctx, args: any) => {
    return await ctx.db
      .query('videoLikes')
  .filter((q) => q.eq(q.field('like_id'), args.like_id))
  .collect()
  },
});

export const countVideoLikes = query({
  handler: async (ctx, args: any) => {
    return await ctx.db
      .query('videoLikes')
  .filter((q) => q.eq(q.field('video_id'), args.video_id))
  .collect()
  },
});

export const checkIfPostIsLiked = query({
  handler: async (ctx, args: any) => {
    return await ctx.db
      .query('postLikes')
  .filter((q) => q.eq(q.field('like_id'), args.like_id))
  .collect()
  },
});

export const countPostLikes = query({
  handler: async (ctx, args: any) => {
    return await ctx.db
      .query('postLikes')
  .filter((q) => q.eq(q.field('post_id'), args.post_id))
  .collect()
  },
});