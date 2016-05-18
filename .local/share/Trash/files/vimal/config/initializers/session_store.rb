# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_vimal_session',
  :secret      => '8f9343961d1dc8cc4f38cdd32153e03d2d83aa14dd0546dc7250cdfac88eb40e5ce6cacb425bee5b8a549569a00ea372a08e8804105327867ce3f9440527e663'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
