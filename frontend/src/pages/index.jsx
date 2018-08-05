import React, { Component } from 'react';
import Eos from 'eosjs'; // https://github.com/EOSIO/eosjs
import CountUp from 'react-countup/build';

// material-ui dependencies
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ClaimList from './ClaimList';
import Companies from './Companies';
import OvershootDay from './OvershootDay';
import CarbonCarrots from '../images/carbonCarrots.png';

// NEVER store private keys in any source code in your real life development
// This is for demo purposes only!
const accounts = [
  {"name":"useraaaaaaaa", "privateKey":"5K7mtrinTFrVTduSxizUc5hjXJEtTjVTsqSHeBHes1Viep86FP5", "publicKey":"EOS6kYgMTCh1iqpq9XGNQbEi8Q6k5GujefN9DSs55dcjVyFAq7B6b"},
  {"name":"useraaaaaaab", "privateKey":"5KLqT1UFxVnKRWkjvhFur4sECrPhciuUqsYRihc1p9rxhXQMZBg", "publicKey":"EOS78RuuHNgtmDv9jwAzhxZ9LmC6F295snyQ9eUDQ5YtVHJ1udE6p"},
  {"name":"useraaaaaaac", "privateKey":"5K2jun7wohStgiCDSDYjk3eteRH1KaxUQsZTEmTGPH4GS9vVFb7", "publicKey":"EOS5yd9aufDv7MqMquGcQdD6Bfmv6umqSuh9ru3kheDBqbi6vtJ58"},
  {"name":"useraaaaaaad", "privateKey":"5KNm1BgaopP9n5NqJDo9rbr49zJFWJTMJheLoLM5b7gjdhqAwCx", "publicKey":"EOS8LoJJUU3dhiFyJ5HmsMiAuNLGc6HMkxF4Etx6pxLRG7FU89x6X"},
  {"name":"useraaaaaaae", "privateKey":"5KE2UNPCZX5QepKcLpLXVCLdAw7dBfJFJnuCHhXUf61hPRMtUZg", "publicKey":"EOS7XPiPuL3jbgpfS3FFmjtXK62Th9n2WZdvJb6XLygAghfx1W7Nb"},
  {"name":"useraaaaaaaf", "privateKey":"5KaqYiQzKsXXXxVvrG8Q3ECZdQAj2hNcvCgGEubRvvq7CU3LySK", "publicKey":"EOS5btzHW33f9zbhkwjJTYsoyRzXUNstx1Da9X2nTzk8BQztxoP3H"},
  {"name":"useraaaaaaag", "privateKey":"5KFyaxQW8L6uXFB6wSgC44EsAbzC7ideyhhQ68tiYfdKQp69xKo", "publicKey":"EOS8Du668rSVDE3KkmhwKkmAyxdBd73B51FKE7SjkKe5YERBULMrw"}
];

// set up styling classes using material-ui "withStyles"
const styles = theme => ({
  balanceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  banner: {
    backgroundColor: '#3cc47c',
    padding: '20px 0 60px',
    marginBottom: -90,
  },
  name: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  },
  balance: {
    textAlign: 'center',
    fontSize: 130,
    color: 'white',
    fontWeight: 300
  },
  currency: {
    textAlign: 'center',
    fontSize: 130,
    color: 'white',
    fontWeight: 300,
    marginLeft: 20,
  },
  card: {
    margin: 20,
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  formButton: {
    marginTop: theme.spacing.unit,
    width: "100%",
  },
  pre: {
    background: "#ccc",
    padding: 10,
    marginBottom: 0.
  },
  title: {
    fontSize: 80,
    textAlign: 'center',
    marginTop: 30,
  },
  carbonCarrots: {
    width: "100%",
    height: "300px",
    background: `url(${CarbonCarrots}) no-repeat center`,
    backgroundSize: '500px 300px',
    display: 'flex',
    listStyle: 'none',
  },
});

// Index component
class Index extends Component {

  timerID;

  constructor(props) {
    super(props)
    this.state = {
      noteTable: [], // to store the table rows from smart contract
      prevBalance: '0 CCT',
      balance: '0 CCT',
      companyAValue: 58112,
      companyBValue: 113872,
    };
    this.handleFormEvent = this.handleFormEvent.bind(this);
  }

