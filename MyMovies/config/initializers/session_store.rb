# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_MyMovies_session',
  :secret      => '9b6cde18f903db5658efb71ca5efe468b6c2ace0b74debc6d6295804a637ce49296dea1d450e01b3e37f6e7667b4327462bd0bedf4e86645a805fc65890b0dab'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
