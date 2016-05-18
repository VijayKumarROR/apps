# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_model_session',
  :secret      => '5be56dc9c85ebd1d56e46f98b5615ed6d89b36063562d83bab38cf957d80d12a57b6a2788526942a9a4334e2e2558350ea8217bb0c0c6086a7c2e4afe86bb45a'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
