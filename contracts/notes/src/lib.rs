#![no_std]

use soroban_sdk::{
    contract,
    contractimpl,
    contracttype,
    symbol_short,
    Env,
    String,
    Symbol,
    Vec,
};

#[contracttype]
#[derive(Clone, Debug)]
pub struct BioRecord {
    pub id: u64,
    pub dataset_name: String,
    pub analysis_type: String,
    pub dataset_hash: String,
    pub researcher: String,
}

const RECORDS: Symbol = symbol_short!("RECORDS");

#[contract]
pub struct BioProofContract;

#[contractimpl]
impl BioProofContract {

    // Ambil semua records
    pub fn get_records(env: Env) -> Vec<BioRecord> {

        env.storage()
            .instance()
            .get(&RECORDS)
            .unwrap_or(Vec::new(&env))
    }

    // Tambah record
    pub fn create_record(
        env: Env,
        dataset_name: String,
        analysis_type: String,
        dataset_hash: String,
        researcher: String,
    ) -> String {

        let mut records: Vec<BioRecord> = env.storage()
            .instance()
            .get(&RECORDS)
            .unwrap_or(Vec::new(&env));

        let record = BioRecord {
            id: env.prng().gen::<u64>(),
            dataset_name,
            analysis_type,
            dataset_hash,
            researcher,
        };

        records.push_back(record);

        env.storage().instance().set(&RECORDS, &records);

        String::from_str(&env, "BioRecord berhasil ditambahkan")
    }

    // Hapus record
    pub fn delete_record(env: Env, id: u64) -> String {

        let mut records: Vec<BioRecord> = env.storage()
            .instance()
            .get(&RECORDS)
            .unwrap_or(Vec::new(&env));

        for i in 0..records.len() {

            if records.get(i).unwrap().id == id {

                records.remove(i);

                env.storage().instance().set(&RECORDS, &records);

                return String::from_str(&env, "Record berhasil dihapus");
            }
        }

        String::from_str(&env, "Record tidak ditemukan")
    }
}