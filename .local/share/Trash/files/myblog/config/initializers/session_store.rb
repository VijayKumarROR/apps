# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_myblog_session',
  :secret      => 'f500c4a6b5fe970ca1bb8119c35c49ab68d090fa19ca743e7dbdf0da8b002686dda5e12c843cf3659de1c227094be3d1dc51cbe289ea53c046d22a90c8cea5b1'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
