# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_Blog_session',
  :secret      => '642a38b3667b6a061e6e5ceed85773b5cb5b4690c1c2f417c24bf4a7151e211641eeacf153dbaaebfc4ec9f1ff76df4afe9705c100b7888940869fdb8345c3a5'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
