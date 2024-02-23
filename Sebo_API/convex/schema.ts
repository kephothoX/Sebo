import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({

    usersProfiles: defineTable({
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
      social_image_url: v.string(),
      username: v.string(),
    }),
  

  users: defineTable({
    email: v.string(),
    username: v.string(),
  }),

  posts: defineTable({
    created_by: v.string(),
    post_title: v.string(),
    post: v.string(),
    post_thumbnail: v.string()
  }).searchIndex('search_body', {
    searchField: 'post',
    filterFields: ['post'],
  }),

  photos: defineTable({
    created_by: v.string(),
    img_title: v.string(),
    img_caption: v.string(),
    img_thumbnail: v.string(),
  }),

  videos: defineTable({
    created_by: v.string(),
    video_title: v.string(),
    video_caption: v.string(),
    video_thumbnail: v.string()
  }),

  photoLikes: defineTable({
    created_by: v.string(),
    like_id: v.string(),
    photo_id: v.string(),
  }),

  videoLikes: defineTable({
    created_by: v.string(),
    like_id: v.string(),
    video_id: v.string(),
  }),

  postLikes: defineTable({
    created_by: v.string(),
    like_id: v.string(),
    post_id: v.string(),
  }),

  /*accessTokens.defineTable({
    access_token:  v.string(), 
    expires_in: v.number(), 
    id_token: v.string(), 
    scope: v.string(), 
    token_type: v.string() 
  })*/

  
});