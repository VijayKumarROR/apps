# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_timesheet_session',
  :secret      => '7a23e1c898b82759cfa4e7d5ddc8881597f613a820101df927f641a657b507d639616034ff92ed29031b6c6ed7f0f73f6410ec70ece2db869d86f09e5387e773'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
