# My journey learning the solana chain

`Solana` is a blockchain project setout to improve transaction speed and minimize transaction fees. The main difference it has with `Ethereum` is it can validate much more transactions per second and the transaction fees are much smaller.

Solana Uses `Proof of History` (A Modified form of Proof of Stake) to reach consensus on transactions. 

Transactions are validated using the timestamp data but Validators still need to stake some amount of `SOL` (the native coin on the chain) to be able to validate and submit transactions.

## Learning Projects
---
Interacting with the Solana Chain
using the javascript SDK (@Solana/Web3.js)

### Connecting to Devnet

```typescript
import {Connection, clusterApiUrl} from '@solana/web3.js';

async function connect() {
    const connection = new Connection(clusterApiUrl('devnet'));
}

connect()
```
### Creating a solana token named `EtherFiber`
In order to be able create a new token on solana, first we have to install Solana SPL Tool found here [Installation Guide](https://docs.solana.com/cli/install-solana-cli-tools#use-solanas-install-tool)

After installing SPL Tool we are now ready to create a new token.

### **1. Create a new Token**
To create a new token run the following command in your console 
```console
$ spl-token create-token
```
**Result**

``` console            
Creating token CZ8WZopU1rtWuD4eNUtA8jsz36YqQedSGfu3gcSrZTCD

Address:  CZ8WZopU1rtWuD4eNUtA8jsz36YqQedSGfu3gcSrZTCD
Decimals: 9

Signature: 4rb3qpJ8qx9ESM3kATVAQMVjntDez1bpjctK5w6HyU5tK3GefnshEsatCfJgKuxSfs2G9PnQFvcFpgegkqGtQLy9
```
The command will return a token identifier `CZ8WZopU1rtWuD4eNUtA8jsz36YqQedSGfu3gcSrZTCD` which we'll use in the future to identify the token in other transactions.

### **2. Create an Account**

What we did above is create a token, now we need to have an account to store it. Here we need to mention which type of coin the account will hold, sort of like account currency in a bank.

```console
$ spl-token create-account CZ8WZopU1rtWuD4eNUtA8jsz36YqQedSGfu3gcSrZTCD
```

**Result**

```console
Creating account 7nEsZsBvj3pxi3qjo1SPiUjeqssiqYCmyzfsyATiVai2

Signature: 5cDCvwp7kmmF5RbzP5goHvLS1MESZpugo1ENrxCvF6fR8TvrApSNCvJb3Ye9i7U8e3LmhHSpSMV15ZGFy63nV49a
```

We have now successfully created an account with the address `7nEsZsBvj3pxi3qjo1SPiUjeqssiqYCmyzfsyATiVai2`

### **3.Minting Coins**

Minting coins is the process of generating new coins. Only Authorized accounts can mint coins

We can mint `1,000,000` coins using the command bellow.

```console
$ spl-token mint CZ8WZopU1rtWuD4eNUtA8jsz36YqQedSGfu3gcSrZTCD 1000000
```

**Result**

```console
Minting 1000000 tokens
  Token: CZ8WZopU1rtWuD4eNUtA8jsz36YqQedSGfu3gcSrZTCD
  Recipient: 7nEsZsBvj3pxi3qjo1SPiUjeqssiqYCmyzfsyATiVai2

Signature: 2yLTWzCivuB8izSpns2MYiHDdKgXXu1iVc5jCPKgysAM7Zd7sr5dR4dFCRNf6qfGtYEjzcfTAFALPuT5j86ZTuyT
```

We have now Successfully minted `1,000,000` coins

### **4. Checking Balance***
We can check the balance (total supply) by running the following command

``` command
$ spl-token balance CZ8WZopU1rtWuD4eNUtA8jsz36YqQedSGfu3gcSrZTCD
```

**Result**
```console
1000000
```