  // generic function to handle form events (e.g. "submit" / "reset")
  // push transactions to the blockchain by using eosjs
  async handleFormEvent(event) {
    // stop default behaviour
    event.preventDefault();
    console.log(event);

    // collect form data
    let account = event.target.account.value;
    let privateKey = event.target.privateKey.value;
    let note = event.target.note.value;

    // prepare variables for the switch below to send transactions
    let actionName = "";
    let actionData = {};

    // define actionName and action according to event type
    switch (event.type) {
      case "submit":
        actionName = "update";
        actionData = {
          _user: account,
          _note: note,
        };
        break;
      default:
        return;
    }

    // eosjs function call: connect to the blockchain
    console.log('privateKey');
    // const eos = Eos({keyProvider: ["5JANTVJ6A3nDsVDVnru4sRhZnHsS9PaJCU45MyFq2j75ZQGhABy"]});
    // const eos = Eos({keyProvider: privateKey});
    // const result = await eos.transaction({
    //   actions: [{
    //     account: "notechainacc",
    //     name: actionName,
    //     authorization: [{
    //       actor: account,
    //       permission: 'active',
    //     }],
    //     data: actionData,
    //   }],
    // });


    // console.log(result);
    // this.getTable();
    // this.getBalance();
  }

  // gets table data from the blockchain
  // and saves it into the component state: "noteTable"
  getTable() {
    const eos = Eos();
    eos.getTableRows({
      "json": true,
      "code": "notechainacc",   // contract who owns the table
      "scope": "notechainacc",  // scope of the table
      "table": "notestruct",    // name of the table as specified by the contract abi
      "limit": 100,
    }).then(result => {
      console.log(result);
      this.setState({ noteTable: result.rows });
    });
  }

  recordCarbonPositiveAction(amount) {

    const eos = Eos({keyProvider: ["5JANTVJ6A3nDsVDVnru4sRhZnHsS9PaJCU45MyFq2j75ZQGhABy"]});

    return eos.transaction(
      {
        actions: [
          {
            account: 'tokenacct',
            name: 'transfer',
            authorization: [{
              actor: 'tokenacct',
              permission: 'active'
            }],
            data: {
              from: 'tokenacct',
              to: 'personacc',
              quantity: amount,
              memo: ''
            }
          }
        ]
      }
    ).then(result => {
      console.log(result);
      // this.setState({ noteTable: result.rows });
    });
  }

  getBalance() {
    const eos = Eos();
    eos.getCurrencyBalance({
      "code": "tokenacct",
      "account": "personacc",
      "symbol": "CCT",
    }).then(result => {
      console.log(result);
      console.log('this.state.prevBalance', this.state.prevBalance);
      console.log('this.state.balance', this.state.balance);
      console.log('this.state.balance', this.state);
      this.setState({ prevBalance: this.state.balance || '0 CCT', balance: (result[0]) || '0 CCT' });
    });
  }

  componentDidMount() {
    this.getTable();
    this.getBalance();
    this.timerID = setInterval(
      () => this.setState({companyAValue: this.state.companyAValue - 3, companyBValue: this.state.companyBValue - 7}),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
}

  render() {
    const { noteTable, prevBalance = '0 CCT', balance = '0 CCT' } = this.state;
    const { classes } = this.props;
    console.log('render');
    console.log(prevBalance.substring(0, prevBalance.length-4));
    console.log(balance.substring(0, balance.length-4));

    const prevValue = prevBalance.substring(0, prevBalance.length-4);
    const value = balance.substring(0, balance.length-4);
    return (

      // <div>
      // <div style={styles.carbonCarrots}></div>
      // </div>
      <div>

          {/* <div>
            <div style={styles.carbonCarrots}></div>
          </div> */}

        <div className={classes.banner}>
        <Typography className={classes.name}>
            CarbonCarrot
          </Typography>
          <Typography className={classes.name}>
            Jack's account balance
          </Typography>

          <div className={classes.balanceContainer}>
            <CountUp className={classes.balance} start={prevValue} end={value} duration={2}/>
            <Typography className={classes.currency}> CCT </Typography>
          </div>
        </div>
        <ClaimList onClickClaim={(amount) => {
          this.recordCarbonPositiveAction(amount).then(_ => {
            this.getBalance();
          })}} />

        <Typography className={classes.title}> Companies </Typography>
        <Companies companyAValue={this.state.companyAValue} companyBValue={this.state.companyBValue}/>
        <OvershootDay/>
      </div>
    );
  }

}

export default withStyles(styles)(Index);
