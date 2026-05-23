"use client";

import { useState } from "react";

export default function Home() {

  const [datasetName, setDatasetName] = useState("");
  const [analysisType, setAnalysisType] = useState("");
  const [datasetHash, setDatasetHash] = useState("");
  const [researcher, setResearcher] = useState("");

  const handleSubmit = async () => {

    console.log({
      datasetName,
      analysisType,
      datasetHash,
      researcher,
    });

    alert("BioRecord successfully prepared for blockchain submission!");

  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-lime-100 via-yellow-50 to-emerald-100 p-8">

      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-10">

          <h1 className="text-6xl font-black text-emerald-800 mb-3 tracking-tight">
            BioProof
          </h1>

          <p className="text-lg text-emerald-700 font-medium">
            Blockchain-Based Bioinformatics Registry
          </p>

          <p className="text-sm text-gray-600 mt-2">
            Secure scientific reproducibility powered by Stellar & Soroban
          </p>

        </div>

        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-md border border-white shadow-2xl rounded-3xl p-10">

          <div className="grid gap-6">

            {/* Dataset Name */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-emerald-800">
                Dataset Name
              </label>

              <input
                type="text"
                placeholder="RNASeq_Liver_001"
                className=" text-black w-full p-4 rounded-2xl border border-emerald-200 bg-white focus:outline-none focus:ring-4 focus:ring-lime-200 transition"
                onChange={(e) => setDatasetName(e.target.value)}
              />
            </div>

            {/* Analysis Type */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-emerald-800">
                Analysis Type
              </label>

              <input
                type="text"
                placeholder="Differential Expression"
                className=" text-black w-full p-4 rounded-2xl border border-emerald-200 bg-white focus:outline-none focus:ring-4 focus:ring-lime-200 transition"
                onChange={(e) => setAnalysisType(e.target.value)}
              />
            </div>

            {/* Dataset Hash */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-emerald-800">
                Dataset Hash
              </label>

              <input
                type="text"
                placeholder="SHA256_HASH_EXAMPLE"
                className=" text-black w-full p-4 rounded-2xl border border-emerald-200 bg-white focus:outline-none focus:ring-4 focus:ring-lime-200 transition"
                onChange={(e) => setDatasetHash(e.target.value)}
              />
            </div>

            {/* Researcher */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-emerald-800">
                Researcher Name
              </label>

              <input
                type="text"
                placeholder="Oiram"
                className=" text-black w-full p-4 rounded-2xl border border-emerald-200 bg-white focus:outline-none focus:ring-4 focus:ring-lime-200 transition"
                onChange={(e) => setResearcher(e.target.value)}
              />
            </div>

            {/* Button */}
            <button
              onClick={handleSubmit}
              className="mt-4 bg-gradient-to-r from-emerald-600 to-lime-500 text-white font-bold text-lg p-4 rounded-2xl shadow-lg hover:scale-[1.02] hover:shadow-emerald-300 transition-all duration-300"
            >
              Save BioRecord
            </button>

          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-600">

          <p>
            Built with Soroban Smart Contracts on Stellar Blockchain
          </p>

        </div>

      </div>

    </main>
  );
}