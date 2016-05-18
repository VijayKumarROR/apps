# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_Movies_session',
  :secret      => 'bfcac7224b51c309baa3c398966997a72babdbc2764c8fecf475a01125adf32cee3a3a5d2e166c2328537bd1d2f6743a3b01e8290d88bcbbbdca8aa40d1505a9'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
