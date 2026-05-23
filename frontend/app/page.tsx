"use client";

import { CONTRACT_ID } from "../contract";

import {
  Contract,
  Networks,
  rpc,
  TransactionBuilder,
  nativeToScVal,
} from "@stellar/stellar-sdk";

import {
  signTransaction,
} from "@stellar/freighter-api";

import { useState } from "react";
import {
  getAddress,
  requestAccess,
} from "@stellar/freighter-api";



export default function Home() {

  const [datasetName, setDatasetName] = useState("");
  const [analysisType, setAnalysisType] = useState("");
  const [datasetHash, setDatasetHash] = useState("");
  const [researcher, setResearcher] = useState("");

  const [walletAddress, setWalletAddress] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);

  // Connect Freighter Wallet
  const connectWallet = async () => {

  try {

    setIsConnecting(true);

    // Request permission
    const access = await requestAccess();

    if (access.error) {

      alert(access.error);

      return;

    }

    // Get wallet address
    const result = await getAddress();

    if (result.error) {

      alert(result.error);

      return;

    }

    if (result.address) {

      setWalletAddress(result.address);

      alert("Wallet connected successfully!");

    }

  } catch (error) {

    console.error(error);

    alert("Failed to connect wallet");

  } finally {

    setIsConnecting(false);

  }
};

  // Save Record
  const handleSubmit = async () => {

  try {

    if (!walletAddress) {

      alert("Connect wallet first");
      return;

    }

    const server = new rpc.Server(
      "https://soroban-testnet.stellar.org"
    );

    const account = await server.getAccount(walletAddress);

    const contract = new Contract(CONTRACT_ID);

    const transaction = new TransactionBuilder(account, {
      fee: "100",
      networkPassphrase: Networks.TESTNET,
    })
      .addOperation(
        contract.call(
          "create_record",

          nativeToScVal(datasetName),

          nativeToScVal(analysisType),

          nativeToScVal(datasetHash),

          nativeToScVal(researcher)
        )
      )
      .setTimeout(30)
      .build();

    const preparedTransaction =
      await server.prepareTransaction(transaction);

    const signedXDR = await signTransaction(
      preparedTransaction.toXDR(),
      {
        networkPassphrase: Networks.TESTNET,
      }
    );

    const signedTransaction =
      TransactionBuilder.fromXDR(
        signedXDR.signedTxXdr,
        Networks.TESTNET
      );

    const result = await server.sendTransaction(
      signedTransaction
    );

    console.log(result);

    alert("BioRecord successfully stored on blockchain!");

  } catch (error) {

    console.error(error);

    alert("Transaction failed");

  }
};

  return (
    <main className="min-h-screen bg-gradient-to-br from-lime-100 via-yellow-50 to-emerald-100 px-6 py-10">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="mb-10 text-center">

          <h1 className="text-6xl font-black text-emerald-800 tracking-tight mb-3">
            BioProof
          </h1>

          <p className="text-xl text-emerald-700 font-semibold">
            Blockchain-Based Bioinformatics Registry
          </p>

          <p className="text-sm text-gray-600 mt-3">
            Secure scientific reproducibility powered by Stellar & Soroban
          </p>

        </div>

        {/* CARD */}
        <div className="bg-white/80 backdrop-blur-lg border border-white shadow-2xl rounded-3xl p-10">

          <div className="grid gap-6">

            {/* DATASET NAME */}
            <div>

              <label className="block mb-2 text-sm font-bold text-emerald-800">
                Dataset Name
              </label>

              <input
                type="text"
                placeholder="RNASeq_Liver_001"
                value={datasetName}
                onChange={(e) => setDatasetName(e.target.value)}
                className="w-full p-4 rounded-2xl border border-emerald-200 bg-white text-black focus:outline-none focus:ring-4 focus:ring-lime-200 transition"
              />

            </div>

            {/* ANALYSIS TYPE */}
            <div>

              <label className="block mb-2 text-sm font-bold text-emerald-800">
                Analysis Type
              </label>

              <input
                type="text"
                placeholder="Differential Expression"
                value={analysisType}
                onChange={(e) => setAnalysisType(e.target.value)}
                className="w-full p-4 rounded-2xl border border-emerald-200 bg-white text-black focus:outline-none focus:ring-4 focus:ring-lime-200 transition"
              />

            </div>

            {/* DATASET HASH */}
            <div>

              <label className="block mb-2 text-sm font-bold text-emerald-800">
                Dataset Hash
              </label>

              <input
                type="text"
                placeholder="SHA256_HASH_EXAMPLE"
                value={datasetHash}
                onChange={(e) => setDatasetHash(e.target.value)}
                className="w-full p-4 rounded-2xl border border-emerald-200 bg-white text-black focus:outline-none focus:ring-4 focus:ring-lime-200 transition"
              />

            </div>

            {/* RESEARCHER */}
            <div>

              <label className="block mb-2 text-sm font-bold text-emerald-800">
                Researcher Name
              </label>

              <input
                type="text"
                placeholder="Oiram"
                value={researcher}
                onChange={(e) => setResearcher(e.target.value)}
                className="w-full p-4 rounded-2xl border border-emerald-200 bg-white text-black focus:outline-none focus:ring-4 focus:ring-lime-200 transition"
              />

            </div>

            {/* CONNECT WALLET BUTTON */}
            <button
              onClick={connectWallet}
              disabled={isConnecting}
              className="bg-emerald-700 text-white font-semibold px-5 py-4 rounded-2xl hover:bg-emerald-800 transition duration-300 disabled:opacity-50"
            >
              {
                isConnecting
                  ? "Connecting..."
                  : walletAddress
                    ? "Wallet Connected"
                    : "Connect Wallet"
              }
            </button>

            {/* WALLET ADDRESS */}
            {
              walletAddress && (
                <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl">

                  <p className="text-sm text-emerald-800 font-semibold mb-1">
                    Connected Wallet
                  </p>

                  <p className="text-xs text-gray-700 break-all">
                    {walletAddress}
                  </p>

                </div>
              )
            }

            {/* SAVE BUTTON */}
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-emerald-600 to-lime-500 text-white font-bold text-lg p-4 rounded-2xl shadow-lg hover:scale-[1.01] hover:shadow-emerald-300 transition-all duration-300"
            >
              Save BioRecord
            </button>

          </div>

        </div>

        {/* FOOTER */}
        <div className="mt-8 text-center text-sm text-gray-600">

          <p>
            Built with Soroban Smart Contracts on Stellar Blockchain
          </p>

        </div>

      </div>

    </main>
  );
}