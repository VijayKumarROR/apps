# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_vijay_session',
  :secret      => 'b1bc3c511a683a456f8a27bca374a02448ca630c5fe0a8a0ab7d19c7236c050019b5bdb8c0cbdc204d213961eba7a9d2b9a7196f31c5c5e132aabb9a913cdf3f'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
