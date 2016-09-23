# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_template_session',
  :secret      => 'a2d3071356d5f2ecbf0f719a73ed775ae704bac187fe47d84cd2cbb9ed27537ccb6474279ffcb513debcf95105a5fb223cf8f768050074b3a0babff8bb34aaa3'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
