#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>
using namespace eosio;

// Replace the contract class name when you start your own project
class participant : public eosio::contract {
  private:
    bool isnewuser( account_name user ) {
      participanttable participantobj(_self, _self);
      // get object by secordary key
      auto participants = participantobj.get_index<N(getbyuser)>();
      auto participant = participants.find(user);

      return participant == participants.end();
    }

    /// @abi table participants
    struct participantstruct {
      uint64_t      prim_key;  // primary key
      account_name  user;      // account name for the user
      std::string   note;      // the note message
      uint64_t      timestamp; // the store the last update block time

      // primary key
      auto primary_key() const { return prim_key; }
      // secondary key: user
      account_name get_by_user() const { return user; }
    };

    // create a multi-index table and support secondary key
    typedef eosio::multi_index< N(participantstruct), participantstruct,
      indexed_by< N(getbyuser), const_mem_fun<participantstruct, account_name, &participantstruct::get_by_user> >
      > participanttable;

  public:
    using contract::contract;

    /// @abi action
    void update( account_name _user, std::string& _note ) {
      // to sign the action with the given account
      require_auth( _user );

      participanttable obj(_self, _self); // code, scope

      // create new / update note depends whether the user account exist or not
      if (isnewuser(_user)) {
        // insert object
        obj.emplace( _self, [&]( auto& address ) {
          address.prim_key    = obj.available_primary_key();
          address.user        = _user;
          address.note        = _note;
          address.timestamp   = now();
        });
      } else {
        // get object by secordary key
        auto participants = obj.get_index<N(getbyuser)>();
        auto &participant = participants.get(_user);
        // update object
        obj.modify( participant, _self, [&]( auto& address ) {
          address.note        = _note;
          address.timestamp   = now();
        });
      }
    }

};

// specify the contract name, and export a public action: update
EOSIO_ABI( participant, (update) )
