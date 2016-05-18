# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_fb_session',
  :secret      => '0807065d5e97da1f20acda5afbc92252df7e190ee8fb45dcfe9fc77d1c4ac6e04f92eb19623c5582393dc39a96f1b542045413aebeeeb726a67912d6ed07b83f'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
