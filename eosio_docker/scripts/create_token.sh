#!/bin/bash
set -eux

#cleos create key > token_keys.txt
#MY_PRIVATE_KEY=$(cat token_keys.txt | head -n 1 | awk '{print $3}')
#MY_PUBLIC_KEY=$(cat token_keys.txt | tail -n 1 | awk '{print $3}')
MY_PRIVATE_KEY="5JANTVJ6A3nDsVDVnru4sRhZnHsS9PaJCU45MyFq2j75ZQGhABy"
MY_PUBLIC_KEY="EOS5GN7DMoegRcwNYLXWHXmUrKydoFroLazDdP63xoXvm8gpb4YfA"
cleos wallet list
#cleos wallet unlock -n eosiomain < eosiomain_wallet_password.txt
cleos create account eosio tokenacct ${MY_PUBLIC_KEY}
cleos wallet import -n eosiomain --private-key ${MY_PRIVATE_KEY}
cleos set contract tokenacct contracts/eosio.token -p tokenacct@active

cleos push action tokenacct create '[ "tokenacct", "1000000000.0000 CCT"]' -p tokenacct
cleos push action tokenacct issue '[ "tokenacct", "10000000.0000 CCT", "memo" ]' -p tokenacct
# cleos push action tokenacct transfer '[ "tokenacct", "personacc", "25.0000 CCT", "memo2" ]' -p tokenacct
