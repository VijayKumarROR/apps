# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_timesheet_session',
  :secret      => 'f35831709207d4fb83c4d26acb663c84858c2c32a0f525c47440d55ac8a1ac1ccb67f68950077a4802b5941440c28424614e55cdabc6ac4e87de689cfd16fc1c'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
