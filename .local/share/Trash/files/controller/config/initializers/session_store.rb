# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_controller_session',
  :secret      => 'cfe09e605ced1534fefec28e7d5312f53c1f6f5f24787d97a4cb8fca893a4f092bf2bb1dec944d1f7063ea8f0d3761eb084801fdc4c0fb036cbdc01aefa0c143'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
