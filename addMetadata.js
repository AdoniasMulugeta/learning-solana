import { createUpdateMetadataAccountV2Instruction, PROGRAM_ID} from '@metaplex-foundation/mpl-token-metadata';
import { findMetadataPda } from '@metaplex-foundation/js';
import {Connection, Keypair, PublicKey, sendAndConfirmTransaction, Transaction} from "@solana/web3.js"
import fs from "fs"



async function addMetadata(mintPublicKey){
    const myKeyPair = Keypair.fromSecretKey(new Uint8Array(JSON.parse(fs.readFileSync("/Users/adoniasmulugeta/.config/solana/id.json"))))
    const seed1 = Buffer.from("metadata");
    const seed2 = Buffer.from(PROGRAM_ID.toBytes());
    const seed3 = Buffer.from(mintPublicKey.toBytes());
    const [metadataPDA, _bump] = await PublicKey.findProgramAddress([seed1, seed2, seed3], PROGRAM_ID)

    const accounts = {
        metadata: metadataPDA,
        mint: mintPublicKey,
        mintAuthority: myKeyPair.publicKey,
        payer: myKeyPair.publicKey,
        updateAuthority: myKeyPair.publicKey
    }


    const txn = new Transaction().add(
        createUpdateMetadataAccountV2Instruction(accounts,
            {
                updateMetadataAccountArgsV2: {
                    data: {
                        name: "Ether Fiber", 
                        symbol: "ETF",
                        uri: "https://raw.githubusercontent.com/AdoniasMulugeta/learning-solana/main/metadata.json",
                        sellerFeeBasisPoints: 0,
                        creators: null,
                        collection: null,
                        uses: null
                    },
                    isMutable: true,
                    updateAuthority: myKeyPair.publicKey,
                    primarySaleHappened: true
                }
            }
        )
    )

    const connection = new Connection("https://api.devnet.solana.com");
    try {
        const txId = await sendAndConfirmTransaction(connection, txn, [myKeyPair]);
        console.log(txId);
    } catch (error) {
        console.log(error);
    }
}

addMetadata(new PublicKey("CBVUssufdzFFY2kkXJrvUGLXXEaaoyqcZUD7sgFxH9Qe"))