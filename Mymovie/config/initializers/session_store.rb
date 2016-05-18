# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_Mymovie_session',
  :secret      => '68840e5c4bc3aab7c4afff3f6897459e7cd32415f6a46a0c795563dafd5708ed19878f2908140ea3a69f31ddacacfb409219ac2b97c0e7e1e4b7fb1799f241dd'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
