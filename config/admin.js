module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', 'aLfAwyqHL0iP6loxFZkb3w=='),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'D75kIV5N1o4UQulq4V4Wow=='),
  },
});