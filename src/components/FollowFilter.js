//create an array with people followed, then each iteration will check author, and if match between names in followed and random global, then value returned for follow is either true or false, deciding ternary follow unfollow


GET /api/v1/social/posts/following

This endpoint returns all posts from profiles that the authenticated user is following.

The data returned is similar to the all entries endpoint and accepts the same optional query flags.



POST /api/v1/social/posts

This endpoint allows for the creation of a new post. The title property is required. The request body contains:

{
  "title": "string", // Required
  "body": "string", // Optional
  "tags": ["string"], // Optional
  "media": "https://url.com/image.jpg" // Optional
}




input all to createImageBitmap, sum up  shorten, it is object []