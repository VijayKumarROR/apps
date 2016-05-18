# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_fb_session',
  :secret      => '528368f4c71d252934b94fddab0d5ac22fb48e3121acbae485452d0a33fa836a26124d1e7e9ebaff1647515f693c0a9a5f24b583a55f5209d309424721b40ed1'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
