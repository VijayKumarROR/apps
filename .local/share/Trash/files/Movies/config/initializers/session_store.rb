# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_Movies_session',
  :secret      => '46a0b0afccc5ec0455041f8336ce08f474625bcb95050e00cec9a443cc7270e4b98b18918d74645ce48aa6cbb0a02f1ec23cbfb8e2cc4224068aa9b71c8fe15f'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
