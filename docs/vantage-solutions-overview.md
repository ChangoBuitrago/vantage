# Vantage Solutions Overview

**Read this first.** This document explains the three solutions that make up Vantage and how to navigate to their detailed specs.

---

## What is Vantage?

Vantage is a **governance layer** for digital product passports (NFTs). When a reseller sells an asset, they pay an **exit tax** (royalty) via Stripe; only then can the NFT transfer to the new owner. The physical sale happens elsewhere (eBay, private sale, etc.); Vantage only governs the **digital twin** and enforces brand rules (royalties, transfer locks).

---

## Three Solutions

The system is split into three parts you can build and test **separately**, then **combine**.

### Solution A — Identity & Wallet

**What it does:** Logs users in (passwordless), gives them an embedded wallet, lists their NFTs ("My Vault"), and lets them sign transactions. No payment or contract logic.

**Tech:** Magic (auth + wallet), Alchemy AA (gasless), Alchemy NFT API (NFT list + history).

**Depends on:** Nothing.

**→ Full brief:** [vantage-solution-a-identity-wallet.md](./vantage-solution-a-identity-wallet.md)

---

### Solution B — Chain / Governance

**What it does:** The on-chain NFT contract. Mints new passports and allows transfers only via `settle()` with a backend-signed **permit** (proving the exit tax was paid). Direct transfers are blocked.

**Tech:** Solidity, OpenZeppelin (ERC-721, ERC-2981), Hardhat. Deployed on Polygon or Base.

**Depends on:** Nothing.

**→ Full brief:** [vantage-solution-b-chain.md](./vantage-solution-b-chain.md)

---

### Solution C — Settlement Orchestration

**What it does:** Calculates the royalty (exit tax), collects payment from the reseller (Stripe), signs the **permit**, and triggers the on-chain `settle()` so the NFT moves. Handles timeouts for unpaid transfers.

**Tech:** Lambda, DynamoDB, EventBridge, Stripe. Uses A for auth/signing/NFT data and B's contract to execute the transfer.

**Depends on:** A and B (or their interfaces).

**→ Full brief:** [vantage-solution-c-settlement.md](./vantage-solution-c-settlement.md)

---

## How They Work Together

```
┌─────────────────────────────────────────────────────────────────┐
│  User (Reseller / Collector)                                     │
└────────────────────────────┬────────────────────────────────────┘
                             │
     ┌───────────────────────┼───────────────────────┐
     │                       │                       │
     ▼                       ▼                       ▼
┌─────────┐             ┌─────────┐             ┌─────────┐
│    A    │             │    C    │             │    B    │
│Identity │────────────▶│Settlement│────────────▶│ Chain   │
│& Wallet │  auth,      │         │  call       │         │
│         │  sign,      │  quote, │  settle()   │  mint,  │
│         │  NFT list   │  pay,   │             │  settle │
│         │             │  permit │             │         │
└─────────┘             └─────────┘             └─────────┘
     │                       │                       │
     │   No dependency        │   Depends on A & B    │   No dependency
     │   on B or C            │                       │   on A or C
     └───────────────────────┴───────────────────────┘
```

- **A** and **B** are independent. Build either first (or in parallel).
- **C** needs A (for who the user is, signing, and holding period) and B (for the contract and permit format). Build C last to wire everything together.

---

## Build Order

1. **B** (Chain) — Deploy contract, test mint and `settle()` with a test permit.
2. **A** (Identity & Wallet) — Login, My Vault, sign UserOp. Can run in parallel with B.
3. **C** (Settlement) — Quote, Stripe, webhook, permit, call B's `settle()` using A for signing.

---

## Need More Detail?

- **Per solution:** Use the links above to open each solution brief (scope, interfaces, sequence flows, acceptance criteria).
- **Full system:** See [vantage-technical-spec.md](../vantage-technical-spec.md) for the complete technical specification, diagrams, API, and implementation checklist.
