# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_MyMovies_session',
  :secret      => 'c27588d6bd5279259482d62172a9822d3acc9d3bd090a4e271e0db8f353aec7f2d0d41aaeff5e324a07f60b49748e24e8a73494aa4d5f7a4db6ccfdda3cc0c53'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
