# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_vi_session',
  :secret      => '73f7837bb41f7c1c0b306c59ab15bd41b5bc3de6a12fec37bee4252ca0d08ff0d42978e3fb4d06bae153577602f5f310bfcc570f687057abc1de38d75878a113'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
