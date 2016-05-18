# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_movie_session',
  :secret      => '186f842722ec7f2b63ba95ba7a7ae322c1e1e00d555f1ff3a832c9376e602383a581349db4840b4db34cf26cb08ed1f4a559fb4c878f0a4e3a1e528abb26f5ba'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
