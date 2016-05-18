# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_workspace_session',
  :secret      => 'c374eeb89715772623056b5fa51b847cdb9470ce0c8628476c8e588e34ea9da32acf82272ac82106d8720f20f6a35efc214013c4b3a57c23ed50b643ea27bf8b'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
