# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_list_session',
  :secret      => '137abd699abb1927b96ab95cdad0c747bb9923789f5ec299cc27ab1dd71624edefe946765072de4d40cf6cc3b8834f4e00bb6a74a8e322ab44797fb2213bd2fc'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
