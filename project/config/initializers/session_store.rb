# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_project_session',
  :secret      => '67a6701cb786bb08bd0012554840ec5a7fbb74aae7c5575ec0ba6df37bd5ba541f92e9b48f30213b0401cccfb6c453e1a76d869324daef29633948a802273ade'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
