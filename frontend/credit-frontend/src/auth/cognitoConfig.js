export const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_ck8gtbWk0",
  client_id: "2ltbrgcb3jg7velqf9aup1dkfv",
  redirect_uri: window.location.origin,
  post_logout_redirect_uri: window.location.origin,
  response_type: "code",
  scope: "openid email"
}