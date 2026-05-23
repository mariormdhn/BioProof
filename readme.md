# BioProof

Blockchain-Based Bioinformatics Analysis Registry using Soroban Smart Contracts on Stellar.

---

## Description

BioProof is a simple decentralized application built using Soroban Smart Contracts on the Stellar blockchain.

The project stores metadata of bioinformatics analyses directly on-chain to support:

- scientific reproducibility
- dataset provenance
- transparent research workflows

Each bioinformatics record contains:

- dataset name
- analysis type
- dataset hash
- researcher name

---

## Contract ID
CAT3CPHR4BAX2MJXIKY4LPAEFU65H7MSWMHVG2JGSLGP4SN5PQLCPN6D

## Features

- Create bioinformatics records
- Retrieve all records
- Delete records by ID
- Immutable blockchain storage

---

## Smart Contract Functions

### create_record()

Create a new bioinformatics analysis record.

### get_records()

Retrieve all stored records.

### delete_record()

Delete a record using its ID.

---

## Technology Stack

- Stellar Blockchain
- Soroban SDK
- Rust

---

## Example Use Case

A researcher stores metadata from an RNA-seq analysis:

- dataset name
- analysis type
- SHA256 dataset hash

The record becomes permanently verifiable on-chain.

---

## Vision

BioProof aims to explore how blockchain technology can support transparency and reproducibility in bioinformatics research.

---

## Author

Mario - Built with Soroban Smart Contracts and Rust.