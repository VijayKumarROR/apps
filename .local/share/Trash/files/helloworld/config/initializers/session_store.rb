# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_helloworld_session',
  :secret      => 'cf84675786bebf1dcbb1a00dfe8ac80b76ee72722f09d51af488fd73aef1ed1e6a0bf05f1a7d062e5170c06e1ab4896047fd08569f91c2f361d611ccdecde9a3'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
