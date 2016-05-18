# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_version_session',
  :secret      => '5d30ea37ebabf556e91d6865dfb6488634351322e27940eccfe95db0e2b453045f86448513a84f56ca988e4db79d1c0d03069e7e9b9b5a4e5b3d4ddbc3581799'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
