# BioProof

Blockchain-Based Bioinformatics Registry powered by Soroban Smart Contracts on Stellar.

---
## Live Demo

Frontend:

https://bioproof.vercel.app/

---
## Overview

BioProof is a decentralized bioinformatics registry system designed to improve scientific reproducibility and transparency in computational biology research.

This project combines:

- Soroban Smart Contracts
- Stellar Blockchain
- Rust
- Next.js
- Freighter Wallet
- Tailwind CSS

to create a lightweight Web3 application for storing immutable bioinformatics metadata on-chain.

---

## Problem

Bioinformatics research often faces issues such as:

- irreproducible computational analyses
- unclear dataset provenance
- modified research outputs
- lack of transparent verification systems

BioProof aims to address these challenges using blockchain technology and decentralized scientific infrastructure.

---

## Features

### Smart Contract Features

- Create Bioinformatics Records
- Retrieve Stored Records
- Delete Records
- Immutable On-Chain Storage

### Frontend Features

- Modern Next.js frontend
- Responsive scientific UI
- Freighter wallet integration
- Stellar Testnet transaction support
- Soroban smart contract interaction

### Web3 Features

- Wallet Authentication
- Blockchain Transaction Signing
- Soroban Contract Invocation
- Decentralized Data Registry

---

## Smart Contract Deployment

### Stellar Testnet

Contract ID:

```text
CAT3CPHR4BAX2MJXIKY4LPAEFU65H7MSWMHVG2JGSLGP4SN5PQLCPN6D
```

Powered by:

- Soroban
- Stellar Testnet

---

## Example Record

```text
Dataset Name : RNASeq_Liver_001
Analysis Type: Differential Expression
Dataset Hash : SHA256_HASH
Researcher   : Mario
```

---

## Project Structure

```text
BIOPROOF/
│
├── contracts/
│   └── notes/
│       └── src/lib.rs
│
├── frontend/
│   ├── app/
│   ├── public/
│   ├── contract.ts
│   ├── package.json
│   └── ...
│
├── Cargo.toml
└── README.md
```

---

## Technology Stack

### Blockchain

- Stellar
- Soroban SDK
- Soroban RPC

### Smart Contract

- Rust

### Frontend

- Next.js
- React
- Tailwind CSS

### Wallet

- Freighter Wallet API

---

## Smart Contract Functions

### create_record()

Stores a new bioinformatics record on-chain.

### get_records()

Retrieves all stored records from blockchain storage.

### delete_record()

Deletes a record using its ID.

---

## Current Development Status

### Completed

- Soroban Smart Contract Deployment
- Next.js Frontend
- Tailwind Scientific UI
- GitHub Repository Setup
- Freighter Wallet Integration
- Blockchain Transaction Signing
- Soroban Contract Invocation
- Stellar Testnet Integration
- Real Blockchain Transaction Execution

### In Progress

- On-Chain Record Viewer
- Real-Time Blockchain Fetching
- Transaction Explorer UI

---

## Local Development

### Frontend

```bash
cd frontend
npm install
npm run dev -- --webpack
```

Open:

```text
http://localhost:3000
```

---

## Wallet Setup

Install:

- Freighter Wallet

Switch network to:

```text
TESTNET
```

Fund wallet using:

- Stellar Friendbot

---

## Smart Contract

Deployed using:

- Soroban Studio
- Stellar Testnet

---

## Web3 Workflow

```text
Frontend (Next.js)
        ↓
Freighter Wallet
        ↓
Soroban Smart Contract
        ↓
Stellar Blockchain
```

---

## Inspiration

BioProof explores the intersection of:

- Bioinformatics
- Blockchain
- Decentralized Science (DeSci)
- Scientific Reproducibility
- Web3 Infrastructure

---

## Future Scope

- IPFS integration
- FASTQ checksum verification
- Workflow provenance tracking
- Decentralized publication registry
- Scientific reproducibility validation

---

## Author

Built by:

Mario Ramadhan

Powered by:

- Soroban
- Stellar
- Rust
- Next.js
- Freighter

---

# BioProof

### Securing Scientific Reproducibility on the Blockchain