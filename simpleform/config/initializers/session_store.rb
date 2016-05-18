# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_simpleform_session',
  :secret      => '1a38f71dacaced754cfc7460e3fd4d033656382b80dc4fe12c116f1468a14cbd2f6f9d01d83fac55d49a0799fe3064618e11ff1271fabee824b69c25097422a9'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
