# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_d_session',
  :secret      => '1f428711a996b8b4f2485840808b31496ffcd529384a78685eb3b2d81360c96c9816d53f6272895a0a2e7cc9c45fbce418a28cc4cd2ce16e1712c5c6030c12df'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
